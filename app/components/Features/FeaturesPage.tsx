import { config } from "@/config";
import Container from "../Container";
import MainSubHeader from "../reusables/MainSubHeader";
import FeaturesContainer from "./FeaturesContainer";

const FeaturesPage = function (): JSX.Element {
  return (
    <div
      id="Features"
      className="max-w-screen z-50 py-16 overflow-hidden  relative"
    >
      <Container props="flex flex-col items-center gap-2">
        <MainSubHeader
          section="Features"
          mainContent={config.featuresPage.header}
          subArray={config.featuresPage.subheader}
        />
        <FeaturesContainer />
      </Container>
    </div>
  );
};

export default FeaturesPage;
