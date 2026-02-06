/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        // optional: you can also create custom utilities
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        // your orange brand color if needed
        orange: {
          500: '#f97316', // or whatever your exact orange is
        },
      },
    },
  },
  plugins: [],
}
