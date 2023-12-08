import { config } from "@/config";
import Container from "../Container";
import PricingBox from "./PricingBox";
import MainSubHeader from "../MainSubHeader";

const PricingPage = function () {
  return (
    <div
      id="Pricing"
      className="w-screen overflow-hidden relative  py-16 bg-primary  "
    >
      <Container props="flex items-center flex-col">
        <div className="absolute pattern-polka-green-400/20 scale-[1.4] h-[100px] md:h-[300px] w-[150px] md:w-[200px] top-[-1%] left-[-1%]"></div>
        <div className="absolute pattern-polka-green-400/20 scale-[1.4] h-[100px] md:h-[250px] w-[150px] md:w-[250px] bottom-[-1%] right-[15%]"></div>

        <MainSubHeader
          section="Pricing"
          mainContent={config.pricingPage.actionCall}
          subArray={config.pricingPage.secondaryAcionCall}
        />

        <div className="flex items-center mb-12 gap-16 flex-col md:flex-row ">
          <PricingBox />
          <PricingBox main />
        </div>
      </Container>
    </div>
  );
};

export default PricingPage;
