"use client";
import { RxExit } from "react-icons/rx";

import { config } from "@/config";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMediaQuery } from "react-responsive";
import Icon from "../Icon";
import ButtonPrimary from "../ButtonPrimary";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import Google from "next-auth/providers/google";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const NavbarItems = function () {
  const [fullScreenNavbar, setFullScreenNavbar] = useState(false);
  const [showMobileNavbarItems, setShowMobileNavbarItems] = useState(false);
  const userSession = useSession();
  console.log(userSession);

  const scrollIntoView = (sectionid: string) => {
    const section = document.getElementById(sectionid);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className="">
      {fullScreenNavbar && (
        <div className=" w-[300px]  absolute top-[45vh] right-[50vw] translate-x-[50%] translate-y-[-50%] z-[200] flex flex-col items-center gap-4">
          {showMobileNavbarItems &&
            config.heroPage.navbarItems.map((item, idx) => {
              return (
                <div className="py-2 px-4 cursor-pointer group hover:bg-accentDark hover:text-primary rounded-lg duration-300 hover:translate-y-[-5%] transform">
                  <button
                    onClick={() => {
                      setFullScreenNavbar(false);
                      setShowMobileNavbarItems(false);
                      document.body.style.overflow = "scroll";
                      setTimeout(() => {
                        scrollIntoView(item);
                      }, 100);
                    }}
                    key={idx}
                    className="text-2xl text-greyDark group-hover:text-primary"
                  >
                    {item}
                  </button>
                </div>
              );
            })}
        </div>
      )}
      {isTablet && (
        <div className="flex items-center gap-4">
          {config.heroPage.navbarItems.map((item, index) => {
            return (
              <button
                onClick={() => scrollIntoView(item)}
                key={index}
                className={` ${
                  index !== config.heroPage.navbarItems.length - 1 && ""
                } 
            cursor-pointer text-center text-sm  text-secondary`}
              >
                {item}
              </button>
            );
          })}
          {userSession.data?.user ? (
            <div className="border p-2  flex items-center gap-2">
              <Image
                src={userSession.data.user.image || ""}
                alt="User profile picture"
                className="rounded-full"
                height={30}
                width={30}
              />
              <p className="text-sm ">{userSession.data.user.name}</p>
              <div className="w-[1px] border-r border-greyMedium h-[20px]"></div>
              <div onClick={() => signOut({ redirect: false })}>
                <RxExit
                  size={22.5}
                  className="text-greyMedium cursor-pointer"
                />
              </div>
            </div>
          ) : (
            <ButtonPrimary
              content="Sign In"
              functionality={() => signIn("github", { redirect: false })}
            />
          )}
        </div>
      )}
      {!isTablet && (
        <div
          className="relative"
          onClick={() => {
            setFullScreenNavbar(!fullScreenNavbar);
            setTimeout(() => {
              setShowMobileNavbarItems(!showMobileNavbarItems);
            }, 300);
            if (!fullScreenNavbar) {
              document.body.style.overflow = "hidden";
            } else {
              document.body.style.overflow = "scroll";
            }
          }}
        >
          <div
            className={`rounded-full absolute top-[50%] translate-y-[-50%] right-[50%] translate-x-[50%] bg-primary border z-[100] flex items-center justify-center h-[50px] w-[50px] ${
              fullScreenNavbar && "transform scale-[45] duration-[1000ms]"
            }`}
          ></div>
          <Icon
            icon={RxHamburgerMenu}
            size={30}
            color=" cursor-pointer z-[200] relative text-secondary"
          />
        </div>
      )}
    </div>
  );
};

export default NavbarItems;
