import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-light-blue': '#7DBBE6',
        'custom-bright-pink': '#FFC0CB',
        'custom-soft-green': '#B2D8B2',
        'custom-sunshine-yellow': '#FFFACD',
        'custom-light-gray': '#F5F5F5',
      },
    },
  },
  plugins: [],
};
export default config;
