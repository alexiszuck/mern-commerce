module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'mern-dark': '#232227',
        'mern-gray': '#333235',
        'mern-red': '#ff626d',
        'mern-orange': '#fcad72',
      }
    }
  },
  plugins: [
    require("daisyui"),
  ],
}
