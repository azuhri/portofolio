/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Tambahkan nama font di sini
      },
      colors: {
        primary: '#264653',
        secondary: '#2a9d8f',
        light: '#e9c46a',
        'light-secondary': '#f4a261',
        'light-primary': '#e76f51',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light","coffee", "dark", "lemonade", "night"],
  },
}

