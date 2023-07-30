/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "380px",
      },
    },
    fontFamily: {
      mitr: ["Mitr", "sans-serif"],
      prompt: ["Prompt", "sans-serif"],
      lepeta: ["Lexend Peta", "sans-serif"],
    },
  },
  plugins: [],
};
