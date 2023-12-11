import { CiCircleQuestion } from "react-icons/ci";

interface FAQQuestionProps {
  question: string;
  answer: string;
}

const FAQQuestion = function ({ question, answer }: FAQQuestionProps) {
  return (
    <div className="min-h-[200px] rounded-md bg-white w-[500px] max-w-[90%] flex gap-4">
      <div className=" h-[100%] ">
        <div className="h-[50px] w-[50px] rounded-lg flex items-center justify-center bg-accentDark">
          <CiCircleQuestion className={"text-white"} size={35} />
        </div>
      </div>
      <div className=" h-[100%] ">
        <h6 className="font-semibold text-xl my-3">{question}</h6>
        <p className="text-greyMedium leading-[25px] text-sm">{answer}</p>
      </div>
    </div>
  );
};

export default FAQQuestion;
