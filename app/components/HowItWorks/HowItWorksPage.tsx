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
        mainContent="It's simple, really"
        subArray={[
          "❌ Stop spending days, or weeks even, only to validate a failed idea",
          "✅ Get an idea, validate your idea within 1 day, iterate until you find success.",
        ]}
      />
      <Component />
    </div>
  );
};

export default HowItWorks;
