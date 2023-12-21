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
import Login from "./components/Login/Login";

export default async function Home() {
  return (
    <div
      className="bg-primaryBlack relative bg-opacity-[50] 
   max-w-screen hide-scrollbar"
    >
      {/* Required for react-hot-toast library to work. Use like this: toast.success(message) toast.error(message)
       */}
      <Toaster />
      {/*  */}
      <Login />
      <HeroPage />
      <CarouselParent />
      <FeaturesPage />
      {/* <HowItWorks /> */}
      <TestimonialsPage />
      {/* <Quote /> */}
      {/* <PricingPage /> */}
      <FAQPage />
      <EmailListSignUp />
      <Footer />
    </div>
  );
}
