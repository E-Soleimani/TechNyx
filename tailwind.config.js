/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mobile': '300px',
        // => @media (min-width: 300px) { ... }

        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'desktop': '1200px',
        // => @media (min-width: 1200px) { ... }
      },

      colors: {
        primary: "#03283F",
        secondary: "#03283FB5",
        skyblue: "#1C7EE8",
        nhover: "#29353dc2",
        fhover: "rgba(91,117,134,0.94)"
      },

      fontFamily:{
        'y_regular':['iranyekan-regular'],
        'y_medium':['iranyekan-medium'],
        'y_bold':['iranyekan-bold'],
      }
    },
  },
  plugins: [],
}

