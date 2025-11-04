/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0a0f',
        'glass-border': 'rgba(255, 255, 255, 0.2)',
        'glass-bg': 'rgba(255, 255, 255, 0.1)',
        
        // --- THIS IS THE FIX ---
        // Add these two color definitions
        'primary': '#00b8d4', // Your Cyan color
        'secondary': '#a955f7', // Your Purple color
        // --- END OF FIX ---
      },
    },
  },
  plugins: [],
}