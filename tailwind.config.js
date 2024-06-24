/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        primary: "#5F1203",
        secondary: "#D19F9D",
        accent: "#BEA6A0",
      },
    },
  },
  plugins: [],
};
