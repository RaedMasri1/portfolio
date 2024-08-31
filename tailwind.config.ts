import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
      },
    },
    extend: {
      colors: {
        primary: '#050816',
        secondary: '',
        tertiary: 'rgba(71, 64, 82, 0.2)',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
      animation: {
        'ping-large': 'ping-large 1s ease-in-out infinite',
        'move-left': 'move-left 1s linear infinite',
        'move-right': 'move-right 1s linear infinite',
        shimmer: 'shimmer 2s linear infinite',
        'border-spin': 'border-spin 7s linear infinite',
      },
      keyframes: {
        'ping-large': {
          '75%, 100%': { transform: 'scale(3)', opacity: '0' },
        },
        'move-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'move-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
        shimmer: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
      },
    },
    plugins: [],
  },
};
export default config;
