"use client";

import { useState } from "react";
import Container from "../Container";
import LogoComponent from "../LogoComponent";
import LoginButton from "./LoginButton";
import { config } from "@/config";
import { RxHamburgerMenu } from "react-icons/rx";
import PrimaryButton from "../reusables/PrimaryButton";

const Navbar = function () {
  const [showMobileNavbarItems, setShowMobileNavbarItems] = useState(false);
  const [fullScreenNavbar, setFullScreenNavbar] = useState(false);
  const scrollIntoView = (sectionid: string) => {
    const section = document.getElementById(sectionid);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="z-[100]  overflow-visible ">
      <Container
        showOverflow
        props={"flex items-center gap-8   justify-between relative z-50"}
      >
        <div className=" w-[300px]  absolute top-[45vh] right-[50vw] translate-x-[50%] translate-y-[-50%] z-[200] flex flex-col items-center gap-4">
          {showMobileNavbarItems && <LoginButton />}
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
        <div className={`flex w-full gap-6 justify-between items-center py-4`}>
          <LogoComponent
            imageHeight={30}
            imageWidth={30}
            textSize="text-base"
          />
          <div className="desktopNavbar:flex hidden items-center gap-4">
            {config.heroPage.navbarItems.map((item, index) => {
              return (
                <PrimaryButton
                  functionality={() => scrollIntoView(item)}
                  key={index}
                  daisyUiStyles="btn text-secondary btn-sm btn-ghost"
                  text={item}
                />
              );
            })}
          </div>
          <LoginButton />
          <div
            className="relative desktopNavbar:hidden"
            onClick={() => {
              if (fullScreenNavbar) {
                setShowMobileNavbarItems(false);
                setFullScreenNavbar(false);
              } else {
                setFullScreenNavbar(!fullScreenNavbar);
                setTimeout(() => {
                  setShowMobileNavbarItems(!showMobileNavbarItems);
                }, 500);
              }
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
            <RxHamburgerMenu
              height={35}
              width={35}
              className="cursor-pointer z-[200] relative text-secondary"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
