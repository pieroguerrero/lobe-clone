/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#04ddb2",
        "color-secondary": "#333",
        "color-tertiary": "#767676",
        "color-tertiary-soft": "#eef0f2",
        "color-tertiary-bg": "#f2f3f5",
        "color-quaternary": "#fff",
      },
      fontFamily: {
        "darker-grotesque": ["Darker Grotesque", "sans-serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "25%": {
            opacity: "0.25",
          },
          "50%": {
            opacity: "0.5",
          },
          "75%": {
            opacity: "0.75",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-in 1",
      },
    },
  },
  daisyui: {
    themes: false,
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
