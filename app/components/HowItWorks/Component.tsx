import { config } from "@/config";
import WorkCard from "./WorkCard";
import { IoIosCheckmarkCircle } from "react-icons/io";
const Component = function () {
  return (
    <div className="max-w-[900px] flex flex-col lg:flex-row lg:gap-[5vw] items-center justify-center mx-auto ">
      <div className="w-[90%] max-w-[400px] my-6 flex flex-col gap-10 items-start  relative justify-center">
        <div className="h-[80%] top-[50%] transform translate-y-[-50%] w-[5px] bg-accentDark rounded-xl absolute left-[42.5px]"></div>
        {config.howItWorksPage.phaseHeaders.map((content, idx) => (
          <WorkCard
            subtitle={
              (idx + 1 === 3 && config.howItWorksPage.mainPhaseSubHeader) || ""
            }
            main={idx + 1 === 3}
            key={idx}
            number={idx + 1}
            title={content}
          />
        ))}
      </div>
      <div className="w-[96.5%] sm:w-[99%] max-w-[450px] p-4 bg-white rounded-2xl shadow-lg">
        <h2 className="text-center text-2xl mb-4 font-semibold text-secondary">
          The 'All-In-One' Boilercode for Next.js
        </h2>
        <ul className="list-none flex flex-col gap-4">
          {config.howItWorksPage.cardContents.map((content, index) => {
            return (
              <div key={index} className="flex items-center gap-2">
                <IoIosCheckmarkCircle className={"text-accentDark"} size={25} />
                <p className="text-greyLight text-sm ">{content}</p>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Component;
