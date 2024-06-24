const { color } = require("framer-motion");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        slab: ['"Josefin Slab"'],
        handwritten: ['"Dancing Script"'],
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        customPulse: {
          "0%,100%": {},
          "50%": {
            transform: "scale(1.1)",
          },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
        scrollReveal: {
          from:{
            backgroundSize:"0% 100%"
          },
          to: {
            backgroundSize: "100% 100%",
          },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },

      },

      // gradient: {
      //   "0%": {
      //     transition: "background-color 300ms ease-in-out 0s",
      //     // ' bg-gradient-to-l from-slate-400 to-slate-50'
      //   },
      //   "100%": {},
      animation: {
        aurora: "aurora 60s linear infinite",
        spotlight: "spotlight 1s ease .55s 1 forwards",
        customPulse: "customPulse 5s ease-in-out infinite",
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        scrollReveal: "scrollReveal linear forwards view(y)",
      },
    },
    plugins: [],
  },
  plugins: [addVariablesForColors],
};


function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}


