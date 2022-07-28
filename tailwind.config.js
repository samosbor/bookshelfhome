/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#d3dfd6",
          100: "#b5c9bb",
          200: "#97b4a0",
          300: "#7a9f85",
          400: "#5C7F67",
          500: "#60856c",
          600: "#4b6854",
          700: "#364a3c",
          800: "#202c24",
        },
        secondary: "#ECF4E7",
        accent: "#FAE5E5",
        neutral: "#5D5656",
        "base-100": "#E9E7E7",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },
      dropShadow: {
        pink: [
          "0 20px 13px rgba(250, 229, 229, 0.4)",
          "0 8px 5px rgba(250, 229, 229, 0.3)",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
