module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#061D3F',
        secondary: '#C0D2DE',
        tan: '#F9F1E9',
        darkTan: '#ECCFB7',
        mediumTan: '#F3DBCB',
      },
      backgroundImage: {
        'message-bkg': "url('/src/assets/images/sidekix-media-g51F6-WYzyU-unsplash.jpg')",
        'dots-pattern': "url('/src/assets/images/dot-seamless-pattern.svg')"
    },
    maxWidth: {
      '85': '85%',
    },
    backgroundSize: {
      '50%': '50%',
      '45%': '45%',
      '40%': '40%',
      '35%': '35%',
      '30%': '30%',
      '25%': '25%',
      '20%': '20%',
      '15%': '15%',
      '10%': '10%',
    }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
