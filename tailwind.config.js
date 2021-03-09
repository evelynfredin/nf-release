const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
        enabled: true,
        content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'body': ['Maven Pro, sans-serif']
        },
        extend: {},
        colors: {
            gray: colors.coolGray,
            black: colors.black,
            white: colors.white,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
