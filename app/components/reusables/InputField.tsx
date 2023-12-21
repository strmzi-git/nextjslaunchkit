import { Input } from "postcss";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  register: UseFormRegister<any>;
  setValue: (item: string) => void;
  value: string;
  errors: FieldErrors;
  id: string;
  placeholder: string;
}

const InputField = function ({
  register,
  setValue,
  id,
  value,
  errors,
  placeholder,
}: InputFieldProps) {
  return (
    <div
      className={`
        ${errors[id] ? "border-red-400" : "border-secondary"}
        transition duration-300
        relative border h-[45px] px-2 rounded-lg min-w-[300px] max-w-[500px] w-auto shadow-md`}
    >
      <input
        placeholder=" "
        type={`${placeholder === "Password" ? "password" : "text"}`}
        {...register(id, { required: true })}
        className={`
        peer
        w-[100%] h-[100%] outline-none border-none
`}
      />
      <label
        className={`
        absolute 
        left-[7px] peer-placeholder-shown:top-[50%] peer-placeholder-shown:scale-[1] scale-[0.8] duration-300 top-[105%] transform peer-placeholder-shown:translate-y-[-50%] origin-left
        ${errors[id] ? "text-red-400" : "text-greyMedium"}
        text-sm `}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default InputField;
