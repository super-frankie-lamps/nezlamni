/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', "./build/js/*.js"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        montserratSemiBold: ["Montserrat-SemiBold", "sans-serif"],
        montserratBold: ["Montserrat-Bold", "sans-serif"],
      },
      keyframes: {
        'open-menu': {
          '0%': { opacity: '0', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
          '25%': { opacity: '0.25', backgroundColor: 'rgba(0, 0, 0, 0.25)' },
          '50%': { opacity: '0.5', backgroundColor: 'rgba(0, 0, 0, 0.125)' },
          '75%': { opacity: '0.75', backgroundColor: 'rgba(0, 0, 0, 0.05)' },
          '100%': { opacity: '1' },
        },
        'close-menu': {
          '0%': { opacity: '1' },
          '25%': { opacity: '0.75', backgroundColor: 'rgba(0, 0, 0, 0.05)' },
          '50%': { opacity: '0.5', backgroundColor: 'rgba(0, 0, 0, 0.125)' },
          '75%': { opacity: '0.25', backgroundColor: 'rgba(0, 0, 0, 0.25)' },
          '100%': { opacity: '0', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        }
      },
      animation: {
        'open-menu': 'open-menu 0.3s linear forwards',
        'close-menu': 'close-menu 0.3s linear forwards',
      }
    },
  },
  plugins: [],
}

