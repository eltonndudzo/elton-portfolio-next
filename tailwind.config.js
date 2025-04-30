// tailwind.config.js
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './content/**/*.{md}', // include your markdown files
    ],
    theme: {
      extend: {
        typography: {
          DEFAULT: {
            css: {
              color: '#3b3b3b',
              a: { color: '#5c4033', textDecoration: 'underline' },
              h1: { color: '#1a1a1a' },
              h2: { color: '#2d2d2d' },
              blockquote: { color: '#4b3f38', borderLeftColor: '#d6c3b0' },
            },
          },
        },
      },
    },
    plugins: [require('@tailwindcss/typography')],
  };
  