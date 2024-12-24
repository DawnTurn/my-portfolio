/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ff0059",
        secondary: "#141414",
        DarkBg: "#0f0f0f",
        LightBg: "",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};

