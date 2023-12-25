import { config } from "@/config";
import Step from "./Step";
import MainSubHeader from "../reusables/MainSubHeader";

const RoadmapPage = function () {
  return (
    <div id="roadmap" className="w-screen   bg-primary py-16">
      <MainSubHeader
        mainContent={config.timelinePage.header}
        subArray={config.timelinePage.subheaderArray}
      />
      <ul className="timeline timeline-vertical ">
        {config.timelinePage.timelineItems.map((item, index) => {
          return (
            <Step
              key={index}
              completedArray={config.timelinePage.timelineComplete}
              index={index}
              complete={config.timelinePage.timelineComplete[index]}
              stepTitle={item}
              stepStyle="step-accent"
            />
          );
        })}
      </ul>
    </div>
  );
};

export default RoadmapPage;
