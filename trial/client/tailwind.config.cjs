/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        drcloudBlue: '#1f4bd8',
        drcloudSky: '#e0f2ff',
        drcloudYellow: '#ffd84d'
      },
      boxShadow: {
        soft: '0 18px 40px rgba(15, 23, 42, 0.12)'
      },
      backgroundImage: {
        'cloud-gradient':
          'linear-gradient(180deg, #e0f2ff 0%, #ffffff 35%, #e0f2ff 100%)'
      }
    }
  },
  plugins: []
};

