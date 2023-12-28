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
        conteudo: '#606060',
        conteudo2: '#d1cbd1',
        logotipo: '#bbb8b5',
        navbar: '#fffcff',
      },   
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    function({ addComponents }: { addComponents: Function }) {
      const newUtilities = {
        '.overlay': {
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }
      }
      addComponents(newUtilities)
    }
   ]
}
export default config
