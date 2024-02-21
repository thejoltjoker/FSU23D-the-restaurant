/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mbl: { min: "469px" },
      },

      fontFamily: {
        sans: ["Itim", ...defaultTheme.fontFamily.sans],
        heading: ["Calistoga", "Itim", ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        "paragraph-sm": "1.1rem",
        "paragraph-md": "1.15rem",
        "paragraph-lg": "1.25rem",
        "heading-menu": "2rem",
        "heading-sm": "3rem",
        "heading-md": "4rem",
        "heading-lg": "4.5rem",
      },
      spacing: {
        xs: ".5rem",
        sm: "1rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
        wave: "100px",
        "wave-1.5": "150px",
        "wave-2": "200px",
        logo: "12rem",
        "logo-sm": "8rem",
        "logo-md": "10rem",
        "logo-lg": "12rem",
      },
      width: {
        wave: "1728px",
        "home-food-item-sm": "16rem",
        "home-food-item-lg": "28rem",
        "food-blob-sm": "28rem",
        "food-blob-lg": "48rem",
      },
      height: {
        "navbar-sm": "5rem",
        "navbar-md": "6rem",
        "navbar-lg": "7rem",
      },
      colors: {
        "pale-yellow": "#F9C96C",
        "vivid-orange": "#D7472A",
        orange: "#DB5C25",
        "dark-green": "#689B41",
        "dark-red": "#790117",
        "almost-white": "#F9F4EC",
        "pale-yellow-variant": "#EDB445",
        "vivid-orange-variant": "#AC3820",
        "orange-variant": "#AF491D",
        "dark-green-variant": "#507732",
        "dark-red-variant": "#47010D",
        "almost-white-variant": "#EDDDC5",
      },
      boxShadow: {
        "button-disabled": "2px 3px 0 0 #44403c",
        "button-orange": "2px 3px 0 0 #790117",
        "button-vivid-orange": "2px 3px 0 0 #790117",
        "button-dark-red-variant": "2px 3px 0 0 #47010D",
        "button-dark-red": "2px 3px 0 0 #47010D",
        "form-dark-red": "3px 3px 0 0 #790117",
        "form-dark-red-variant": "6px 0px 2px 0 #47010D",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  safelist: [
    "shadow-button-disabled",
    "shadow-button-orange",
    "shadow-button-vivid-orange",
    "shadow-button-dark-red",
    "bg-pale-yellow",
    "bg-vivid-orange",
    "bg-orange",
    "bg-dark-green",
    "bg-dark-red",
    "bg-almost-white",
    "bg-pale-yellow-variant",
    "bg-vivid-orange-variant",
    "bg-orange-variant",
    "bg-dark-green-variant",
    "bg-dark-red-variant",
    "bg-almost-white-variant",
    "fill-pale-yellow",
    "fill-vivid-orange",
    "fill-orange",
    "fill-dark-green",
    "fill-dark-red",
    "fill-almost-white",
    "fill-pale-yellow-variant",
    "fill-vivid-orange-variant",
    "fill-orange-variant",
    "fill-dark-green-variant",
    "fill-dark-red-variant",
    "fill-almost-white-variant",
    "text-pale-yellow",
    "text-vivid-orange",
    "text-orange",
    "text-dark-green",
    "text-dark-red",
    "text-almost-white",
    "text-pale-yellow-variant",
    "text-vivid-orange-variant",
    "text-orange-variant",
    "text-dark-green-variant",
    "text-dark-red-variant",
    "text-almost-white-variant",
  ],
};
