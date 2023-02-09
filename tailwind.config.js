/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn .5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { transform: "scale(10%)" },
          "100%": { transform: "scale(100%)" },
        },
      },
    },
  },
  plugins: [],
};
