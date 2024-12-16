/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./mainpage/templates/**/*.{html, js}"],
  darkmode: 'selector',
  theme: {
    extend: {
      backgroundImage:{
        'main-bg': "url('/static/images/main/bg-photo.png')",
      },
      animation: {
        tilt: 'tilt 3s linear infinite'
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(0.25deg)' },
          '75%': { transform: 'rotate(-0.25deg)' },

        }
      }
    },
  },
  plugins: [],
}

