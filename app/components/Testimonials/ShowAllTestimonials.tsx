"use client";
interface ShowAllTestimonialsProps {
  setSizeUp: (value: boolean) => void;
}

import { config } from "@/config";
import { RiFullscreenExitLine } from "react-icons/ri";

import SingleTestimonial from "./SingleTestimonial";
import MainSubHeader from "../MainSubHeader";

const ShowAllTestimonials = function ({ setSizeUp }: ShowAllTestimonialsProps) {
  return (
    <div className="fixed h-[100vh] w-[100vw] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-greyLight backdrop-blur-md bg-opacity-10 flex justify-center hide-scrollbar items-center z-[150]">
      <div
        id="allTestimonials"
        className=" relative hide-scrollbar w-[90%] lg:w-[95%] xl:w-[80%] pt-[64px] md:pt-24 rounded-lg md:p-12 border border-greyLight  bg-primary bg-opacity-[70%]  h-[90%]  z-[200]"
      >
        <div
          onClick={() => setSizeUp(false)}
          className="absolute right-[15px]  top-[15px] z-[100] transform hover:scale-[1.2] duration-300 cursor-pointer "
        >
          <RiFullscreenExitLine size={40} className={"text-secondary "} />
        </div>
        <MainSubHeader mainContent="Look at what everyone's been saying..." />
        <div className="max-w-7xl w-[300px] md:w-[625px] lg:w-[950px] mx-auto  overflow-scroll md:columns-2 lg:columns-3 xl:columns-3 space-y-4 md:space-y-6 ">
          {config.testimonialsPage.testimonials.map((testimonial, idx) => {
            return (
              <SingleTestimonial
                imageSrc={testimonial.imageSrc}
                quote={testimonial.quote}
                name={testimonial.name}
                testimonial
                rating={testimonial.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowAllTestimonials;
