const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        web_stek_fuchsia: {
          500: '#C83771',
        },
        gray: {
          100: '#FBFBFB',
          200: '#EAEAEA',
          300: '#DFDFDF',
          400: '#999999',
          500: '#7F7F7F',
          600: '#666666',
          700: '#4C4C4C',
          800: '#333333',
          900: '#191919',
        },
        blue: {
          100: '#E6F0FD',
          200: '#CCE2FC',
          300: '#99C5FA',
          400: '#66A9F7',
          500: '#338CF5',
          600: '#0070F4',
          700: '#0064DA',
          800: '#0059C2',
          900: '#004391',
        },
        teal: {
          100: '#E6FFFA',
          200: '#B2F5EA',
          300: '#81E6D9',
          400: '#4FD1C5',
          500: '#3ABAB4',
          600: '#319795',
          700: '#2C7A7B',
          800: '#285E61',
          900: '#234E52',
        },
        indigo: {
          100: '#33BDA6',
          200: '#12b297',
          300: '#00957c',
          400: '#007460',
          500: '#3534c5',
          600: '#2e2ca9',
          700: '#26258d',
          800: '#1e1d70',
          900: '#171654',
        },
        ocean: {
          100: '#8df3e2',
          200: '#54eed4',
          300: '#1be8c5',
          400: '#12b297',
          500: '#0e8e79',
          600: '#0b6b5b',
          700: '#07473c',
          800: '#04241e',
          900: '#000000',
        }
      },
      boxShadow: {
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
      },
      outline: {
        blue: '2px solid rgba(0, 112, 244, 0.5)',
      },
      fontSize: {
        xs: ['1rem', { lineHeight: '1.5' }],
        sm: ['1.125rem', { lineHeight: '1.5715' }],
        base: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.375rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.5rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.75rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '3xl': ['2.125rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '4xl': ['2.5rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '5xl': ['3.375rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '6xl': ['4.125rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      
      screens: {
        xs: '480px',
      },
      borderWidth: {
        3: '3px',
      },
      minWidth: {
        36: '9rem',
        44: '11rem',
        56: '14rem',
        60: '15rem',
        72: '18rem',
        80: '20rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        60: '60',
      },
    },
  },
  plugins: [],
};
