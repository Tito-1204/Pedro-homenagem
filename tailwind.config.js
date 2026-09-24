/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sals: {
          darkest: '#020617',
          dark: '#0a0f1d',
          card: '#0f172a',
          surface: '#1e293b',
          border: '#334155',
          gold: {
            light: '#fef08a',
            DEFAULT: '#f59e0b',
            hover: '#d97706',
            glow: '#fbbf24',
            dark: '#78350f'
          },
          blue: {
            light: '#bae6fd',
            DEFAULT: '#38bdf8',
            deep: '#0284c7',
            navy: '#0369a1'
          },
          text: {
            primary: '#f8fafc',
            secondary: '#cbd5e1',
            muted: '#94a3b8'
          }
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #d97706 100%)',
        'blue-gold-gradient': 'linear-gradient(135deg, #38bdf8 0%, #0284c7 50%, #f59e0b 100%)',
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.15) 0%, rgba(56, 189, 248, 0.08) 40%, transparent 70%)',
        'card-glow': 'radial-gradient(circle at top left, rgba(245, 158, 11, 0.08), transparent 70%)'
      },
      boxShadow: {
        'gold-sm': '0 0 15px rgba(245, 158, 11, 0.2)',
        'gold-md': '0 0 25px rgba(245, 158, 11, 0.3)',
        'gold-lg': '0 0 40px rgba(245, 158, 11, 0.35)',
        'blue-sm': '0 0 15px rgba(56, 189, 248, 0.25)',
        'subtle': '0 10px 30px -10px rgba(0, 0, 0, 0.5)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    },
  },
  plugins: [],
}
