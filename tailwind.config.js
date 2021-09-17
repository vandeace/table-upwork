module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'black-bg': '#212124',
      'black-item': '#313135',
      green: '#B2E748',
      red: '#D13F3D',
      grey: '#3E3E3F',
      white: '#fff',
      semi: '#888888',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
