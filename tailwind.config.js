/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "primary": "13px",
        "secondary": "11px"
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