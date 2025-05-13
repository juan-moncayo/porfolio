import type { Config } from "tailwindcss"
import { nextui } from "@nextui-org/react"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
    // Include all files that might contain Tailwind classes
    "./**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Prevent Tailwind from purging these classes
  safelist: [
    // Add all the color classes used in your project
    "text-[#ff4655]",
    "bg-[#ff4655]",
    "border-[#ff4655]",
    "bg-[#271d28]",
    "dark:bg-[#1a2730]",
    "dark:bg-[#0f1923]",
    "dark:text-[#bbb5b2]",
    "dark:text-white",
    "bg-gray-200",
    "dark:bg-gray-700",
    "dark:bg-gray-800",
    "text-gray-800",
    "dark:text-gray-300",
    "dark:text-gray-400",
    "text-gray-600",
    "dark:text-gray-200",
    // Add NextUI specific classes
    {
      pattern: /nextui-.*/,
    },
    // Add all flex, grid, and layout classes
    {
      pattern: /flex-.*/,
    },
    {
      pattern: /grid-.*/,
    },
    {
      pattern: /gap-.*/,
    },
    {
      pattern: /p-.*/,
    },
    {
      pattern: /m-.*/,
    },
    {
      pattern: /w-.*/,
    },
    {
      pattern: /h-.*/,
    },
    // Add all text classes
    {
      pattern: /text-.*/,
    },
    // Add all border classes
    {
      pattern: /border-.*/,
    },
    // Add all background classes
    {
      pattern: /bg-.*/,
    },
    // Add all rounded classes
    {
      pattern: /rounded-.*/,
    },
    // Add all shadow classes
    {
      pattern: /shadow-.*/,
    },
    // Add all transition classes
    {
      pattern: /transition-.*/,
    },
    // Add all transform classes
    {
      pattern: /transform-.*/,
    },
    // Add all hover classes
    {
      pattern: /hover:.*/,
    },
    // Add all focus classes
    {
      pattern: /focus:.*/,
    },
    // Add all active classes
    {
      pattern: /active:.*/,
    },
    // Add all dark mode classes
    {
      pattern: /dark:.*/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwindcss-animate"), nextui()],
}
export default config
