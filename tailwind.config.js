module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      '0': '0',
      '1/10': '120px',
     },
    extend: {
      fontFamily: {
        'dancing-script': ['"Dancing Script"', 'cursive']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
