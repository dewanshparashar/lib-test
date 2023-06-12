/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,mdx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      l: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    fontWeight: {
      light: '300',
      normal: '300',
      medium: '400',
      semibold: '500',
      bold: '600',
      extrabold: '700',
    },
    fontFamily: {
      sans: "'Space Grotesk', sans-serif",
    },
    spacing: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '32px',
      8: '48px',
    },
    extend: {
      backgroundImage: {
        space: "url('/static/assets/space.webp')",
        'gradient-overlay':
          'linear-gradient(179.53deg,#000000 19.46%,rgba(0, 0, 0, 0.650795) 40.76%,rgba(0, 0, 0, 0.462631) 60.09%,rgba(255, 255, 255, 0) 99.6%)',
      },
      boxShadow: {
        'toggle-button': '0px 1px 2px rgba(85, 85, 85, 0.25)',
        primary:
          '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 6px rgba(33, 37, 41, 0.2)',
        secondary:
          '0px 2px 2px rgba(33, 37, 41, 0.06), 0px 0px 1px rgba(33, 37, 41, 0.08)',
      },
      colors: {
        // Actions
        error: '#CD0000',
        'blue-link': '#1366C1',
        'blue-link-lightest': '#bdcfe2',

        // Cyan
        cyan: '#DDEAFA',
        'dark-cyan': '#11365E',

        // Brick
        brick: '#FFDDD6',
        'dark-brick': '#762716',

        // Orange
        orange: '#FFEED3',
        'dark-orange': '#60461F',

        // Lime
        lime: '#E8FFE4',
        'dark-lime': '#31572A',

        // Brand
        'purple-eth': '#454A75',
        'brown-nova': {
          700: 'rgba(138, 65, 0, .7)',
          800: 'rgba(138, 65, 0, .8)',
          900: '#8A4100',
        },
        'blue-arbitrum': '#2D374B',

        // Gray
        'line-gray': '#F4F4F4',
        moon: '#E5E5E5',
        'gray-3': '#DADADA',
        'gray-4': '#CCCCCC',
        'gray-5': '#AEAEAE',
        'gray-6': '#999999',
        'dark-gray': '#6D6D6D',
        'default-black': '#1A1C1D', // default text

        // Lime
        lime: '#E8FFE4',
        'lime-dark': '#31572A',

        // Orange
        orange: '#FFEED3',
        'orange-dark': '#60461F',

        // Purple
        'purple-ethereum': '#454A75',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
};
