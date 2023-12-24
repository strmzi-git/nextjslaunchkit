import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import toast from "react-hot-toast";

export const handlePricingBoxCheckout = async function (
  userEmail: string,
  priceId: string
) {
  "use server";
  if (!userEmail) {
    toast.error("User must be logged in first.");
    return;
  }
  if (!priceId) {
    toast.error("Must provide price id.");
  }
  if (!process.env.STRIPE_PUBLISHABLE_KEY) {
    toast.error("Must provide stripe pub key.");
  }

  const stripe = (await loadStripe(
    process.env.STRIPE_PUBLISHABLE_KEY as string
  )) as any;
  try {
    // Creates a checkout session. See /api/create-checkout-session for more information.
    const response = await axios.post("/api/create-checkout-session", {
      priceId,
      currentUserEmail: userEmail,
    });
    // Redirects the user to the checkout page
    await stripe.redirectToCheckout({
      sessionId: response.data.id,
    });
  } catch (err: any) {
    console.log("An error occured during checkout.", err.message);
  }
};
