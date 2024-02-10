/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
          paleyellow: '#F9C96C',
          vividorange: '#D7472A',
          orange: '#DB5C25',
          darkgreen: '#689B41',
          darkred: '#790117',
          almostwhite: '#F9F4EC',
          paleyellowvariant: '#EDB445',
          vividorangevariant: '#AC3820',
          orangevariant: '#AF491D',
          darkgreenvariant: '#507732',
          darkredvariant: '#47010D',
          almostwhitevariant: '#EDDDC5',
        },
    },
  },
  plugins: [],
};
