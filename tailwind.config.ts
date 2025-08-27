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
        'brand-gray': '#f9f9f9ff',
        'brand-2gray': '#f6f6f6ff',
      },
  },
  plugins: [],
};
export default config;