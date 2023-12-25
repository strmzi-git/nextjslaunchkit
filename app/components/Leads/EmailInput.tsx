"use client";

import { useState } from "react";
import PrimaryButton from "../reusables/PrimaryButton";
import { handleNewLead } from "@/app/functions/dbFunctions";

const EmailInput = function () {
  const [leadEmail, setLeadEmail] = useState("");
  return (
    <div className="flex w-[100%]  flex-col md:flex-row gap-2 items-center">
      <input
        id="email-signup-input"
        onChange={(e) => setLeadEmail(e.target.value)}
        placeholder="Email"
        className="input input-bordered w-full max-w-xs"
      />

      <PrimaryButton
        text="Submit"
        extraProps="w-32"
        daisyUiStyles="btn btn-accent font-semibold text-white "
        functionality={() => handleNewLead(leadEmail)}
      />
    </div>
  );
};

export default EmailInput;
