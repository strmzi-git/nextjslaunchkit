"use client";
import { SlWallet } from "react-icons/sl";
import { PiListNumbers } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { IconType } from "react-icons";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
import { BsDatabase } from "react-icons/bs";
import { config } from "@/config";

interface FeaturesBoxProps {
  featureTitle: string;
  featureSubtitle: string[];
  imageSrc?: string;
  index: number;
  functionality?: () => void;
}

type IconObject = {
  icon: IconType;
};

const FeaturesBox = function ({
  featureTitle,
  featureSubtitle,
  functionality,
  imageSrc,
  index,
}: FeaturesBoxProps) {
  const icons = {
    icon3: <PiListNumbers className={"text-greyDark"} size={25} />,
    icon4: <BsDatabase className={"text-greyDark"} size={25} />,
    icon: <SlWallet className={"text-greyDark"} size={25} />,
    icon2: <FaRegUser className={"text-greyDark"} size={25} />,
    icon5: <MdAlternateEmail className={"text-greyDark"} size={25} />,
    icon6: <MdOutlineAnalytics className={"text-greyDark"} size={25} />,
  };

  return (
    <div className="w-[300px] sm:w-[315px] rounded-xl border-2 relative border-greyDark p-4 flex flex-col">
      <div className="w-[100%] flex items-center mb-2 justify-between">
        <p className="text-GreyDark text-lg">{featureTitle}</p>
        {Object.values(icons)[index]}
      </div>
      <ul className="list-none h-[100%] gap-2 flex flex-col justify-around">
        {featureSubtitle.map((content, idx) => (
          <div key={idx} className="flex gap-4 items-center">
            <FaRegCheckCircle
              size={20}
              className={"text-green-600 min-w-[20px]"}
            />

            <p key={idx} className="text-greyMedium text-sm ">
              {content}
            </p>
          </div>
        ))}
        <div className=" bg-green-600 flex items-center justify-center rounded-full mt-4 w-[115px]">
          <p className="text-white font-semibold uppercase py-1 text-xs ">
            Save {config.featuresPage.timeSaved[index]}
          </p>
        </div>
      </ul>
    </div>
  );
};

export default FeaturesBox;
