/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1500px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Sora", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        hero: "5rem",
        h2: "2.5rem",
        h3: "2rem",
        h4: "1.5rem",
        p1: "1.125rem",
        p2: "1rem",
      },
      colors: {
        primary: "#0649E7",   
        darkblue: "#022183",  
        white: "#FEFEFE",     
        lightblue: "#EBF1FF", 
        black: "#101010",
      },
      borderRadius: {
        button: "20px",
      },
      backdropBlur: {
        sm: "14px",
      },
      strokeWidth: {
        DEFAULT: 1,
      },
    },
    variants: {
      extend: {
        scrollBehavior: ['responsive'],
      },
    },
  },
  plugins: [],
}

