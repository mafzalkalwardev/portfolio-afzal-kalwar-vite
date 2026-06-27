export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Space Grotesk"', 'sans-serif'],
        display: ['"Syne"', 'sans-serif'],
      },
      colors: {
        cyan: { 400: '#22d3ee', 500: '#06b6d4' },
        emerald: { 400: '#34d399', 500: '#10b981' },
      }
    }
  },
  plugins: []
}
