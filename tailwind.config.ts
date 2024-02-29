import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        fullScreen: "100vw",
        "8xl": "1376px"
      },
      width: {
        "21p": "21%",
        "24p": "24%",
        "7p": "7%",
        '20-5': '85px'
      },
      height: {
        '11-5': '46px',
        '20-5': '85px',
      },
      boxShadow: {
        "brand1": "0 1 2 -1 rgba(0,0,0,0.1) 0 1 3 -0 rgba(0,0,0,0.1)"
      },
    },
  },
  plugins: [],
};
export default config;
