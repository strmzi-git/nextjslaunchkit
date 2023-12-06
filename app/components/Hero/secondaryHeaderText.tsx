import { config } from "@/config";
import { useMediaQuery } from "react-responsive";

interface SecondaryHeaderTextProps {
  content?: string;
}

const SecondaryHeaderText = function ({ content }: SecondaryHeaderTextProps) {
  return (
    <div className="text-greyMedium animate-moveInFromBelow3 opacity-0 relative z-40 max-w-[300px] sm:max-w-[500px] md:max-w-[600px] xl:max-w-[800px] ">
      <p className="text-xs md:text-sm text-center  leading-[25px] md:leading-[30px]">
        {content}
      </p>
    </div>
  );
};

export default SecondaryHeaderText;
