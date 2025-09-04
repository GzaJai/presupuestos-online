/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        museo: ['MuseoModerno', 'sans-serif'],
      },
        colors: {
        yui: '#FF3838', // le das un nombre personalizado
      },
    },
  },
  plugins: [],
}


