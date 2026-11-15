/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#090A0F',
          secondary: '#11131B',
          card: '#151720',
          elevated: '#1A1D28',
          hover: '#1F2230',
        },
        border: {
          DEFAULT: '#282B38',
          subtle: '#1E212D',
          highlight: '#393E52',
        },
        text: {
          primary: '#F4F2F0',
          secondary: '#A3A5B3',
          muted: '#6F7285',
        },
        accent: {
          purple: {
            DEFAULT: '#A879FF',
            glow: 'rgba(168, 121, 255, 0.15)',
            deep: '#7C3AED',
          },
          orange: {
            DEFAULT: '#FF9B38',
            glow: 'rgba(255, 155, 56, 0.15)',
            hover: '#E58525',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        serif: ['"Newsreader"', 'serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 35px -5px rgba(168, 121, 255, 0.25)',
        'glow-orange': '0 0 35px -5px rgba(255, 155, 56, 0.25)',
        'glow-subtle': '0 0 20px -2px rgba(168, 121, 255, 0.12)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(168, 121, 255, 0.08) 1px, transparent 1px)",
        'radial-gradient-purple': "radial-gradient(ellipse at top, rgba(168, 121, 255, 0.12), transparent 70%)",
        'radial-gradient-orange': "radial-gradient(ellipse at bottom, rgba(255, 155, 56, 0.08), transparent 70%)",
      },
    },
  },
  plugins: [],
}
