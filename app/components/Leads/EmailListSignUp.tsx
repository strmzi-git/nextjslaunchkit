"use client";

import { useState } from "react";
import SubmitInput from "../Input";
import EmailInput from "./EmailInput";
import axios from "axios";
import MainSubHeader from "../MainSubHeader";

const EmailListSignUp = function () {
  const onSubmitEmail = async function (leadEmail: string) {
    try {
      if (!leadEmail) return;
      const apiResponse = await axios.post("/api/addLead", { leadEmail });
      console.log(apiResponse);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      id="email-signup"
      className="w-[100%] bg-white relative py-16 flex flex-col items-center justify-center"
    >
      <div className=" absolute z-0 w-[90vw] h-[575px] top-[50%]  transform translate-y-[-48%] translate-x-[-49%] sm:h-[540px] md:h-[400px] left-[50%] rounded-lg bg-accentDark"></div>
      <div className="rounded-lg overflow-hidden relative z-50 min-h-[400px] md:h-[400px] sm:max-h-[600px] w-[90vw] bg-primary p-24 sm:p-18  flex flex-col items-center justify-center">
        <h3 className="font-bold max-w-[800px] text-center min-w-[350px] md:w-auto  text-3xl sm:text-4xl mb-4">
          Stay informed with new features and latest offers
        </h3>
        <p className="text-center max-w-[800px] w-[275px] sm:w-[365px] md:w-auto leading-[25px] text-sm mb-8">
          Say goodbye to spending weeks building a landing page. Instead,
          LaunchKit does it for you! Production ready next.js boilerplate with
          everything you need to get leads, sell your product/service and track
          analytics
        </p>
        <div className="min-w-[275px]  sm:w-[350px] md:w-[500px] ">
          <EmailInput onEmailSubmit={onSubmitEmail} />
        </div>
        <div className="pattern-polka-green-400/60 h-[100px] md:h-[200px] z-0 w-[100px] absolute top-[-40px] left-[-20px]"></div>
        <div className="pattern-polka-green-400/60 h-[100px] md:h-[200px] z-0 w-[100px] absolute bottom-[-40px] right-[-20px]"></div>
      </div>
    </div>
  );
};

export default EmailListSignUp;
