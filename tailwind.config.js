/** @type {import('tailwindcss').Config} */
import { defaultTheme } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Itim", ...defaultTheme.fontFamily.sans],
        heading: ["Calistoga", "Itim", ...defaultTheme.fontFamily.serif],
      },
      spacing: {
        sm: "1rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
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
    },
  },
  plugins: [],
};
