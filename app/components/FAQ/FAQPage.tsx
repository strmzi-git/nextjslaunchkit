import { config } from "@/config";
import FAQHeader from "./FAQHeader";
import FAQQuestion from "./FAQQuestion";
import { Accordion } from "@mui/material";

const FAQPage = function () {
  return (
    <div id="FAQ" className="w-screen overflow-hidden py-16   ">
      <FAQHeader />
      <div className=" justify-center items-center gap-4 w-[100%] flex flex-col flex-wrap md:flex-row mx-auto">
        {config.faqPage.FaqQuestions.map((q, idx) => {
          return (
            <FAQQuestion
              key={idx}
              question={q}
              answer={config.faqPage.FaqAnswers[idx]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FAQPage;
