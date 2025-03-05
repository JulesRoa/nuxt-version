import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Consolas', 'monospace'],
      },
      colors: {
        base: {
          DEFAULT: '#141414',  // Darker grey for more contrast
          dark: '#1A1A1A',     // Darker grey
          light: '#2A2A2A'     // Lighter grey
        },
        rose: {
          DEFAULT: '#FF2D7F',  // More vibrant hot pink
          dark: '#E6006B',     // Deeper pink
          light: '#FF80B5'     // Brighter pink
        },
        pine: {
          DEFAULT: '#00FF8C',  // Electric green
          dark: '#00E67D',     // Deep electric green
          light: '#33FFA3'     // Bright electric green
        },
        iris: {
          DEFAULT: '#7000FF',  // Electric purple
          dark: '#5C00E6',     // Deep electric purple
          light: '#9B4DFF'     // Bright electric purple
        },
        primary: '#00FF8C', // Pine color as primary
        accent: '#FF2D7F'   // Rose color as accent
      },
      boxShadow: {
        'glow': '0 0 30px rgba(255, 45, 127, 0.4), 0 0 60px rgba(255, 45, 127, 0.2)',
        'glow-accent': '0 0 30px rgba(112, 0, 255, 0.4), 0 0 60px rgba(112, 0, 255, 0.2)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
        'fadeOut': 'fadeOut 0.3s ease-in forwards',
        'neonPulse': 'neonPulse 2s infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
        neonPulse: {
          '0%': { boxShadow: '0 0 5px rgba(6, 182, 212, 0.5), 0 0 10px rgba(6, 182, 212, 0.3)' },
          '50%': { boxShadow: '0 0 10px rgba(6, 182, 212, 0.8), 0 0 20px rgba(6, 182, 212, 0.5)' },
          '100%': { boxShadow: '0 0 5px rgba(6, 182, 212, 0.5), 0 0 10px rgba(6, 182, 212, 0.3)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config