/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './node_modules/flowbite/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: {
          100: '#cccccc',
          200: '#999999',
          300: '#666666',
          400: '#333333',
          500: '#000000',
          600: '#3c3c3c',
        },
        yellow: {
          100: '#f8f0df',
          200: '#f2e0bf',
          300: '#ebd19f',
          400: '#e5c17f',
          500: '#deb25f',
          600: '#b28e4c',
          700: '#856b39',
          800: '#594726',
          900: '#2c2413',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '4rem',
          lg: '5.8rem',
        },
      },
    },
  },
  plugins: [require('flowbite')],
}
