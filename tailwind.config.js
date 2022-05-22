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
      'home-pattern': "url('/public/assets/img/homepage.jpg')",
      'fast-icon': "url('/public/assets/icon/fast.svg')",
      'fast-icon-white': "url('/public/assets/icon/white-fast.svg')",
      'save-money-icon': "url('/public/assets/icon/save-money.svg')",
      'sertificate-icon': "url('/public/assets/icon/sertificate.svg')",
      'innovation-icon': "url('/public/assets/icon/innovation.svg')",
    },
  },
  plugins: [],
}
