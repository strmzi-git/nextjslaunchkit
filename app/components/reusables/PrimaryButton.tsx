import { IconType } from "react-icons";

interface PrimaryButtonProps {
  small?: boolean;
  functionality: () => void;
  styles?: string;
  noBorder?: boolean;
  roundedSmall?: boolean;
  iconRight?: boolean;
  text: string;
  icon?: IconType;
  switchColorOnHover?: boolean;
  iconColor?: string;
}

const PrimaryButton = function ({
  small,
  functionality,
  noBorder,
  styles,
  roundedSmall,
  iconRight,
  text,
  icon: Icon,
  iconColor,
  switchColorOnHover,
}: PrimaryButtonProps) {
  return (
    <button
      className={`
      ${
        styles ||
        ` 
        ${small ? "px-2 text-sm" : "px-6"}
        ${switchColorOnHover && "hover:text-primary hover:bg-secondary"}
         py-2 border-secondary transition flex items-center justify-center gap-2 duration-300 border-2 w-auto rounded-full
         ${noBorder && "border-none hover:bg-gray-300 hover:bg-opacity-70  "}
         ${roundedSmall && "rounded-md px-[10px]"}
         `
      }
  `}
      onClick={functionality}
    >
      {iconRight && <p>{text}</p>}

      {Icon && (
        <Icon
          size={0}
          className={`
          h-[17.5px] sm:h-[22.5px]
          w-[17.5px] sm:w-[22.5px]
          ${switchColorOnHover && "hover:text-primary"}
          `}
        />
      )}
      {!iconRight && <p>{text}</p>}
    </button>
  );
};

export default PrimaryButton;
