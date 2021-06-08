module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-blue' : '#22223B',
        'lighter-blue' : '#4A4E69',
        'helio-gray' : '#9A8C98',
        'sun-tan' : '#C9ADA7',
        'ashe-rose' : '#F2E9E4'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
