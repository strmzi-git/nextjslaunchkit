// Not included in the page by default. But meant for any quote you'd like to share with your audience. Could be the best review from your favourite customer if you like.
// The component does not take any argument, instead you'll have to fill out the "quote" section in config.ts

import { config } from "@/config";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const Quote = function () {
  return (
    <div className="w-screen py-16 px-8 my-16 border-y border-greyDark bg-secondaryBlack h-[100px] relative flex flex-col md:flex-row items-center justify-center gap-1">
      <div className="absolute top-[-10%] left-[10%]">
        <FaQuoteLeft size={45} className={"text-greyLight"} />
      </div>
      <p className="text-lg text-primaryWhite  md:text-2xl text-center">
        {config.quote.quoteText}
      </p>
      <p className="text-greyMedium">- {config.quote.quoteAuthor}</p>
      <div className="absolute bottom-[-10%] right-[10%]">
        <FaQuoteRight size={45} className={"text-greyLight"} />
      </div>
    </div>
  );
};

export default Quote;
