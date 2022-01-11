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
          500: "#a6abbd",
          600: "#848898",
          700: "#525560",
          800: "#242a2f",
          900: "#181c1f"
        },
        blue: {
          50: "#fafbff",
          100: "#f2f5ff",
          200: "#dfe5fb",
          300: "#c8d3f8",
          400: "#a0b5fb",
          500: "#6488fe",
          600: "#5075fc",
          700: "#2e5bfb",
          800: "#244ad0",
          900: "#1b2a60"
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
      },
      spacing: {
        '18': '72px',
        '96': '24rem'
      },
      maxWidth: {
        '96': '24rem',
        '160': '40rem',
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
