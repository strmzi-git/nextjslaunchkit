"use client";

import { useState } from "react";
import ButtonPrimary from "./ButtonPrimary";
import { useMediaQuery } from "react-responsive";
interface SubmitInputProps {
  setUsername: (name: string) => void;
  handleSubmit: () => void;
}

const SubmitInput = function ({ setUsername, handleSubmit }: SubmitInputProps) {
  const [verified, setVerified] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  return (
    <div className="flex w-[100%] flex-col gap-2 items-center">
      <div className="max-w-[400px] w-[100%]  relative border flex pr-4 py-2 gap-2 items-center justify-between">
        <input
          placeholder=" "
          className="outline-none w-[100%] relative z-50 bg-transparent peer p-2 px-3 text-primaryWhite "
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label className="peer-placeholder-shown:text-greyLight absolute z-0 top-[50%] peer-focus:scale-[0.77]         origin-left left-[2%] peer-focus:translate-y-[-125%] peer-placeholder-shown:translate-y-[-50%] translate-y-[-125%] scale-[0.83] text-greyMedium transform peer-focus:text-greyDark duration-200 transition">
          Enter your github username
        </label>
      </div>

      <ButtonPrimary
        functionality={handleSubmit}
        props="border-2 border-orange-400 hover:bg-orange-400 duration-300 hover:text-primaryBlack text-orange-400 px-10 text-semibold bg-transparent "
        content="Submit "
      />
    </div>
  );
};

export default SubmitInput;
