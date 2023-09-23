/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        divideWidth: {
            DEFAULT: '1px',
            '0': '0',
            '2': '2px',
            '3': '3px',
            '4': '4px',
            '6': '6px',
            '8': '8px',
        },
        extend: {
            width: {
                '160': '40rem',
                '120': '30rem',
            },
            height: {
                '120': '30rem',
                '160': '40rem',
            },
            screens: {
                sm: '480px',
                md: '768px',
                lg: '976px',
                xl: '1440px',
            },
            colors: {
                'blue': '#1fb6ff',
                'purple': '#7e5bef',
                'pink': '#ff49db',
                'orange': '#ff7849',
                'green': '#13ce66',
                'yellow': '#ffc82c',
                'gray-dark': '#273444',
                'gray': '#8492a6',
                'gray-light': '#d3dce6',
                'blue-dark': '#15202b',
                'blue-dark-2': '#192734',
                'blue-dark-3': '#1f2d3d',
                'blue-dark-4': '#273444',
                'blue-dark-5': '#344563',
                'blue-dark-6': '#3c4d6b',
                'blue-dark-7': '#40536e',
                'blue-dark-8': '#4c5c7a',
                'blue-dark-9': '#606f87',
                'blue-dark-10': '#6e8098',
                'blue-dark-11': '#7e8ba5',
            },
            fontFamily: {
                sans: ['Graphik', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            extend: {
                spacing: {
                    '128': '32rem',
                    '144': '36rem',
                },
                borderRadius: {
                    '4xl': '2rem',
                }
            }
        },
    },
    plugins: [],
}

