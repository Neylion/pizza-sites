const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    colors: {
      ...colors,
      main: colors.gray,
      secondary: colors.amber,
    },
    extend: {
      boxShadow: {
        'inner-1': 'inset 7px 7px 20px 0px #000000',
      },
      backgroundImage: {
        'pizza-hero': 'url(\'/images/temp-hero.jpeg\')',
        'cart': 'url(\'/images/cart.png\')',
      },
    },
  },
  plugins: [],
};
