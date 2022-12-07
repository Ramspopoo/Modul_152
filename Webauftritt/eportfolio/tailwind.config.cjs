/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            colors: {
                textcolor: '#CCDBDC',
                navbackground: '#003249',
                primary: '#9AD1D4',
                banner: '#007EA7'
            },
            fontSize: {
                's-h1': '50px',
                h1: '56px'
            }
        },
    },
    plugins: [],
}
