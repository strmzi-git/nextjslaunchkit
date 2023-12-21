import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { headers } from "next/headers";
import prisma from "@/app/libs/prismadb";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const stripe = new Stripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
    {
      apiVersion: "2023-10-16",
    }
  );
  let data;
  let eventType;
  let event;
  // Check if webhook signing is configured.
  const webhookSecret = process.env.NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET; // Update this according to your secret configuration

  if (webhookSecret) {
    // Retrieve the event by verifying the signature using the raw body and secret.
    const signature = headers().get("stripe-signature") as string;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: any) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    // Extract the object from the event.

    data = event.data;
    eventType = event.type;
  } else {
    // Webhook signing is recommended, but if the secret is not configured in `config.js`,
    // retrieve the event data directly from the requestuest body.
    // data = request.body.data;
    // eventType = request.body.type;
  }

  try {
    switch (eventType) {
      case "checkout.session.completed":
        const dataObject: Stripe.Checkout.Session = event?.data
          .object as Stripe.Checkout.Session;

        const customerId = dataObject.customer as string;
        try {
          const user = await prisma.user.findUnique({
            where: {
              stripeCustomerId: customerId,
            },
          });

          await prisma.paidCustomers.create({
            data: {
              githubUsername: (user?.githubUsername as string) || "",
              email: user?.email as string,
              stripeCustomerId: user?.stripeCustomerId as string,
              name: user?.name as string,
              // change this according to the the prices you've set.
              // Note: 10000 === 100$ (it's measured in cents)
              basicTier: dataObject.amount_subtotal === 10000,
              advancedTier: dataObject.amount_subtotal === 12500,
            },
          });
        } catch (err) {
          console.log(err);
        }
        break;
      case "customer.subscription.created":
      // Incase you're working with subscriptions your custom logic would go here. Make sure to handle all relevant events like subscription cancelling.

      default:
      // Handle unhandled event types (coming soon)
    }
  } catch (err: any) {
    console.log("An error occured while handling events:", err.message);
  }
  return NextResponse.json({});
}
