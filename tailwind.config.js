/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      },
      animation: {
        blink: 'blink 1s infinite',
        text: 'text 5s ease infinite',
      },
      keyframes: {
        blink: {
          "50%": {
            color: "transparent"
          },
          "100%": {
            color: "white"
          }
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}

