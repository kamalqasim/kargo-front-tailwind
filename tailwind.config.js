const colors = require('tailwindcss/colors');


module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '2rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ...colors,
      'maincolor': '#1d9bf0',
      'inputactive': '#6366f1'
    },
    backgroundImage: {
      'home-pattern': "url('/public/assets/img/homepage.png')",
    }
  },
  plugins: [],
}
