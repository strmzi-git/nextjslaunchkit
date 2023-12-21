import { BsGithub } from "react-icons/bs";
import { config } from "@/config";
import PrimaryButton from "../reusables/PrimaryButton";

interface SecondaryHeaderCTAProps {
  isTablet: boolean;
}

const SecondaryHeaderCTA = function ({ isTablet }: SecondaryHeaderCTAProps) {
  // Smooth scrolling a section into view.
  // NOTE: The section must have an "id" (e.g: 'Pricing' for the pricing page)
  const scrollIntoView = (sectionid: string) => {
    const section = document.getElementById(sectionid);

    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`flex relative z-40 items-center  gap-2  ${
        isTablet ? "my-6" : "my-10"
      } md:gap-4 flex-col sm:flex-row`}
    >
      <p className="text-greyMedium text-xs md:text-sm">
        {config.heroPage.tertiaryCTA}
      </p>
      <PrimaryButton
        switchColorOnHover
        small
        functionality={() => scrollIntoView("Pricing")}
        text="Watch repository"
        icon={BsGithub}
      />
    </div>
  );
};
export default SecondaryHeaderCTA;
