module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      colors: {
        'wagray-100': '#54656f',
        'wagray-200': '#F0F2F5',
        waborder: '#d1d7db'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  }
}
