import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#020617',
        gold: '#d4af37',
        'gold-soft': '#f6e7b1',
      },
      boxShadow: {
        gold: '0 8px 30px rgba(212, 175, 55, 0.25)',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 12s ease infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
