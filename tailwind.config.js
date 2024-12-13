import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs par défaut (clair)
        background: 'hsl(0, 0%, 97.65%)',
        foreground: 'hsl(0, 0%, 12.55%)',
        muted: 'hsl(0, 0%, 93.73%)',
        'muted-foreground': 'hsl(0, 0%, 39.22%)',
        popover: 'hsl(0, 0%, 98.82%)',
        'popover-foreground': 'hsl(0, 0%, 12.55%)',
        card: 'hsl(0, 0%, 98.82%)',
        'card-foreground': 'hsl(0, 0%, 12.55%)',
        border: 'hsl(0, 0%, 84.71%)',
        input: 'hsl(0, 0%, 94.12%)',
        customPrimary: 'hsl(22.93, 92.59%, 52.35%)',
        customPrimaryHover: 'hsl(23,89%,37%)',
        'primary-foreground': 'hsl(44, 0%, 100%)',
        secondary: 'hsl(34.05, 100%, 85.49%)',
        'secondary-foreground': 'hsl(16.27, 50.43%, 22.94%)',
        accent: 'hsl(0, 0%, 90.98%)',
        'accent-foreground': 'hsl(0, 0%, 12.55%)',

        // Couleurs pour le mode sombre
        'dark-background': 'hsl(0, 0%, 6.67%)',
        'dark-foreground': 'hsl(0, 0%, 93.33%)',
        'dark-muted': 'hsl(0, 0%, 13.33%)',
        'dark-muted-foreground': 'hsl(0, 0%, 70.59%)',
        'dark-popover': 'hsl(0, 0%, 9.8%)',
        'dark-popover-foreground': 'hsl(0, 0%, 93.33%)',
        'dark-card': 'hsl(0, 0%, 9.8%)',
        'dark-card-foreground': 'hsl(0, 0%, 93.33%)',
        'dark-border': 'hsl(44, 14%, 11%)',
        'dark-input': 'hsl(0, 0%, 28.24%)',
        'dark-primary-foreground': 'hsl(29.51, 0%, 100%)',
        'dark-secondary': 'hsl(28.5, 64.52%, 12.16%)',
        'dark-secondary-foreground': 'hsl(29.51, 100%, 88.04%)',
        'dark-accent': 'hsl(0, 0%, 16.47%)',
        'dark-accent-foreground': 'hsl(0, 0%, 93.33%)',
      },
    },
  },
  darkMode: 'class',
  plugins: [daisyui],
}