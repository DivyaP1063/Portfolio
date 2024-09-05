/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scrollBehavior: {
        smooth: 'smooth'
      },

      fontFamily:{
        pop:["Poppins"]
      }

    },
  },
  plugins: [],
}
