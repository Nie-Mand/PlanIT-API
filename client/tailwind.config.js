module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      colors: {
        homeBg: '#DCE4F7',
      },
      zIndex: {
        "-1": "-1",
      },
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'carattere': ['Carattere', 'cursive'],
      'sourceSerifPro': ['Source Serif Pro'],
      "fontVollkorn": ['Vollkorn'],
      'body': ['Open Sans'],
    }
  },
  plugins: [],
}
