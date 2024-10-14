/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': 'var(--color-primary)',
                'secondary': 'var(--color-secondary)',
                'success': 'var(--color-success)',
                'info': 'var(--color-info)',
                'dark-blue-1': 'var(--color-dark-blue-1)',
                'dark-blue-2': 'var(--color-dark-blue-2)',
                'warning': 'var(--color-warning)',
                'pending': 'var(--color-pending)',
                'danger': 'var(--color-danger)',
                'light': 'var(--color-light)',
                'dark': 'var(--color-dark)',
                'grey': 'var(--color-dark-grey)',
            },
            backgroundColor: {
                
            },
            fontFamily: {
                BebasNeueThin: "BebasNeueThin",
                BebasNeueLight: "BebasNeueLight",
                BebasNeueRegular: "BebasNeueRegular",
                BebasNeueBold: "BebasNeueBold",

                GothamThin: "GothamThin",
                GothamLight: "GothamLight",
                GothamMedium: "GothamMedium",
                GothamMediumItalic: "GothamMediumItalic",
                GothamBold: "GothamBold",
                GothamBlack: "GothamBlack",
                GothamBook: "GothamBook",
            },
            backgroundImage: {
                'chevron-white': 'url("./assets/images/chevron-white.svg")',
            }
        },
    },
    plugins: [],
}