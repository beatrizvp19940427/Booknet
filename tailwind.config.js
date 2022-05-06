module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
