import type { Config } from "tailwindcss";

const config: Config = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fff",
          accent: "#1677FF",
          secondary: "#090C12",
          greyDark: "#192334",
          greyMedium: "#343D4C",
          greyLight: "#545E6F",
        },
      },
    ],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      animation: {
        wiggle: "wiggle 1.5s ease-in-out infinite",
        moveInFromTop: "moveInFromTop 1.5s ease-in-out ",
        moveInFromBelow: "moveInFromBelow 0.5s ease-in-out 0.2s forwards ",
        moveInFromBelow2: "moveInFromBelow 0.8s ease-in-out 0.4s forwards ",
        moveInFromBelow3: "moveInFromBelow 0.5s ease-in-out 0.5s forwards ",
        moveInFromBelow4: "moveInFromBelow 0.5s ease-in-out 0.8s forwards ",
      },
      keyframes: {
        moveInFromBelow: {
          "0%": {
            transform: "translateY(50%)",
            opacity: "0%",
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: "100%",
          },
        },
        moveInFromTop: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0%",
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: "100%",
          },
        },
        wiggle: {
          "0%, 20%, 80%, 100%": {
            transform: "rotate(0deg)",
          },
          "10%, 60%": {
            transform: "rotate(-1deg)",
          },
          "30%, 70%": {
            transform: "rotate(1deg)",
          },
          "45%": {
            transform: "rotate(-0.5deg)",
          },
          "55%": {
            transform: "rotate(0.5deg)",
          },
        },
      },
      screens: {
        "3xs": "320px",
        "2xs": "320px",
        desktopNavbar: "780px",
        xs: "375px",
        sm: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#FAF9F6",
        accentDark: "#1677FF",
        secondary: "#090C12",
        greyDark: "#192334",
        greyMedium: "#343D4C",
        greyLight: "#545E6F",
        primaryRed: "#DA7474",
        primaryGreen: "#17933A",
        primaryBlue: "#27C8EB",
      },
    },
  },
  plugins: [require("tailwindcss-patterns"), require("daisyui")],
};
export default config;
