import "./globals.css";
import FeaturesPage from "./components/Features/FeaturesPage";
import HeroPage from "./components/Hero/HeroPage";
import { Toaster } from "react-hot-toast";
import PricingPage from "./components/Pricing /PricingPage";
import FAQPage from "./components/FAQ/FAQPage";
import Footer from "./components/Footer/Footer";
import EmailListSignUp from "./components/Leads/EmailListSignUp";
import RoadmapPage from "./components/Roadmap/RoadmapPage";

export default async function Home() {
  return (
    <div
      className=" relative bg-opacity-[50] 
   max-w-screen hide-scrollbar"
    >
      {/* Required for react-hot-toast library to work. Use like this: toast.success(message) toast.error(message)
       */}
      <Toaster />
      <HeroPage />
      <FeaturesPage />
      <RoadmapPage />
      <PricingPage />
      <FAQPage />
      <EmailListSignUp />
      <Footer />
    </div>
  );
}
