module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                green: {
                    50: "#10c102107",
                    100: "#f2fcf7",
                    200: "#bbf1d3",
                    300: "#88e7b3",
                    400: "#51dc8f",
                    500: "#28c870",
                    600: "#20a15a",
                    700: "#187743",
                    800: "#10512d",
                    900: "#092a18"
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}