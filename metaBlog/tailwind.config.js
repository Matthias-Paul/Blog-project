/** @type {import('tailwindcss').Config} */
import lineClamp from "@tailwindcss/line-clamp"
export default {
  content: [
    "/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        jakarta:["Jakarta Sans", "sans-serif"],
        serif:["Source Serif Pro", "sans-serif"],
        work:["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [ lineClamp],
}

