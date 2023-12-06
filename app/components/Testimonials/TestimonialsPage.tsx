"use client";

import { config } from "@/config";
import SingleTestimonial from "./SingleTestimonial";
import { TestimonialType } from "@/app/types/TestimonialType";
import { TestimonialProjectType } from "@/app/types/TestimonialProject";
import MainSubHeader from "../MainSubHeader";
import { useEffect, useState } from "react";
import ShowAllTestimonials from "./ShowAllTestimonials";

const TestimonialsPage = function () {
  const [sizeUp, setSizeUp] = useState(false);

  useEffect(() => {
    if (sizeUp) {
      // When the popup is open
      document.body.style.overflow = "hidden"; // Disable scrolling on the body

      const testimonialsEl = document.getElementById("allTestimonials");
      if (testimonialsEl) {
        testimonialsEl.style.overflow = "scroll"; // Enable scrolling on the popup
      }
    } else {
      // When the popup is closed
      document.body.style.overflow = ""; // Re-enable scrolling on the body

      const testimonialsEl = document.getElementById("allTestimonials");
      if (testimonialsEl) {
        testimonialsEl.style.overflow = ""; // Reset the popup's overflow style
      }
    }
  }, [sizeUp]);

  return (
    <div
      id="Testimonials"
      className="w-screen  px-2 items-center py-16 flex flex-col gap-4"
    >
      <MainSubHeader
        section="Testimonials"
        mainContent={config.testimonialsPage.header}
        subArray={config.testimonialsPage.subheader}
      />

      <div
        className={`max-w-7xl  border-green-400 mx-auto md:columns-2 lg:columns-3 xl:columns-3 space-y-4 md:space-y-6 md:gap-6 py-8 md:py-8`}
      >
        {config.testimonialsPage.testimonials.map(
          (testimonial: any, idx: number) => {
            if (testimonial.type == "quote") {
              return (
                <SingleTestimonial
                  imageSrc={testimonial.imageSrc}
                  rating={testimonial.rating}
                  key={idx}
                  testimonial
                  additionalProps=" "
                  name={testimonial.name}
                  quote={testimonial.quote}
                />
              );
            } else {
              return (
                <SingleTestimonial
                  key={idx}
                  coverImage={testimonial.coverImage}
                  name={testimonial.name}
                  websiteUrl={testimonial.websiteUrl}
                />
              );
            }
          }
        )}
      </div>
      {sizeUp && (
        <ShowAllTestimonials setSizeUp={(value: boolean) => setSizeUp(value)} />
      )}
      <div className="h-[40px]">
        <button
          onClick={() => setSizeUp(true)}
          className="mx-auto w-auto border-b hover:border-greyLight border-greyMedium cursor-pointer hover:pb-[2px]  duration-300"
        >
          <p className=" text-greyMedium hover:text-greyLight duration-300 text-sm">
            View all reviews
          </p>
        </button>
      </div>
    </div>
  );
};

export default TestimonialsPage;
