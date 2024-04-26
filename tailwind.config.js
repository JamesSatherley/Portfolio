/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
            xxl: '2000px',
        },
        extend: {
            boxShadow: {
                about: '0 0 10px 10px rgba(255, 255, 255, 0)',
                'dark-about': '0 0 20px 5px rgba(252, 252, 210, 0.3)',
                'dark-about-secondary': '0 0 20px 5px rgba(156, 156, 95, 0.3)',
                'dark-about-secondary-tiny': '0 0 20px 2px rgba(156, 156, 95, 0.3)',
                'dark-about-tiny': '0 0 10px 1px rgba(252, 252, 210, 0.3)',
            },
            fontSize: {
                about: ['17px', '17px'],
            },
        },
        fontFamily: {
            main: ['Raleway', 'sans-serif'],
        },
        colors: {
            white: '#ffffff',
            black: '#000000',
            primary: '#0e0f30',
            accent: '#165f73',
            secondary: '#1a1c5e',
            background: '#ffffeb',
            'background-accent': '#acb1e8',
            'dark-primary': '#fcfcd2',
            'dark-accent': '#165f73',
            'dark-secondary': '#9c9c5f',
            'dark-background': '#0e0f30',
            'dark-background-accent': '#080914',
        },
    },
    plugins: [],
};
