/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xl: "1280px",
      xxl: "1536px",
      ultra: "2560px"
    },
    extend: {
      transitionDuration: {
        "400": "400ms"
      },
      borderRadius: {
        "primary": "13px",
        "secondary": "11px"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateX(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeOut: {
          '0%': { opacity: 1, transform: 'translateX(0)' },
          '100%': { opacity: 0, transform: 'translateX(-30px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease',
        fadeOut: 'fadeOut 0.3s ease',
      },
    },
    colors: {
      primary: "#fafafa",
      secondary: "#eceef1",
      section: "#f5f5f5",
      black: "#121212",
      blue: "#007bfb",
      red: "#ff866e"
    }
  },
  plugins: [],
}