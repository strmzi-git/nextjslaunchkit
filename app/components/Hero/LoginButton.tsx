"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { RxExit } from "react-icons/rx";
import ButtonPrimary from "../ButtonPrimary";
import PrimaryButton from "../reusables/PrimaryButton";

const LoginButton = function () {
  const userSession = useSession();
  return (
    <>
      {userSession.data?.user ? (
        <div className="border p-2  flex items-center gap-2">
          <Image
            src={userSession.data.user.image || ""}
            alt="User profile picture"
            className=" mask-hexagon mask"
            height={30}
            width={30}
          />
          <p className="text-sm ">{userSession.data.user.name}</p>
          <div className="w-[1px] border-r border-greyMedium h-[20px]"></div>
          <div onClick={() => signOut({ redirect: false })}>
            <RxExit size={22.5} className="text-greyMedium cursor-pointer" />
          </div>
        </div>
      ) : (
        <PrimaryButton
          text="Sign In"
          // if you want to use a different provider you can simply replace "github" with the other provider. ("google")
          functionality={() => signIn("github", { redirect: false })}
        />
      )}
    </>
  );
};

export default LoginButton;
