import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { headers } from "next/headers";
import prisma from "@/app/libs/prismadb";

export async function POST(request: NextRequest) {
  const body = await request.text();

  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!, {
    apiVersion: "2023-10-16",
  });
  let data;
  let eventType;
  let event;
  // Check if webhook signing is configured.
  const webhookSecret =
    "whsec_97b6d02817425ff50b3bf27f247ea5cb8c540bfdbc2a6c92c0325bb73727d72e"; // Update this according to your secret configuration

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
      case "payment_intent.succeeded":
        const dataObject: Stripe.Checkout.Session = event?.data
          .object as Stripe.Checkout.Session;
        const customerId = dataObject.customer as string;
        const customerUserData = await prisma.user.update({
          where: {
            stripeCustomerId: customerId,
          },
          data: {
            verifiedPayment: true,
            boilercodeCollected: false,
          },
        });

        // Then define and call a function to handle the event invoice.payment_succeeded
        break;
      case "checkout.session.completed":
        // Payment is successful and the subscription is created.
        // You should provision the subscription and save the customer ID to your database.
        break;
      case "invoice.paid":
        // Continue to provision the subscription as payments continue to be made.
        // Store the status in your database and check when a user accesses your service.
        // This approach helps you avoid hitting rate limits.
        break;
      case "invoice.payment_failed":
        // The payment failed or the customer does not have a valid payment method.
        // The subscription becomes past_due. Notify your customer and send them to the
        // customer portal to update their payment information.
        break;
      default:
      // Unhandled event type
    }
  } catch (err: any) {
    console.log("An error occured:", err.message);
  }
  return NextResponse.json({});
}
