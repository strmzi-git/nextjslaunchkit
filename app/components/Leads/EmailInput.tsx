"use client";

import { useState } from "react";
import ButtonPrimary from "../ButtonPrimary";

interface EmailInputProps {
  onEmailSubmit: (leadEmail: string) => void;
}

const EmailInput = function ({ onEmailSubmit }: EmailInputProps) {
  const [leadEmail, setLeadEmail] = useState("");
  return (
    <div className="flex w-[100%]  h-[50px] flex-col md:flex-row gap-2 items-center">
      <div className="w-[100%] rounded-lg  h-[100%] relative border border-black flex pr-4 py-2 gap-2 items-center justify-between">
        <input
          id="email-signup-input"
          onChange={(e) => setLeadEmail(e.target.value)}
          placeholder=" "
          className="outline-none w-[100%] relative z-50 bg-transparent peer p-2 px-5 text-primaryWhite "
        />
        <label className="peer-placeholder-shown:text-greyLight absolute z-0 top-[50%] peer-focus:scale-[0.77] origin-left left-[6%] peer-focus:translate-y-[-190%] peer-placeholder-shown:translate-y-[-50%] translate-y-[-185%] scale-[0.83] text-greyMedium transform peer-focus:text-greyDark duration-200 transition">
          Enter your email
        </label>
      </div>

      <ButtonPrimary
        functionality={() => onEmailSubmit(leadEmail)}
        props="border-1 bg-accentDark text-primary min-w-[180px]  rounded-lg h-[100%] border-white hover:bg-primary duration-300 hover:text-accentDark text-accentDark hover:border-accentDark text-white "
        content="Stay Updated "
      />
    </div>
  );
};

export default EmailInput;
