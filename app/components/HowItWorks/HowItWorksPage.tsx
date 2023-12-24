import { config } from "@/config";
import MainSubHeader from "../reusables/MainSubHeader";
import Component from "./Component";

const HowItWorks = function () {
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
