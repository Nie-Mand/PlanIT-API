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
        homeBg: '#D3CEFF',
        fontColor: "#15173F",
      },
      zIndex: {
        "-1": "-1",
      },
    },
    fontFamily: {
      'poppins': ['Poppins', 'cursive'],
      'comfortaa': ['Comfortaa', 'sans-serif'],
    }
  },
  plugins: [],
}
