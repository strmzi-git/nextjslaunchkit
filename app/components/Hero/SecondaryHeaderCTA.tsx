import { BsGithub } from "react-icons/bs";
import ButtonPrimary from "../ButtonPrimary";
import { config } from "@/config";

interface SecondaryHeaderCTAProps {
  isTablet: boolean;
}

const SecondaryHeaderCTA = function ({ isTablet }: SecondaryHeaderCTAProps) {
  const scrollIntoView = (sectionid: string) => {
    const section = document.getElementById(sectionid);

    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`flex relative z-40 items-center animate-moveInFromBelow opacity-0 gap-2 mt-18 ${
        isTablet ? "my-8" : "my-10"
      } md:gap-4 flex-col sm:flex-row`}
    >
      <p className="text-greyMedium text-xs md:text-sm">
        {config.heroPage.tertiaryCTA}
      </p>
      <ButtonPrimary
        functionality={() => scrollIntoView("Pricing")}
        props={" text-xs  rounded-full px-2 gap-2 py-1"}
        content="Watch this repo"
        icon={BsGithub}
        iconSize={isTablet ? 20 : 22.5}
      />
    </div>
  );
};
export default SecondaryHeaderCTA;
