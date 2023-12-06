"use client";

import Container from "../Container";
import LogoComponent from "../LogoComponent";
import dynamic from "next/dynamic";

const DynamicNavbarItems = dynamic(() => import("./NavbarItems"), {
  ssr: false,
});

const Navbar = function () {
  return (
    <div className="z-[100]  overflow-visible ">
      <Container
        showOverflow
        props={
          "flex w-screen items-center gap-8 py-2 px-6 sm:px-12 md:px-18 lg:px-56 justify-between relative z-50"
        }
      >
        <div className={`flex w-full gap-6 justify-between items-center py-4`}>
          <LogoComponent />

          <DynamicNavbarItems />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
