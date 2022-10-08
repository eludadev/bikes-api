const defaultColors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{jsx,tsx}", "./components/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", defaultTheme.fontFamily.mono],
      },
      colors: {
        primary: { ...defaultColors.blue, 500: "#2E59C7" },
      },
    },
  },
  plugins: [],
};
