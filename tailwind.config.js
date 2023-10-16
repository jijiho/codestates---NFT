/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      animation: {
        "infiRoll1":
          "rollingLeft  60s linear 0s infinite normal forwards running",

        "infiRoll2":
          "rollingLeftClone 60s linear 0s infinite normal none running",
      },
      keyframes: {
        rollingLeft: {
          "0%": {
           transfrom: "translateX(0)" ,
          },
          "50%": {
            transform: "translateX(-100%)",
          },
          "50.01%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        rollingLeftClone: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-200%)",
          },
        },
      },

    },
  },
  plugins: [],
};
