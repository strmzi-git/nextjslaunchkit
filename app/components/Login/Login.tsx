"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import InputField from "../reusables/InputField";
import PrimaryButton from "../reusables/PrimaryButton";

const Login = function () {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const email = watch("email");
  const password = watch("password");

  const callOnSubmit = function (value: any) {
    console.log(value);
    reset();
  };
  return (
    <div className="flex-col flex  gap-6 items-center justify-center">
      <InputField
        setValue={(value: string) => setValue("email", value)}
        placeholder="Email"
        value={email}
        id="email"
        register={register}
        errors={errors}
      />
      <InputField
        passwordValidationRule={{
          value: 10,
          message: "Password not long enough",
        }}
        setValue={(value: string) => setValue("password", value)}
        placeholder="Password"
        value={password}
        id="password"
        register={register}
        errors={errors}
      />
      <PrimaryButton
        switchColorOnHover
        text="Submit"
        functionality={handleSubmit(callOnSubmit)}
      />
    </div>
  );
};

export default Login;
