export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        green:  '#00FF41',
        cyan:   '#00D9FF',
        purple: '#BF5AF2',
        bg:     '#0a0a0a',
        bg2:    '#111111',
        border: '#1e1e1e',
        muted:  '#4a4a4a',
      },
    },
  },
  plugins: [],
}