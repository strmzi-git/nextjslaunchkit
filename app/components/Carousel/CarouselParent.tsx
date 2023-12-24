"use client";

import Marquee from "react-fast-marquee";
import GithubLogo from "./GithubLogo";
import TypescriptLogo from "./TypescriptLogo";
import NextJsLogo from "./NextJsLogo";
import MongoDBLogo from "./MongoDB";
import TailwindLogo from "./TailwindLogo";
import FigmaLogo from "./FigmaLogo";
import PrismaLogo from "./PrismaLogo";
import StripeLogo from "./StripeLogo";

const CarouselParent = function () {
  return (
    <div className=" pt-16 w-[100%] mx-auto opacity-50 bg-white flex overflow-hideen">
      <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[55%] mx-auto">
        <Marquee
          play
          direction="left"
          speed={20}
          loop={0}
          autoFill
          gradient
          gradientWidth={100}
          gradientColor="white"
        >
          <GithubLogo />
          <TypescriptLogo />
          <NextJsLogo />
          <MongoDBLogo />
          <TailwindLogo />
          <FigmaLogo />
          <PrismaLogo />
          <StripeLogo />
        </Marquee>
      </div>
    </div>
  );
};

export default CarouselParent;
