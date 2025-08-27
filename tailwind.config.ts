import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
      colors: {
        'brand-brown': '#781212ff',
        'brand-gray': '#f5f5f5ff',
      },
  },
  plugins: [],
};
export default config;