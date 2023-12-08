import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { headers } from "next/headers";
import prisma from "@/app/libs/prismadb";
import { Octokit } from "octokit";

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
      case "payment_intent.succeeded":
        const dataObject: Stripe.Checkout.Session = event?.data
          .object as Stripe.Checkout.Session;

        const customerId = dataObject.customer as string;
        try {
          const githubUsername = await prisma.user.findUnique({
            where: {
              stripeCustomerId: customerId,
            },
          });
          console.log("Github username:", githubUsername?.name);
          const octokit = new Octokit({
            auth: process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN as string,
            userAgent: "strmzi-git",
          });
          const response = await octokit.request(
            "PUT /repos/{owner}/{repo}/collaborators/{username}",
            {
              headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/vnd.github+json",
              },
              owner: "strmzi-git",
              repo: "fs-template",
              username: githubUsername?.name as string,
              permission: "pull",
            }
          );
          const { data, status, headers } = response;
          console.log(data, status);
        } catch (err) {
          console.log(err);
        }
        break;
      case "checkout.session.completed":
        // Do something
        break;
      default:
      // Unhandled event type
    }
  } catch (err: any) {
    console.log("An error occured:", err.message);
  }
  return NextResponse.json({});
}
