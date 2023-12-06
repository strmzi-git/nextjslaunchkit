interface SVGProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size?: string;
  color?: string;
}

const Svg = function ({ top, left, right, bottom, size, color }: SVGProps) {
  return (
    <svg
      className={` absolute ${size && size} ${top && top} ${bottom && bottom} ${
        left && left
      } ${right && right}`}
      width="68"
      height="74"
      viewBox="0 0 68 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.5995 68.5278C50.9995 66.7318 57.7001 65.8258 64.2001 64.9958C65.6001 64.8218 66.8999 65.7928 66.9999 67.1608C67.1999 68.5298 66.1993 69.7818 64.8993 69.9557C58.5993 70.7548 52.0999 71.6097 45.9999 73.3387C44.6999 73.7137 43.2993 72.9418 42.8993 71.6138C42.4993 70.2868 43.2995 68.9038 44.5995 68.5278Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.2003 43.0648C35.5003 32.5538 47.1003 23.3958 57.2003 12.6028C58.1003 11.5948 59.7003 11.5408 60.7003 12.4818C61.7003 13.4238 61.7999 15.0078 60.7999 16.0158C50.6999 26.8398 39.0999 36.0278 28.7999 46.5698C27.7999 47.5538 26.2003 47.5678 25.2003 46.5998C24.3003 45.6328 24.2003 44.0488 25.2003 43.0648Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.89895 2.63576C5.59895 8.65176 5.29953 14.6678 4.99953 20.6848C4.99953 22.0628 3.79895 23.1268 2.39895 23.0598C0.998948 22.9918 -0.00046587 21.8188 -0.00046587 20.4398C0.299534 14.4138 0.598948 8.38876 0.898948 2.36376C0.998948 0.985757 2.19914 -0.0712432 3.59914 0.00375683C4.89914 0.0787568 5.99895 1.25876 5.89895 2.63576Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
