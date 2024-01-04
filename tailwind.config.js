/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      montalternates: ["Montserrat Alternates", "sans-serif"],
      Freehand: ["Freehand575 BT", "sans-serif"],
      Lekton: ["Yeseva One", "serif"],
    },
  },
  plugins: [],
};
