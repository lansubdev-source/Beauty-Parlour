/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all React/TS files in src/
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5f2a83', // soft pink
        accent: '#7e3aa8',  // purple
        background: '#FFF5F7',
        gold:   '#d4a838', 
      purple:"#531d64",
      },
      fontFamily: {
        serif:   ['"Playfair Display"', 'serif'],
        sans:    ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
