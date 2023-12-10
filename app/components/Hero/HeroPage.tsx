"use client";
export { SessionProvider } from "next-auth/react";
import Container from "../Container";
import HeaderText from "./HeaderText";
import { useMediaQuery } from "react-responsive";
import SecondaryHeaderText from "./secondaryHeaderText";
import GradientButton from "../GradientButton";
import SecondaryHeaderCTA from "./SecondaryHeaderCTA";
import { config } from "@/config";

import Navbar from "./Navbar";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ArrowSvg from "./ArrowSvg";

const HeroPage = function () {
  const isTablet = useMediaQuery({ query: "(max-width: 625px)" });
  const searchParams = useSearchParams();
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    const access = searchParams?.get("repoAccess");
    if (!hasRun) {
      if (access === "granted") {
        toast.success("Access granted. Check github or your email.");
      } else if (access === "denied") {
        toast.error(
          "An error occurred during payment. Please try again or contact support."
        );
      }
      setHasRun(true);
    }
    return () => {
      setHasRun(false);
    };
  }, [searchParams]);
  const scrollIntoView = (sectionid: string) => {
    const section = document.getElementById(sectionid);

    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className=" min-h-screen pattern-circuit-board-gray-400/30 relative
    max-w-screen py-6 overflow-hidden z-50 "
    >
      <div className="absolute top-[-30%] z-0 left-0 h-[130%] opacity-80 w-[100%] bg-gradient-to-b from-transparent to-primary"></div>
      <div className="absolute bottom-0 left-[50%] transform opacity-80 translate-x-[-50%] h-[100%] w-[250%] bg-gradient-to-r from-transparent via-primary to-transparent z-0"></div>
      <Navbar />
      {/* <Navbar /> */}
      <Container props=" flex flex-col items-center">
        <SecondaryHeaderCTA isTablet={isTablet} />
        <HeaderText content={config.heroPage.headerTexts.primary} />
        <SecondaryHeaderText content={config.heroPage.headerTexts.secondary} />

        <div className="mt-8 relative flex z-20 p-2 items-center gap-4">
          <ArrowSvg top="top-[5px]" left="left-[-45px]" />
          <GradientButton
            functionality={() => scrollIntoView("Pricing")}
            content={config.heroPage.headerButtonCTA.primaryCTA}
          />
        </div>
      </Container>
    </div>
  );
};

export default HeroPage;
