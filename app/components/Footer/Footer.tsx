"use client";

import LogoComponent from "../LogoComponent";
import { config } from "@/config";
import Link from "next/link";
import toast from "react-hot-toast";

const Footer = function () {
  return (
    <div className="w-[100%] py-16 border-t flex flex-col gap-12 sm:gap-20 items-center sm:items-start justify-center p-8  sm:flex-row sm:flex-wrap">
      <div className="flex flex-col gap-2 max-w-[250px] min-w-[200px] mr-0 sm:md-16">
        <LogoComponent />
        <div className="text-sm text-greyMedium">
          The Template for Effortless Design and Development
        </div>
        <div className="text-sm text-greyMedium opacity-50">
          Built by{" "}
          <Link
            className="text-greyDark font-semibold  text-sm border-b pb-[0.5px] border-greyDark"
            href={config.faqPage.linkToContact}
          >
            {config.faqPage.contactTag}
          </Link>{" "}
          on Twitter
        </div>
      </div>
      <div className=" max-w-[200px] min-w-[125px]">
        <p className="text-greyMedium uppercase mb-2 text-md font-semibold">
          LINKS
        </p>
        <ul className="list-none flex flex-col gap-4">
          {config.heroPage.navbarItems.map((item, idx) => {
            return (
              <p key={idx} className="text-greyDark text-sm">
                {item}
              </p>
            );
          })}
        </ul>
      </div>
      <div className=" max-w-[200px] min-w-[125px]">
        <p className="text-greyMedium uppercase mb-2 text-md font-semibold cursor-pointer">
          LEGAL
        </p>
        <ul className="list-none flex flex-col gap-4">
          <p
            className="text-greyDark text-sm cursor-pointer"
            onClick={() => toast.error("Hey, sorry that doesn't exist yet...")}
          >
            Privacy Policy
          </p>
          <p
            className="text-greyDark text-sm cursor-pointer"
            onClick={() => toast.error("Hey, sorry that doesn't exist yet...")}
          >
            Terms of service
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
