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
       boxShadow: {
        'custom-external-blur': '0 0 80px -15px rgba(0,0,0,0.25)',
        'custom-internal-blur': 'inset 0 0 6px 0 rgba(0,0,0,0.25)'
      },
    },
  },
  plugins: [],
}


