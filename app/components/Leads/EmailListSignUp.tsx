// Allow users to get added to your email list. Currently this only adds their email to the DB under "leads"
// When mailing/newsletter integration has been set-up they will automatically be entered into your custom email-flow
"use client";

import { config } from "@/config";
import EmailInput from "./EmailInput";
import axios from "axios";

const EmailListSignUp = function () {
  const onSubmitEmail = async function (leadEmail: string) {
    try {
      if (!leadEmail) {
        document.getElementById("email-signup-input")?.focus();
        return;
      }
      await axios.post("/api/addLead", { leadEmail });
    } catch (err: any) {
      console.log("Oh no, an error:", err.message);
    }
  };

  return (
    <div
      id="email-signup"
      className="w-[100%] bg-white relative py-16 flex flex-col items-center justify-center"
    >
      {/* Green background */}
      <div className=" absolute z-0 w-[90vw] h-[575px] top-[50%]  transform translate-y-[-48%] translate-x-[-49%] sm:h-[540px] md:h-[400px] left-[50%] rounded-lg bg-accentDark"></div>
      {/*  */}
      <div className="rounded-lg overflow-hidden relative z-50 min-h-[400px] md:h-[400px] sm:max-h-[600px] w-[90vw] bg-primary p-24 sm:p-18  flex flex-col items-center justify-center">
        <h3 className="font-bold max-w-[800px] text-center min-w-[350px] md:w-auto  text-3xl sm:text-4xl mb-4">
          {config.emailSignUpForm.header}
        </h3>
        <p className="text-center max-w-[800px] w-[275px] sm:w-[365px] md:w-auto leading-[25px] text-sm mb-8">
          {config.emailSignUpForm.persuasiveText}
        </p>
        <div className="min-w-[275px]  sm:w-[350px] md:w-[500px] ">
          <EmailInput onEmailSubmit={onSubmitEmail} />
        </div>
        {/* Patterns in the top left and bottom right corner */}
        <div className="pattern-polka-green-400/60 h-[100px] md:h-[200px] z-0 w-[100px] absolute top-[-40px] left-[-20px]"></div>
        <div className="pattern-polka-green-400/60 h-[100px] md:h-[200px] z-0 w-[100px] absolute bottom-[-40px] right-[-20px]"></div>
      </div>
    </div>
  );
};

export default EmailListSignUp;
