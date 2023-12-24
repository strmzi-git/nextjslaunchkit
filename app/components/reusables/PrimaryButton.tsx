import { IconType } from "react-icons";

interface PrimaryButtonProps {
  daisyUiStyles?: string;
  extraProps?: string;
  functionality: () => void;
  iconRight?: boolean;
  text: string;
  icon?: IconType;
  iconColor?: string;
}

const PrimaryButton = function ({
  functionality,
  extraProps,
  daisyUiStyles,
  iconRight,
  text,
  icon: Icon,
  iconColor,
}: PrimaryButtonProps) {
  return (
    <button
      className={`flex items-center gap-1 
      ${extraProps && extraProps} 
      btn
     ${daisyUiStyles || "btn-accent text-white"}
  `}
      onClick={functionality}
    >
      {iconRight && <p className="font-[400]">{text}</p>}

      {Icon && (
        <Icon
          size={0}
          className={`
          h-[17.5px] sm:h-[22.5px]
          w-[17.5px] sm:w-[22.5px]
          `}
        />
      )}
      {!iconRight && <p className="font-[400]">{text}</p>}
    </button>
  );
};

export default PrimaryButton;
