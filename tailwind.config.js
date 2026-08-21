/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAFAF8',
        ink: '#1B1D1F',
        muted: '#6B6F76',
        accent: '#442f5d',
        'accent-soft': '#ebe8ee',
        line: '#E4E4E1',
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Public Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        prose: '42rem',
      },
    },
  },
  plugins: [],
}
