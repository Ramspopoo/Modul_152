/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#003249',
        secondary: '#007EA7'
      },
      fontSize: {
        's-h1': '50px',
        h1: '56px'
      }
    },
  },
  plugins: [],
}
