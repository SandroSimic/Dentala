/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-50': '#c0dbfd',
        'primary-100': '#66a7fa',
        'primary-300': '#0971f7',
        'primary-500': '#054393',
        'secondary-200': '#ffdf4a',
        'secondary-500': '#ecc300',
      },
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      content: {
        blueblog: "url('./assets/blueBlob.png')",
        blueblogOutline: "url('./assets/blueBlobOutline.png')",
      },
      backgroundImage: (theme) => ({
        'gradient-primary': `linear-gradient(to right, ${theme('colors.primary-100')}, ${theme('colors.primary-500')})`,
      }),
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    },
  },
  plugins: [],
};
