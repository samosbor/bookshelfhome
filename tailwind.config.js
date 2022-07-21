/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#5C7F67",
      secondary: "#ECF4E7",
      accent: "#FAE5E5",
      neutral: "#5D5656",
      "base-100": "#E9E7E7",
      info: "#3ABFF8",
      success: "#36D399",
      warning: "#FBBD23",
      error: "#F87272",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
