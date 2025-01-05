module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F2937',
        secondary: '#9333EA',
      
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',  
          sm: '1.5rem',     
          lg: '2rem',      
          xl: '3rem',       
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          '2xl': "1536px",
        },
      },
    },
  },
  plugins: [],
};
