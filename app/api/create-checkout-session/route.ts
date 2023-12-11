import Stripe from "stripe";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  const { priceId, currentUserEmail } = await request.json();

  const origin = request.headers.get("origin");

  const stripe = new Stripe(
    process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string,
    {
      apiVersion: "2023-10-16",
    }
  );
  if (!stripe) return;

  const currentUser = await prisma.user.findUnique({
    where: {
      email: currentUserEmail,
    },
  });

  // Stripe parameters for checkout session
  const params: Stripe.Checkout.SessionCreateParams = {
    // One-time payment or subscription?
    mode: "payment",
    line_items: [
      {
        price: priceId, // Can be found in your stripe dashboard under product details, should look like this: price_1OHB9sHvKmtfMhL89RXcQ6dt (not real)
        quantity: 1,
      },
    ],
    // (optional) Apply can discount codes. Under the products tab in your stripe dashboard, click 'coupons'.
    // Example coupon: i3oP4Rd3 (not real)
    discounts: [
      { coupon: process.env.NEXT_PUBLIC_STRIPE_COUPON_TEST as string },
    ],
    // (optional) Only required if you're going to ask the customer to send promotional emails during checkout
    customer: currentUser?.stripeCustomerId as string,

    success_url: `${origin}/?repoAccess=granted`,
    cancel_url: `${origin}/?repoAccess=denied`,
    // Ask for customer consent before sending promotional emails
    // NOTE: This doesn't work for every country. You need to check for yourself if this works where you live and any other policies that apply to your area.
    // consent_collection: {
    //   promotions: "auto",
    // },
  };

  // Create the checkout session using the parameters
  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create(params);

  // Return the checkoutsession id so the user can be redirected
  return NextResponse.json({ id: checkoutSession.id });
}
