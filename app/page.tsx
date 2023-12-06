import dynamic from "next/dynamic";
import "./globals.css";
import Quote from "./components/Quote/Quote";
import FeaturesPage from "./components/Features/FeaturesPage";
import HeroPage from "./components/Hero/HeroPage";
import toast, { Toaster } from "react-hot-toast";

import TestimonialsPage from "./components/Testimonials/TestimonialsPage";
import PricingPage from "./components/Pricing /PricingPage";
import FAQPage from "./components/FAQ/FAQPage";
import HowItWorks from "./components/HowItWorks/HowItWorksPage";
import Footer from "./components/Footer/Footer";
import EmailListSignUp from "./components/Leads/EmailListSignUp";
import CarouselParent from "./components/Carousel/CarouselParent";

export default async function Home() {
  return (
    <div
      className="bg-primaryBlack relative bg-opacity-[50] 
   max-w-screen hide-scrollbar"
    >
      {/* <iv className="h-[70%] w-[70%] fixed border z-0 blur-2xl rounded-full bg-primaryBlack top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"></iv> */}
      <Toaster />
      <HeroPage />
      <CarouselParent />
      <FeaturesPage />
      <HowItWorks />
      {/* <InfoPage /> */}
      <TestimonialsPage />
      {/* <Quote /> */}
      <PricingPage />
      <FAQPage />
      <EmailListSignUp />
      <Footer />
    </div>
  );
}
