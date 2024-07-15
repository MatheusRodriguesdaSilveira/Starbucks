/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    fontFamily:{
      'OpenSans': ["Open Sans", 'sans-serif'],
      'Oswald': ["Oswald", 'sans-serif'],

    },
    extend: {
      colors: {
        '#e8e9ee': '#e8e9ee',
      },
      backgroundImage: {
        'bg': "url('/img/bg.jpg')",
        'bg2': "url('/img/bg2.jpg')",
        'bg3': "url('/img/bg3.jpg')",
        'bg4': "url('/img/bg4.jpg')",
        'f1': "url('/img/f1.jpg')",
        'f2': "url('/img/f2.jpg')",
        'f3': "url('/img/f3.jpg')",
        'f4': "url('/img/f4.jpg')",
        'f5': "url('/img/f5.jpg')",
      }
    },
  },
  plugins: [],
}

