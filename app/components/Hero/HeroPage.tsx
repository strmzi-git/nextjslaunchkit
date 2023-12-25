"use client";
export { SessionProvider } from "next-auth/react";
import Container from "../Container";
import HeaderText from "./HeaderText";
import SecondaryHeaderText from "./secondaryHeaderText";
import { config } from "@/config";
import Navbar from "./Navbar";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import PrimaryButton from "../reusables/PrimaryButton";
import CarouselParent from "../Carousel/CarouselParent";
import HeaderImage from "./HeaderImage";

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
      <Container props="flex mt-6 flex-col lg:flex-row">
        <Container props=" w-[100%] lg:w-[50%] flex flex-col  justify-center">
          <HeaderText />
          <SecondaryHeaderText content={config.heroPage.subheader} />
          <div className="mt-8 relative flex z-20  items-center gap-4">
            <PrimaryButton
              functionality={() => scrollIntoView("Pricing")}
              text={"Free Access"}
            />
            <PrimaryButton
              text="Learn more"
              daisyUiStyles="btn-primary text-secondary btn"
              functionality={() => scrollIntoView("Features")}
            />
          </div>
        </Container>
        <Container
          showOverflow
          props=" flex w-[100%] lg:w-[50%] items-start justify-center relative"
        >
          <HeaderImage />
        </Container>
      </Container>
      <CarouselParent />
    </div>
  );
};

export default HeroPage;
