// Pricing box to display your offer
// 'Main' argument is required for your main product/service you wish to sell.
// If main is passed in as true, will take the primary product offer (the one you recommend your leads to purchase)
"use client";

import PricingLineItem from "./PricingLineItem";
import { BsRocketTakeoff } from "react-icons/bs";
import { IconType } from "react-icons";
import PrimaryButton from "../reusables/PrimaryButton";

interface PricingBoxProps {
  lineItems: string[];
  includedFeatures: boolean[];
  title: string;
  buttonCTA: string;
  price?: string;
  subtext?: string;
  discountPrice?: string;
  free?: boolean;
  functionality?: () => void;
  iconCTA?: IconType;
  main?: boolean;
}

const PricingBox = function ({
  lineItems,
  title,
  includedFeatures,
  buttonCTA,
  price,
  discountPrice,
  subtext,
  free,
  functionality,
  iconCTA,
  main,
}: PricingBoxProps) {
  return (
    <div
      className={`relative max-w-[95vw] overflow-hidden bg-white  border p-1 rounded-md w-[365px] md:w-[400px]
     `}
    >
      {main && (
        <div className="bg-accentDark text-primary text-sm px-4 py-2 absolute right-[10%] top-[-15px] rounded-full uppercase">
          Recommended
        </div>
      )}
      <div className="h-[125px] flex flex-col gap-1 items-center justify-center w-[100%] bg-gray-100 ">
        <h3
          className={`text-center font-semibold text-xl sm:text-2xl text-secondary `}
        >
          {title}
        </h3>
        <p className="text-sm opacity-80 text-secondary">{subtext}</p>
      </div>
      <div className="px-1 sm:px-3 py-1 ">
        <ul className="list-none my-2 ">
          {lineItems?.map((item, idx) => {
            return (
              <PricingLineItem
                include={includedFeatures[idx]}
                main
                content={item}
                key={idx}
                index={idx}
              />
            );
          })}
        </ul>
        <p className="text-greyDark my-4 font-semibold text-xl sm:text-2xl text-center">
          {!free && (
            <>
              <span className="mr-2 line-through text-sm opacity-60">
                {price}
              </span>
              {discountPrice}
            </>
          )}
        </p>

        <PrimaryButton
          functionality={() => {}}
          text={buttonCTA}
          extraProps="mx-auto w-full"
          daisyUiStyles=""
          icon={BsRocketTakeoff}
        />
      </div>
    </div>
  );
};

export default PricingBox;
