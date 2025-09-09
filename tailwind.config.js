
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        'glass-black': '#0d0d0f',
        'glass-orange': '#ff6600',
        'glass-gradient': 'linear-gradient(135deg, #141414, #ff6600)',
      },
      boxShadow: {
        'glassy': '0 8px 16px rgba(0,0,0,0.3)',
        'deep': '0 4px 20px rgba(0,0,0,0.5)',
      },
      borderRadius: {
        'full': '9999px',
      },
      fontSize: {
        'xxs': '0.6rem',
      }
    },
  },
  plugins: [],
};
