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
        mukta: ['Mukta', 'sans-serif']
      },
        colors: {
        yui: '#FF3838',
        custom: {
          gray: 'rgba(92, 114, 128, 0.6)',
          darkgray: 'rgba(60, 60, 60, 0.8)'
        }
      },
       boxShadow: {
        'custom-external-blur': '0 0 80px -15px rgba(0,0,0,0.25)',
        'custom-internal-blur': 'inset 0 0 6px 0 rgba(0,0,0,0.25)'
      },
    },
  },
  plugins: [
        function({ addComponents }) {
      addComponents({
        '.btn-custom-confirm': {
          backgroundColor: '#16a34a',         
          marginBottom: '2.5rem',     
          borderRadius: '0.5rem',     
          color: '#ffffff',           
          fontWeight: '700',              
          transitionDuration: '150ms',
          '&:hover': {
            backgroundColor: '#2563eb',
          },
        },
        '.no-spin': {
          '&::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: '0',
          },
          '&::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: '0',
          },
          '&': {
            '-moz-appearance': 'textfield', // Firefox
          },
        },
      })
    }
  ],
}


