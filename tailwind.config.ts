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
        
        extend: {

            colors: {
                'default'   : 'rgba(146, 248, 255, 1)',
                'default-60': 'rgba(146, 248, 255, 0.6)',
                'default-50': 'rgba(227, 253, 255, 0.5)',
                'default-40': 'rgba(227, 253, 255, 0.4)',

                'default-hover': 'rgba(120, 229, 236, 1)',
            },

        },

        fontFamily: {
            'Roboto': [ 'Roboto' ],
        },

        screens: {
            'w-1750': {max: '1750px'},
            'w-1520': {max: '1520px'},
            'w-1450': {max: '1450px'},
            'w-1280': {max: '1280px'},
            'w-1024': {max: '1024px'},
            'w-640' : {max: '640px'},
            'w-320' : {max: '320px'},
        },
        
    },

    plugins: [],
}

