module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        'wagray-100': '#54656f',
        'wagray-200': '#F0F2F5',
        waborder: '#d1d7db',
        wamessage: '#D9FDD3'
      },
      backgroundImage: {
        texture:
          "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')"
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  }
}
