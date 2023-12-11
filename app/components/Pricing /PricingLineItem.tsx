

import { config } from "@/config";
import { IoIosCheckmarkCircle } from "react-icons/io";

interface PricingLineItemProps {
  content: boolean;
  main?: boolean;
  index: number;
}

const PricingLineItem = function ({
  content,
  index,
  main,
}: PricingLineItemProps) {
  return (
    <li
      className={`w-full flex items-center text-greyDark ${
        !content && "opacity-30"
      } gap-[10px] ${
        main ? " text-sm sm:text-base mb-2 " : "text-xs sm:text-sm mb-2"
      }  
      `}
    >
      <span className="min-w-[15px]">
        <IoIosCheckmarkCircle className={"text-accentDark"} size={25} />
      </span>
      {config.pricingPage.pricingLineItems[index]}
    </li>
  );
};

export default PricingLineItem;
