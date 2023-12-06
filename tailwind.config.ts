import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-svg":
          "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3cline x1='50%25' y1='0' x2='50%25' y2='100%25' stroke='%23333' stroke-width='3' stroke-dasharray='6%2c 6'/%3e%3c/svg%3e\")",
        "custom-svg2":
          "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3e%3cstop offset='1.36%25' style='stop-color:%23333'%3e%3c/stop%3e%3cstop offset='51.71%25' style='stop-color:rgba(0, 0, 0, 0)'%3e%3c/stop%3e%3cstop offset='95.89%25' style='stop-color:%23444'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3cline x1='0' y1='50%25' x2='100%25' y2='50%25' stroke='url(%23grad1)' stroke-width='3' stroke-dasharray='6%2c 6'/%3e%3c/svg%3e\")",
        "hero-pattern": "url('/images/carbon-fibre-v2.png')",
      },

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
      boxShadow: {
        pricingShadowPrimary: "0px 2px 25px 10px rgba(250, 250,250,0.08)",
        pricingShadowSecondary: "0px 10px 50px 10px rgba(250, 250,250,0.04)",
      },
      screens: {
        "3xs": "320px",
        "2xs": "320px",
        xs: "375px",
        sm: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#FAF9F6",
        accentLight: "#61CA7F",
        accentDark: "#17933A",
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
  plugins: [require("tailwindcss-patterns")],
};
export default config;
