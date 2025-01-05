/** @type {import('tailwindcss').Config} */

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
  plugins: [ ],
}

