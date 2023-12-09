"use client";

import { config } from "@/config";
import PricingLineItem from "./PricingLineItem";
import { BsRocketTakeoff } from "react-icons/bs";
import ButtonPrimary from "../ButtonPrimary";
import { useMediaQuery } from "react-responsive";
import prisma from "@/app/libs/prismadb";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

interface PricingBoxProps {
  main?: boolean;
}

const PricingBox = function ({ main }: PricingBoxProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 430px)" });
  const { data } = useSession();

  const handleCheckout = async function (main: boolean) {
    if (!data?.user?.email) {
      toast.error("Please log in first");
      return;
    }
    // const priceId = main
    //   ? process.env.NEXT_PUBLIC_STRIPE_ADVANCED_PRICE_ID_TEST
    //   : process.env.NEXT_PUBLIC_STRIPE_BASIC_PRICE_ID_TEST;
    const priceId = process.env.NEXT_PUBLIC_STRIPE_ADVANCED_PRICE_ID;
    console.log("PRICEI:", priceId);
    if (!priceId || !process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      return;
    }
    const stripe = (await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
    )) as any;

    try {
      const response = await axios.post("/api/create-checkout-session", {
        priceId,
        currentUserEmail: data?.user?.email,
      });
      const result = await stripe.redirectToCheckout({
        sessionId: response.data.id,
      });
      console.log(result);
    } catch (err: any) {
      console.log("Oh no, an error: ", err.message);
    }
  };

  return (
    <div
      className={`relative max-w-[95vw] bg-white px-1 sm:px-3 py-8 border-accentDark border-[3px] rounded-2xl 
      ${main && isMobile && "w-[365px]"}
      ${main && !isMobile && "w-[450px]"}
      ${!main && isMobile && "w-[365px]"}
      ${!main && !isMobile && "w-[425px]"}
      ${
        main
          ? " shadow-pricingShadowPrimary border-opacity-80"
          : "  shadow-pricingShadowSecondary border-opacity-10"
      }`}
    >
      {main && (
        <div className="bg-accentDark text-primary px-2 py-1 absolute right-[10%] top-[-15px] rounded-full uppercaase">
          Recommended
        </div>
      )}

      <h3
        className={`text-center font-bold   ${
          main ? " text-2xl sm:text-3xl" : " text-xl sm:text-2xl"
        } text-greyDark mb-4`}
      >
        {main
          ? config.pricingPage.pricingProductNames.primary
          : config.pricingPage.pricingProductNames.seconary}
      </h3>
      <ul className="list-none my-2 px-2 ">
        {main
          ? config.pricingPage.primaryPricingItems.map((item, idx) => {
              return (
                <PricingLineItem main content={item} key={idx} index={idx} />
              );
            })
          : config.pricingPage.secondaryPricingItems.map((item, idx) => {
              return <PricingLineItem content={item} key={idx} index={idx} />;
            })}
      </ul>

      <p className="text-greyDark my-4 font-semibold text-xl sm:text-2xl text-center">
        <span className=" mr-2 line-through text-sm opacity-60">
          {main
            ? config.pricingPage.primaryProduct.originalPrice
            : config.pricingPage.seconaryProduct.originalPrice}
          $
        </span>
        {main
          ? config.pricingPage.primaryProduct.discountedPrice
          : config.pricingPage.seconaryProduct.discountedPrice}
        $ <span className="text-sm">(only 6 left)</span>
      </p>

      <div className="w-[90%] mx-auto">
        <ButtonPrimary
          showLogo
          functionality={() => {
            handleCheckout((main && main) || false);
          }}
          content={
            main
              ? config.pricingPage.secondaryPricingCTA
              : config.pricingPage.primaryPricingCTA
          }
          props={`
          hover:bg-accentDark text-sm sm:text-base hover:text-primary hover:border-white
          rounded-lg py-2 px-4 w-[100%] hover:border-greyDark duration-300 transition mx-auto ${
            !main && "opacity-90"
          }`}
          icon={BsRocketTakeoff}
        />
      </div>
    </div>
  );
};

export default PricingBox;
