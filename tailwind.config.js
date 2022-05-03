module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '370px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'black': '#000',
      'white': '#fff',
    },
    extend: {
      fontFamily: {
        "heading": ['good-times', 'sans-serif'],
        "text": ['nimbus-sans', 'serif'],
      },
    
    },
   
  },
  plugins: [],
}