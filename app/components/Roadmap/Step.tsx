import { config } from "@/config";

interface StepProps {
  stepStyle?: string;
  stepTitle: string;
  end?: boolean;
  index: number;
  complete: boolean;
  completedArray: boolean[];
}

const Step = function ({
  stepStyle,
  stepTitle,
  index,
  complete,
  completedArray,
}: StepProps) {
  return (
    <li className="h-[100px]">
      {index !== 0 && (
        <hr className={`${(complete && "bg-accent") || "bg-secondary"}`} />
      )}
      {index % 2 === 0 && (
        <div
          className={`${
            index % 2 === 0 ? "timeline-start" : "timeline-end"
          }  timeline-box`}
        >
          {stepTitle}
        </div>
      )}

      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-5 h-5  ${complete && "text-accent"}`}
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {index % 2 !== 0 && (
        <div
          className={`${
            index % 2 == 0 ? "timeline-start" : "timeline-end"
          }  timeline-box`}
        >
          {stepTitle}
        </div>
      )}
      {index !== completedArray.length - 1 && (
        <hr
          className={`
        ${index === 0 && "bg-accent"}
        ${index !== 0 && completedArray[index + 1] && "bg-accent"}
        ${!completedArray[index + 1] && "bg-secondary"}
        `}
        />
      )}
    </li>
  );
};

export default Step;
