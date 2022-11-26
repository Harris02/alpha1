/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'space':'#1E1E1E',
     },
    },
      keyframes:{
        rotation: {
        "0%, 100%": { transform: "rotate(180deg)" },
        "50%": { transform: "rotate(180deg)" }
      },
    },
    animation: {
      rotation: "rotation 4s ease-in-out infinite"

    },
  },
  plugins: [],
}
