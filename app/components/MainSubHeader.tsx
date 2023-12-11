// Header component with Main and Subheader. Modify as you like. Used in every 'page' at the top. See interface for required and optional arguments

interface MainSubHeaderProps {
  mainContent: string;
  subContent?: string;
  subArray?: string[];
  noMargin?: boolean;
  section?: string;
  white?: boolean;
}

const MainSubHeader = function ({
  mainContent,
  subContent,
  subArray,
  section,
  white,
  noMargin,
}: MainSubHeaderProps) {
  return (
    <div
      className={`flex relative z-50 ${
        !noMargin && "mb-8"
      } items-center gap-1 md:gap-1 flex-col`}
    >
      <p className=" tracking-[0.25px] text-center mx-auto font-bold text-accentDark my-2">
        {section}
      </p>
      <h3
        className={`  ${
          white ? "text-white" : "text-secondary"
        } px-6 sm:px-0 text-center font-bold text-3xl sm:text-4xl mb-2`}
      >
        {mainContent}
      </h3>
      <div className="max-w-[90%]">
        {subArray &&
          subArray.map((item, idx) => {
            return (
              <h4
                key={idx}
                className="text-greyMedium text-center text-sm mb-0"
              >
                {item}
              </h4>
            );
          })}
      </div>
    </div>
  );
};

export default MainSubHeader;
