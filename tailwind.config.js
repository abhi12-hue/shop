/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary: "#f42c37",
        secondary: "f42c37",
        brandYellow: "fdc62e",
        brandGreen: "2dcc6f",
        brandWhite: "#eeeeee",
      },
      container:{
        center:true,
        padding:{
          DEFAULT :"1rem" ,
          sm :"3rem",
        },
      },
    },

  },
  plugins: [],
}

