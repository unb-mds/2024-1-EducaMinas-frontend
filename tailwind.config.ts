import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage: {
      img_logo: "url('./public/logo.png')",
    },
    extend: {
      colors: {
        'primary-red': '#C10A0A',
        'secondary-red': '#FF204E',
        'primary-white': '#FFFFFF',
        'primary-gray': '#E1E1E1',
        'primary-blue': '#40679E',
      },
    },
  },
  plugins: [],
};
export default config;
