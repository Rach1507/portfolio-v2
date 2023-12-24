const { color } = require("framer-motion");

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
        customPulse: {
          "0%,100%": {},
          "50%": {
            transform: "scale(1.1)",
          },
        },

        // gradient: {
        //   "0%": {
        //     transition: "background-color 300ms ease-in-out 0s",
        //     // ' bg-gradient-to-l from-slate-400 to-slate-50'
        //   },
        //   "100%": {},
      },
      animation: {
        customPulse: "customPulse 5s ease-in-out infinite",
      },
    },
    plugins: [],
  },
};
