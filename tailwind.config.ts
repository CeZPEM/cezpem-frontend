import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#010101",
        red: "#D81843",
        yellow: "#FBBE48",
        brown: "#C2752B",
        white: "#FFFFFF",
        lightBlue: "#61AAB9",
        darkRed: "#BD3818",
        navyBlue: "#222146",
        deepBlue: "#29306C",
        darkMaroon: "#A61830",
        orange: "#EA5A13",
      },
      screens: {
        xs: "380px", // Extra small devices
        sm: "640px", // Small devices
        md: "768px", // Medium devices
        lg: "1024px", // Large devices
        xl: "1280px", // Extra large devices
        "2xl": "1536px", // Tailwind's default 2xl
        "3xl": "1920px", // Custom breakpoint for larger screens
        "4k": "2560px", // Custom breakpoint for 4K screens
      },
      fontSize: {
        "15px": "15px",
        "16px": "16px",
        "20px": "20px",
        "21px": "21px",
        "24px": "24px",
        "28px": "28px",
        "32px": "32px",
        "36px": "36px",
        "40px": "40px",
      },
    },
  },
  plugins: [],
} satisfies Config;
