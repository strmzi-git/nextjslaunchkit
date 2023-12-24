import { config } from "@/config";
import Link from "next/link";
import MainSubHeader from "../reusables/MainSubHeader";
import Svg from "../Svg";

const FAQHeader = function () {
  return (
    <div className="mx-auto w-[90%] relative mb-8 sm:w-[80%] md:w-[50%] p-6 px-2 ">
      <MainSubHeader
        section="FAQ"
        mainContent="Any Questions? Look here"
        noMargin
      />
      <Svg
        right="right-[70px]"
        top="top-[25px]"
        size="scale-[0.5]"
        color="green"
      />
      <p
        className="text-greyMedium max-w-[60%] mx-auto
       text-center text-xs sm:text-sm "
      >
        Got any unanswered questions? Feel free to send me a DM on Twitter{" "}
        <Link
          href={config.faqPage.linkToContact}
          className="hover:opacity-80 cursor-pointer underline"
        >
          {config.faqPage.contactTag}
        </Link>
      </p>
    </div>
  );
};

export default FAQHeader;
