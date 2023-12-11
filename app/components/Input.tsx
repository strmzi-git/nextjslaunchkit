// In the component you choose to use this input field, you'll need to add a state variable. Example:
// const [username, setUsername] = useState<string>("")
// Pass the setter part (setUsername) into this component as seen in the interface
// NOTE: You might need to adjust the parameters in the interface
// (don't forgot 'use client' at the top of that file for useState)
// handleSubmit function is for when the user submits the field.
// For example, if they are submitting their email to your newsletter.
"use client";

import ButtonPrimary from "./ButtonPrimary";
import { useMediaQuery } from "react-responsive";
interface SubmitInputProps {
  setUsername: (name: string) => void;
  handleSubmit: () => void;
}

const SubmitInput = function ({ setUsername, handleSubmit }: SubmitInputProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });

  return (
    <div className="flex w-[100%] flex-col gap-2 items-center">
      <div className="max-w-[400px] w-[100%]  relative border flex pr-4 py-2 gap-2 items-center justify-between">
        <input
          // Space is required, or else the animation wont work. (required for placeholder-shown:)
          placeholder=" "
          className="outline-none w-[100%] relative z-50 bg-transparent peer p-2 px-3 text-primaryWhite "
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label className="peer-placeholder-shown:text-greyLight absolute z-0 top-[50%] peer-focus:scale-[0.77]         origin-left left-[2%] peer-focus:translate-y-[-125%] peer-placeholder-shown:translate-y-[-50%] translate-y-[-125%] scale-[0.83] text-greyMedium transform peer-focus:text-greyDark duration-200 transition">
          {/* Manipulate as you wish */}
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
