/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(200%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-200%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideTop: {
          '0%': { transform: 'translateX(200%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideBottom: {
          '0%': { transform: 'translateX(-200%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        'slide-right': 'slideRight 1.5s ease-out',
        'slide-left': 'slideLeft 1.5s ease-out',
        'slide-top': 'slideTop 1.15s ease-out',
        'slide-bottom': 'slideBottom 1.5s ease-out',
      },
    },
  },
  plugins: [],
};
