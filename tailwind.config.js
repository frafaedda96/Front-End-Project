/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'immagine_sfondo': "url('./src/img/imgprogetto.jpg'",
      }
    },
  },
  plugins: [],
}

