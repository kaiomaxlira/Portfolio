import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        div: '#2a2b31',
        social: '#5c5b66',
        sombra: '#9694a5',
        skill: '#dad4eb',
      },
    },
  },

  plugins: [],
}
export default config
