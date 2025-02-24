import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}", 
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
    "../packages/kat-library/src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#70C7BA",
        dark: "#231F20",
        grayCustom: "#B6B6B6",
        accent: "#49EACB",
        background: "#111827",
      },
    },
  },
  plugins: [],
} satisfies Config;
