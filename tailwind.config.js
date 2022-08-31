const lineClampPlugin = require('@tailwindcss/line-clamp');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffcb64',
          500: '#ffb000',
          800: '#D69400',
          900: '#A56913',
        },
        secondary: {
          50: '#000',
          500: '#000',
          800: '#000',
          900: '#000',
        },
      },
    },
  },
  plugins: [lineClampPlugin],
};

