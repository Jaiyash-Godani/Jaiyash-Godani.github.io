/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,js}", 
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'glass-black': 'rgba(13, 13, 15, 0.6)',
        'orange-accent': '#ff6600'
      },
      boxShadow: {
        'glass': '0 8px 20px rgba(0,0,0,0.3)',
        'deep': '0 10px 15px rgba(0,0,0,0.5)'
      },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
        'transform': 'transform'
      }
    },
  },
  plugins: [],
}
