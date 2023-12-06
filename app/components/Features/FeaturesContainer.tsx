"use client";

import { config } from "@/config";
import FeaturesBox from "./FeaturesBox";
import { CiWallet } from "react-icons/ci";
import { GrPowerCycle } from "react-icons/gr";
import { BsStars } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa6";
import { IconType } from "react-icons";

const FeaturesContainer = function () {
  const getBuilding = () => {};
  return (
    <div className="grid relative z-50 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {config.featuresPage.featureTitles.map((title, index) => {
        return (
          <FeaturesBox
            index={index}
            key={index}
            featureTitle={title}
            featureSubtitle={config.featuresPage.featureSubtitles[index]}
          />
        );
      })}
    </div>
  );
};

export default FeaturesContainer;
