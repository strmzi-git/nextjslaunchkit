import { config } from "@/config";
import Container from "../Container";
import PricingBox from "./PricingBox";
import MainSubHeader from "../reusables/MainSubHeader";
import { getServerSession } from "next-auth";
import { handlePricingBoxCheckout } from "@/app/functions/payment";

const PricingPage = async function () {
  const userData = await getServerSession();
  // Put this into vercel environment variables
  const priceId = process.env.STRIPE_PRICE_ID as string;

  return (
    <div
      id="Pricing"
      className="w-screen bg-white overflow-hidden relative py-8   "
    >
      <Container props="flex items-center flex-col">
        <MainSubHeader
          section="Pricing"
          mainContent={config.pricingPage.header}
          subArray={config.pricingPage.subheader}
        />

        <div className="flex items-center mb-12 gap-16 flex-col md:flex-row ">
          <PricingBox
            title={config.pricingPage.pricingProductNames.primary}
            free
            functionality={async () => {
              "use server";
              handlePricingBoxCheckout(userData?.user.email, priceId);
            }}
            subtext={config.pricingPage.pricingProductNames.primarySubtext}
            buttonCTA={config.pricingPage.primaryPricingCTA}
            lineItems={config.pricingPage.pricingLineItems}
            includedFeatures={config.pricingPage.primaryFeaturesInclude}
          />
        </div>
      </Container>
    </div>
  );
};

export default PricingPage;
