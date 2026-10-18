/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // design A palette
        forest: { DEFAULT: "#2f4b35", deep: "#243a29" },
        cream: "#f5eddf",
        tangerine: "#ef6a3a",
        rust: "#c96b3c",
        mustard: "#f6ae1c",
        ink: "#151515",
      },
      fontFamily: {
        display: ["var(--font-anton)", "var(--font-plex-jp)", "Impact", "sans-serif"],
        sans: ["var(--font-plex)", "var(--font-plex-jp)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
