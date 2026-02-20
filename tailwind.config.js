/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // scan all React files
  ],
  theme: {
    extend: {
      colors: {
        waveBlue1: "#3b82f6", // primary wave color
        waveBlue2: "#60a5fa", // lighter wave
        waveBlue3: "#93c5fd", // even lighter
      },
      keyframes: {
        wave1: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        wave2: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-60%)' },
        },
        wave3: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-70%)' },
        },
      },
      animation: {
        wave1: 'wave1 10s linear infinite',
        wave2: 'wave2 15s linear infinite',
        wave3: 'wave3 20s linear infinite',
      },
    },
  },
  plugins: [],
};
