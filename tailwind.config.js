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
        input: 'hsl(0, 0%, 94.12%)',
        customPrimary: 'hsl(22.93, 92.59%, 52.35%)',
        customPrimaryHover: 'hsl(23,89%,37%)',
        secondary: 'hsl(34.05, 100%, 85.49%)',
        'secondary-foreground': 'hsl(16.27, 50.43%, 22.94%)',

        // Couleurs pour le mode sombre
        'dark-input': 'hsl(0, 0%, 28.24%)',
        'dark-primary-foreground': 'hsl(29.51, 0%, 100%)',
        'dark-secondary': 'hsl(28.5, 64.52%, 12.16%)',
      },
      screens: {
        '1420': '1420px',
        '650': '650px',
      },
    },
  },
  darkMode: 'class',
  plugins: [daisyui],
}