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
      className="w-[100%] relative py-16 flex items-center justify-center"
    >
      <div className="rounded-lg py-6 gap-2 border w-[90vw] bg-primary flex flex-col items-center justify-center">
        <h3 className="font-bold max-w-[800px] text-center min-w-[350px] md:w-auto  text-3xl sm:text-4xl mb-4">
          {config.emailSignUpForm.header}
        </h3>
        <p className="text-center max-w-[800px] w-[275px] sm:w-[365px] md:w-auto leading-[25px] text-sm mb-8">
          {config.emailSignUpForm.persuasiveText}
        </p>
        <div className="min-w-[275px]  sm:w-[350px] md:w-[500px] ">
          <EmailInput />
        </div>
      </div>
    </div>
  );
};

export default EmailListSignUp;
