import { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
  color: string;
  size: number;
}
const Icon = function ({ icon: Icon, color, size }: IconProps) {
  return <Icon size={size} className={`${color}`} />;
};

export default Icon;
