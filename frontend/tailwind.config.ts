import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#FDF2F3',
          100: '#FBE4E6',
          200: '#F7C9CE',
          300: '#EE9EA6',
          400: '#DC6774',
          500: '#C23E4D',
          600: '#A82D3D',
          700: '#8F2432',
          800: '#621922',
          900: '#7A1F2B', // Official Deep Maroon
          950: '#420B12',
          DEFAULT: '#7A1F2B',
        },
        saffron: {
          50: '#FEF8EE',
          100: '#FCEFD6',
          200: '#F8DCA8',
          300: '#F3C170',
          400: '#EEA23A',
          500: '#E98B18', // Official Saffron
          600: '#CF720E',
          700: '#A7540E',
          800: '#864313',
          900: '#6E3813',
          DEFAULT: '#E98B18',
        },
        gold: {
          50: '#FCF9F0',
          100: '#F9F1DC',
          200: '#F1E0B3',
          300: '#E6CB85',
          400: '#DCB558',
          500: '#D6A43B', // Warm Gold
          600: '#B8822B',
          700: '#926125',
          800: '#774E24',
          900: '#634121',
          DEFAULT: '#D6A43B',
        },
        charcoal: {
          50: '#F6F6F6',
          100: '#E7E7E7',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#6D6D6D',
          600: '#5D5D5D',
          700: '#4F4F4F',
          800: '#333333',
          900: '#222222', // Dark Charcoal
          950: '#141414',
          DEFAULT: '#222222',
        },
        cream: {
          DEFAULT: '#FFF9EF',
          50: '#FFFFFF',
          100: '#FFFDF9',
          200: '#FFF9EF',
          300: '#FEF2DC',
          400: '#FDE7C1',
        },
        beige: {
          DEFAULT: '#F6EFE4',
          50: '#FDFBF7',
          100: '#FAF6EE',
          200: '#F6EFE4',
          300: '#ECE0CE',
          400: '#DFCCB1',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'Manrope', 'system-ui', 'sans-serif'],
        devanagari: ['var(--font-noto-devanagari)', 'Noto Sans Devanagari', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(122, 31, 43, 0.05)',
        'card': '0 10px 30px -5px rgba(34, 34, 34, 0.06), 0 4px 10px -2px rgba(122, 31, 43, 0.03)',
        'card-hover': '0 20px 35px -5px rgba(122, 31, 43, 0.12), 0 8px 16px -4px rgba(34, 34, 34, 0.06)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [],
};

export default config;
