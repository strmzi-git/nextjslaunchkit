"use client";

import { config } from "@/config";
import Container from "../Container";
import MainSubHeader from "../MainSubHeader";
import WorkCard from "./WorkCard";
import Image from "next/image";
import Component from "./Component";
import { useMediaQuery } from "react-responsive";

const HowItWorks = function () {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <div
      id="How it works"
      className="w-screen overflow-hidden  bg-primary py-16"
    >
      <MainSubHeader
        section="How it works"
        mainContent={config.howItWorksPage.header}
        subArray={config.howItWorksPage.subheader}
      />
      <Component />
    </div>
  );
};

export default HowItWorks;
