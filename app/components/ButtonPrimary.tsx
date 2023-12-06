"use client";

import { config } from "@/config";
import Image from "next/image";
import { IconType } from "react-icons";

interface ButtonPrimaryProps {
  props?: string;
  showLogo?: boolean;
  content: string;
  icon?: IconType;
  wiggle?: boolean;
  iconColor?: string;
  functionality?: (...args: any[]) => void;
  iconSize?: number;
}
const ButtonPrimary = function ({
  props,
  functionality,
  content,
  showLogo,
  icon: Icon,
  iconSize,
  wiggle,
  iconColor,
}: ButtonPrimaryProps) {
  return (
    <div
      onClick={functionality && functionality}
      className={`${props}  border border-greyDark text-secondary  px-4 py-2
       group cursor-pointer flex items-center justify-center gap-1 ${
         wiggle && "animate-wiggle"
       }`}
    >
      {Icon && !showLogo && (
        <Icon
          size={iconSize}
          className={`${iconColor} group-hover:transform group-hover:rotate-[-25deg] duration-500`}
        />
      )}
      {showLogo && (
        <Image src={config.logoLocation} alt="Logo" width={20} height={20} />
      )}
      <p className="text-center"> {content}</p>
    </div>
  );
};

export default ButtonPrimary;
