/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        mustard: "#F4D04E",
        "gray-500": "#6B6B6B",
        "gray-950": "#111111",
      },
      fontFamily: {
        sans: ["Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
