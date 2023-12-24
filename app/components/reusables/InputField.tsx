import { error } from "console";
import { Input } from "postcss";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  register: UseFormRegister<any>;
  setValue: (item: string) => void;
  value: string;
  errors: FieldErrors;
  id: string;
  placeholder: string;
  passwordValidationRule?: { value: number; message: string };
}

const InputField = function ({
  register,
  setValue,
  id,
  value,
  errors,
  placeholder,
  passwordValidationRule,
}: InputFieldProps) {
  return (
    <div
      className={`
        ${errors[id] ? "border-red-400" : "border-secondary"}
        transition duration-300
        relative border h-[45px] px-2 rounded-lg min-w-[300px] max-w-[500px] w-auto shadow-inner`}
    >
      <input
        placeholder=" "
        type={`${placeholder === "Password" ? "password" : "text"}`}
        {...register(id, {
          required: true,
          minLength: passwordValidationRule,
        })}
        className={`
        peer
        w-[100%] z-50 relative bg-transparent h-[100%] outline-none border-none 
`}
      />
      <label
        className={`
        z-0
        absolute 
        left-[7px] peer-placeholder-shown:top-[50%] peer-placeholder-shown:scale-[1] scale-[0.8] duration-300 top-[105%] transform peer-placeholder-shown:translate-y-[-50%] origin-left
        ${errors[id] ? "text-red-400" : "text-greyMedium"}
        text-sm `}
      >
        {id === "password"
          ? (errors[id] && "Password not long enough") || placeholder
          : placeholder}
      </label>
    </div>
  );
};

export default InputField;
