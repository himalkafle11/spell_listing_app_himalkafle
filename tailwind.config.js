module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  theme:{
    extend:{
      colors:{
        navbarBackgroundColor : "#21201E",
        navbarTextColor : "white",
        primaryColor : "black",
      }
    }
  }
};
