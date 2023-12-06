import { config } from "@/config";
import Image from "next/image";

interface LogoComponentProps {
  imageHeight?: number;
  imageWidth?: number;
  textColor?: string;
  textSize?: string;
}

const LogoComponent = function ({
  imageWidth,
  imageHeight,
  textColor,
  textSize,
}: LogoComponentProps) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={config.logoLocation}
        alt={`${config.appName} Logo`}
        className=""
        width={imageWidth || 50}
        height={imageHeight || 50}
      />
      <p
        className={`font-bold tracking-[0.5px] ${textSize || "text-2xl"} ${
          textColor || "text-secondary"
        }`}
      >
        LaunchKit
      </p>
    </div>
  );
};

export default LogoComponent;
