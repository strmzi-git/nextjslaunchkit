import Stripe from "stripe";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  const { priceId, currentUserEmail } = await request.json();

  const origin = request.headers.get("origin");
  console.log(origin);

  const stripe = new Stripe(
    process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string,
    {
      apiVersion: "2023-10-16",
    }
  );
  if (!stripe) return;
  // Create parameters for the checkout session
  console.log("User email:", currentUserEmail);

  const currentUser = await prisma.user.findUnique({
    where: {
      email: currentUserEmail,
    },
  });
  console.log("Current user:", currentUser);
  const params: Stripe.Checkout.SessionCreateParams = {
    mode: "payment",
    line_items: [
      {
        price: priceId,

        quantity: 1,
      },
    ],
    discounts: [
      { coupon: process.env.NEXT_PUBLIC_STRIPE_COUPON_TEST as string },
    ],
    customer: currentUser?.stripeCustomerId as string,

    success_url: `${origin}/?repoAccess=granted`,
    cancel_url: `${origin}/?repoAccess=denied`,
    // IMPORTANT: Ask for customer consent before sending promotional emails
    // consent_collection: {
    //   promotions: "auto",
    // },
  };

  // Create the checkout session using the parameters
  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create(params);

  // return NextResponse.redirect(checkoutSession.url);
  return NextResponse.json({ id: checkoutSession.id });
}
