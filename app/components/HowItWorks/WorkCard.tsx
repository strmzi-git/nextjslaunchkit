interface WorkCardProps {
  number?: number;
  main?: boolean;
  title?: string;
  subtitle?: string;
}

const WorkCard = function ({ number, main, title, subtitle }: WorkCardProps) {
  return (
    <div
      className={`w-[100%] ${
        main &&
        " bg-white bg-opacity-[80%] shadow-md hover:scale-[1.025] min-w-[300px] backdrop-blur-[2px] hover:backdrop-blur-md"
      }  cursor-default duration-400 transform transition rounded-lg px-5 py-2 relative flex items-center gap-4`}
    >
      <div
        className={` ${
          main ? "bg-accentDark" : "bg-accentLight"
        } rounded-full min-h-[50px] min-w-[50px] bg-accentDark flex items-center text-primary justify-center text-xl font-bold`}
      >
        {number}
      </div>
      <div className="">
        <p className="text-sm md:text-lg text-secondary font-semibold ">
          {title}
        </p>
        {subtitle && (
          <p className="text-xs sm:text-sm text-greyLight">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default WorkCard;
