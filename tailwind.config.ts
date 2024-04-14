import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'img_logo': "url('./public/logo.png')",
    },
    extend: {
      colors: {
        'primary-red': '#C10A0A',
        'primary-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
export default config;
