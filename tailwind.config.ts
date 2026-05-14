import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0D1B2A',
        'navy-mid': '#1A2E45',
        'navy-dark': '#07111B',
        blue: '#1B4F8A',
        'blue-light': '#2D7DD2',
        gold: '#F5A623',
        'gold-light': '#FFB84D',
        accent: '#FF6B2B',
        'gray-light': '#F0F4F8',
        'gray-text': '#8A9BB0',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        condensed: ['var(--font-barlow)', 'sans-serif'],
        body: ['var(--font-dmsans)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      backgroundImage: {
        'gradient-hero':
          'linear-gradient(135deg,#0D1B2A 0%,#1A2E45 50%,#0D1B2A 100%)',
        'gradient-gold': 'linear-gradient(90deg,#F5A623,#FF6B2B)',
        'gradient-blue': 'linear-gradient(135deg,#1B4F8A,#2D7DD2)',
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        marquee: 'marquee 20s linear infinite',
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'bounce-slow': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'pulse-gold': {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(245,166,35,0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(245,166,35,0)' },
        },
      },
      transitionDuration: {
        '350': '350ms',
        '400': '400ms',
      },
    },
  },
  plugins: [],
}

export default config
