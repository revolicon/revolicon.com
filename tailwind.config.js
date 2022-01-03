module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: "#ffffff",
          100: "#f7f9fb",
          200: "#eef0f5",
          300: "#d8dde9",
          400: "#bbbfd0",
          500: "#181c1f"
        },
        blue: {
          50: "#fafbff",
          100: "#f2f5ff",
          200: "#dfe5fb",
          300: "#c8d3f8",
          400: "#5075fc",
          500: "#2e5bfb",
          600: "#1b2a60"
        }
      },
      padding: {
        38: '9.5rem',
        54: '13.5rem',
      },
      letterSpacing: {
        'title': '-0.015em'
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.6, 0.6, 0, 1)'
      }
    },
    screens: {
      sm: '640px',
      md: '848px',
      lg: '1024px',
      xl: '1192px'
    },
    container: {
      center: true
    }
  },
  plugins: [],
}
