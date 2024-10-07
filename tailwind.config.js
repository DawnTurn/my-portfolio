/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ff0059",
        secondary: "#141414",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};

