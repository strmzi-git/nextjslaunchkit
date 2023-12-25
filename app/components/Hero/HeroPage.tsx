"use client";

export { SessionProvider } from "next-auth/react";
import Container from "../Container";
import HeaderText from "./HeaderText";
import { useMediaQuery } from "react-responsive";
import SecondaryHeaderText from "./secondaryHeaderText";
import { config } from "@/config";
import Navbar from "./Navbar";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import PrimaryButton from "../reusables/PrimaryButton";
import CarouselParent from "../Carousel/CarouselParent";

const HeroPage = function () {
  const searchParams = useSearchParams();
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    // For when the user gets redirected to the homepage ("/") after a successful or paid stripe checkout session. See /api/create-checkout-session for more info (successURL, cancelURL)
    const access = searchParams?.get("repoAccess");
    if (!hasRun) {
      if (access === "granted") {
        toast.success("Access granted. Check github or your email.");
      } else if (access === "denied") {
        toast.error(
          "An error occurred during payment. Please try again or contact support."
        );
      }
      // Avoid it from running multiple times
      setHasRun(true);
    }
    // Clean-up function (optional)
    return () => {
      setHasRun(false);
    };
  }, [searchParams]);
  // Smooth scrolling a section into view.
  // NOTE: The section must have an "id" (e.g: 'Pricing' for the pricing page)
  const scrollIntoView = (sectionid: string) => {
    const section = document.getElementById(sectionid);

    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative max-w-screen overflow-hidden z-50 px-6 w-[90vw] md:w-[85vw] lg:w-[85vw] mx-auto ">
      <Navbar />
      {/* <Navbar /> */}
      <Container props="flex mt-14">
        <Container props=" w-[50%] flex flex-col">
          {/* <SecondaryHeaderCTA isTablet={isTablet} /> */}
          <HeaderText />
          <SecondaryHeaderText content={config.heroPage.subheader} />
          <div className="mt-8 relative flex z-20  items-center gap-4">
            {/* <ArrowSvg top="top-[5px]" left="left-[-45px]" /> */}
            {/* <ActionButton
            functionality={() => scrollIntoView("Pricing")}
            content={config.heroPage.headerButtonCTA.primaryCTA}
          /> */}
            <PrimaryButton
              // iconRight
              functionality={() => scrollIntoView("Pricing")}
              text={"Free Access"}
              // icon={FaLongArrowAltRight}
            />
            <PrimaryButton
              text="Learn more"
              daisyUiStyles="btn-primary text-secondary btn"
              functionality={() => scrollIntoView("Features")}
            />
          </div>
        </Container>
        <Container props=" flex w-[50%] items-center justify-end">
          <div className="h-[350px] w-[90%] bg-accent rounded-lg"></div>
        </Container>
      </Container>
      <CarouselParent />
    </div>
  );
};

export default HeroPage;
