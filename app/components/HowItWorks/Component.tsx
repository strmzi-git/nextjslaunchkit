import { config } from "@/config";
import WorkCard from "./WorkCard";
import { IoIosCheckmarkCircle } from "react-icons/io";

interface ComponentInterface {
  title?: string;
  subtitle?: string;
  main?: boolean;
  index?: number;
  cardInfo?: string[];
}

const Component = function ({
  main,
  title,
  subtitle,
  index,
  cardInfo,
}: ComponentInterface) {
  return (
    <div className="max-w-[900px] flex flex-col lg:flex-row lg:gap-[5vw] items-center justify-center mx-auto ">
      <div className="w-[90%] max-w-[400px] my-6 flex flex-col gap-10 items-start  relative justify-center">
        <div className="h-[80%] top-[50%] transform translate-y-[-50%] w-[5px] bg-accentDark rounded-xl absolute left-[42.5px]"></div>
        <WorkCard number={1} title="Initial Idea " />
        <WorkCard number={2} title="Marketing" />
        <WorkCard
          number={3}
          main
          title="Design and Development"
          subtitle="Weeks worth of work, already done for you."
        />
        <WorkCard number={4} title="Launch Date" />
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
