/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-black-700": "#131319",
        "theme-black-600": "#27292D",
        "theme-black-500": "#35373B",
        "theme-gray-700": "#C5C7CA",
        "theme-gray-600": "#6B6C70",
        "theme-gray-500": "#7F8084",
        "theme-blue": "#4A96FF",
      },
    },
  },
  plugins: [],
};
