"use client";

import { useState } from "react";
import SubmitInput from "../components/Input";
import ButtonPrimary from "../components/ButtonPrimary";
import { Octokit } from "octokit";
import { FaHome } from "react-icons/fa";

import Link from "next/link";

const page = function () {
  const [showPopup, setShowPopup] = useState(false);
  const [username, setUsername] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [successUrl, setSuccessUrl] = useState("");
  const [showMainPage, setShowMainPage] = useState(false);

  const handleSubmit = async function () {
    if (!username) return;
    setShowPopup(true);
    console.log(username);
    try {
      const octokit = new Octokit({
        auth: process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN as string,
        userAgent: "strmzi-git",
      });
      const response = await octokit.request(
        "PUT /repos/{owner}/{repo}/collaborators/{username}",
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
            Accept: "application/vnd.github+json",
          },
          owner: "strmzi-git",
          repo: "fs-template",
          username,
          permission: "pull",
        }
      );
      const { data, status, headers } = response;
      console.log(response);
      if (status === 201) {
        setSuccessUrl(data.html_url);
        setShowSuccessPopup(true);
        setShowMainPage(false);
      }
      setShowPopup(false);
    } catch (err: any) {
      console.log("An error occured:", err);
    }
  };

  return (
    <div className="h-[100vh] w-[100vw] relative border-4 border-orange-400 bg-primaryBlack overflow-hidden pattern-circuit-board-gray-400/20  flex items-center justify-center">
      {/* Background blur for background-pattern */}
      <div className="absolute top-[-30%] z-0 left-0 h-[150%] opacity-90 w-[100%] bg-gradient-to-b from-transparent via-primaryBlack to-transparent"></div>
      <div className="absolute bottom-0 left-[50%] transform opacity-90 translate-x-[-50%] h-[100%] w-[250%] bg-gradient-to-r from-transparent via-primaryBlack to-transparent z-0"></div>
      {/* Background blur for background-pattern */}

      <Link
        href={"/"}
        className="absolute top-[25px] left-[25px] cursor-pointer px-4 py-3 flex bg-opacity-10 bg-primaryWhite rounded-lg hover:bg-opacity-30 duration-300  items-center gap-2"
      >
        <FaHome size={22.5} className="text-primaryWhite" />
        <p className="text-primaryWhite font-semibold text-base">
          Back to homepage
        </p>
      </Link>

      {!showSuccessPopup && (
        <div className=" border border-white overflow-hidden bg-primaryBlack  z-50 flex flex-col py-4 items-center gap-5  w-[500px] absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%] rounded-md p-4">
          <h2 className="text-center  text-primaryWhite font-light  text-lg">
            Success! You now have access to your template.
          </h2>
          <div className="h-[25px]">
            <Link
              href={successUrl}
              className="underline-none text-primaryWhite mx-auto border-b pb-[0.5px] border-primaryWhite hover:pb-[1px] duration-300 transition"
            >
              Click here to view template
            </Link>
          </div>
        </div>
      )}
      {showPopup && (
        <div className=" border border-white overflow-hidden bg-primaryBlack  z-50 flex flex-col py-4 items-center gap-5  w-[500px] absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%] rounded-md p-4">
          <h2 className="text-center  text-primaryWhite  text-xl">
            I confirm my <strong>Github Username</strong> is:
          </h2>
          <div className="border p-2 w-fit mx-auto border-dashed min-w-[200px] border-primaryWhite">
            <p className="text-lg text-primaryWhite">{username}</p>
          </div>
          <div className="flex items-center gap-8">
            <div onClick={() => setShowPopup(false)} className="h-[25px]">
              <p className="border-b text-greyMedium text-sm hover:pb-[1px] cursor-pointer duration-300">
                Cancel
              </p>
            </div>
            <ButtonPrimary
              functionality={handleSubmit}
              content="Confirm"
              props="bg-white text-black mx-auto border  border-primaryWhite"
            />
          </div>
        </div>
      )}
      {showMainPage && (
        <div className=" w-[80%] sm:w-[65%] border p-8 overflow-hidden  rounded-sm z-20 px-2 relative ">
          <h2 className="text-lg sm:text-2xl md:text-4xl sm:leading-[35px] md:leading-[45px] leading-[30px] text-primaryWhite w-[100%] text-center font-bold  ">
            Congratulations <br /> on your purchase of LaunchKit {":)"}
          </h2>
          <p className="text-center text-greyLight text-xs md:text-base my-6">
            In order to gain immediate access, please enter your{" "}
            <strong>Github</strong> username below.
          </p>
          <SubmitInput
            handleSubmit={() => {
              if (!username) return;
              setShowPopup(true);
            }}
            setUsername={setUsername}
          />
          <p className="font-light text-xs mx-auto mt-[20px] text-center w-fit text-greyMedium ">
            Got any questions? Feel free to message me on twitter{" "}
            <span className=" text-white tracking-[0.5px] cursor-pointer hover:underline">
              @strmzi.ai
            </span>
            {" :)"}
          </p>
        </div>
      )}
    </div>
  );
};

export default page;
