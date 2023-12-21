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
      username: "",
      password: "",
    },
  });
  const username = watch("username");
  const password = watch("password");

  const callOnSubmit = function () {
    reset();
  };
  return (
    <div className="flex-col flex  gap-6 items-center justify-center">
      <InputField
        setValue={(value: string) => setValue("username", value)}
        placeholder="Username"
        value={username}
        id="username"
        register={register}
        errors={errors}
      />
      <InputField
        setValue={(value: string) => setValue("password", value)}
        placeholder="Password"
        value={password}
        id="Password"
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
