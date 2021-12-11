module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderColor: ['active'],
      textColor: ['active'],
    }
  },
  plugins: [],
}
