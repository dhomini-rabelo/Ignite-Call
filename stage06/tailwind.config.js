/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        White: '#FFF',
        Black: '#000',
        Gray: {
          100: '#E1E1E6',
          200: '#A9A9B2',
          400: '#7C7C8A',
          500: '#505059',
          600: '#323238',
          700: '#29292E',
          800: '#202024',
          900: '#121214',
        },
        Ignite: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
          900: '#00291D',
        }
      }
    },
    screens: {
      mb: {'max': '600px'},
    },
  },
  plugins: [],
}
