import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grid-pattern': "url('/grid.svg')",
      },
      colors: {
        'dark-background': '#1a1a1a',
        'dark-nav-bg': '#343434',
      }
    },
  },
  plugins: [],
}
export default config
