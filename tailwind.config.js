module.exports = {
  purge: [
    './src/**/*.html',
     './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'rubik': '"Rubik", sans-serif',
    },
    extend: {
      backgroundImage: theme=> ({
        'hero-pattern': "url('./images/pattern-bg.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
