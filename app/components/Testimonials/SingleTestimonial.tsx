import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

interface SingleTestimonialProps {
  quote?: string;
  name?: string;
  userLink?: string;
  testimonial?: boolean;
  imageSrc?: string;
  websiteUrl?: string;
  coverImage?: string;
  additionalProps?: string;
  rating?: number;
}

const SingleTestimonial = function ({
  quote,
  name,
  userLink,
  rating,
  imageSrc,
  additionalProps,
  testimonial,
  websiteUrl,
  coverImage,
}: SingleTestimonialProps) {
  return (
    <div
      className={`flex ${
        additionalProps && additionalProps
      } break-inside-avoid overflow-hidden w-[300px] border-greyDark border rounded-md flex-col gap-2 items-center ${
        testimonial ? "p-5" : "p-3"
      }`}
    >
      {testimonial ? (
        <div>
          {" "}
          <p className="text-secondary text-sm text-left leading-[25px] ">
            {quote}
          </p>
          <div className="flex gap-2 items-center justify-between w-[100%]">
            <div className="flex items-center gap-[10px]">
              {imageSrc ? (
                <Image
                  src={(imageSrc && imageSrc) || "/"}
                  alt="Testimonial profile picture"
                  className="rounded-full"
                  width={40}
                  height={40}
                />
              ) : (
                <div className="rounded-full flex items-center justify-center h-[40px] bg-greyLight w-[40px]">
                  {name?.split(" ").map((i) => i[0])}
                </div>
              )}

              <Link href={""} className="text-sm text-greyLight ">
                {name}
              </Link>
            </div>
            <div className="flex items-center">
              {rating &&
                Array.from({ length: rating }, () => "").map((_, index) => (
                  <FaStar
                    key={index}
                    size={17.5}
                    className={"text-orange-400"}
                  />
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          {imageSrc ? (
            <Image
              alt="Project image"
              src={imageSrc}
              className="object-cover h-[200px] w-[250px] transform duration-300 transition hover:scale-[1.1]"
            />
          ) : (
            <Skeleton
              animation="wave"
              variant="rectangular"
              sx={{
                width: "280px",
                transition: "transform 0.4s ease-in-out",
                ":hover": {
                  transform: "scale(1.2)",
                },
                fontSize: "1rem",
                bgcolor: "#444444",
                opacity: "60%",
                height: "225px",
                borderRadius: "5px",
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SingleTestimonial;
