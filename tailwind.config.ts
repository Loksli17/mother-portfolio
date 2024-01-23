/** @type {import('tailwindcss').Config} */

export default {
    
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],

    theme: {
        
        extend: {},

        fontFamily: {
            'Roboto': [ 'Roboto' ],
        },

        screens: {
            'w-1520': {max: '1520px'},
            'w-1280': {max: '1280px'},
            'w-1024': {max: '1024px'},
            'w-640' : {max: '640px'},
            'w-320' : {max: '320px'},
        }
    },

    plugins: [],
}

