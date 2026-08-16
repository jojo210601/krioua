/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        // Base semantic
        border: 'hsl(30 15% 85%)',
        input: 'hsl(30 15% 88%)',
        ring: 'hsl(18 45% 55%)',
        background: '#FAF6F0',
        foreground: '#2E2622',
        primary: {
          DEFAULT: '#C87456',
          foreground: '#FFFDF9',
        },
        secondary: {
          DEFAULT: '#9CAF88',
          foreground: '#2E2622',
        },
        muted: {
          DEFAULT: '#EDE4D3',
          foreground: '#6B5E52',
        },
        accent: {
          DEFAULT: '#B8A188',
          foreground: '#2E2622',
        },
        card: {
          DEFAULT: '#FFFDF9',
          foreground: '#2E2622',
        },
        popover: {
          DEFAULT: '#FFFDF9',
          foreground: '#2E2622',
        },
        destructive: {
          DEFAULT: '#B84A3E',
          foreground: '#FFFDF9',
        },
        // Brand palette
        cream: '#FAF6F0',
        sand: '#EDE4D3',
        taupe: '#A8968A',
        terracotta: '#C87456',
        terracottaDark: '#A85C40',
        sage: '#9CAF88',
        brownLight: '#B8A188',
        inkDark: '#2E2622',
        inkSoft: '#6B5E52',
      },
      borderRadius: {
        lg: '1.5rem',
        md: '1rem',
        sm: '0.75rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(46, 38, 34, 0.06), inset 0 1px 0 0 rgba(255,255,255,0.5)',
        glassLg: '0 24px 60px -20px rgba(46, 38, 34, 0.15), 0 8px 24px -8px rgba(46,38,34,0.08), inset 0 1px 0 0 rgba(255,255,255,0.6)',
        soft: '0 2px 20px -4px rgba(46, 38, 34, 0.08)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(30px,-40px) scale(1.08)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(-40px,30px) scale(1.1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'float-slow': 'float-slow 14s ease-in-out infinite',
        'float-slower': 'float-slower 18s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
