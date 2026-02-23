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

            gridTemplateColumns: {
                'repeat-min-540': 'repeat(auto-fill, minmax(540px, 1fr))',
                'repeat-min-500': 'repeat(auto-fill, minmax(500px, 1fr))',
                'repeat-min-440': 'repeat(auto-fill, minmax(440px, 1fr))',
                'repeat-min-370': 'repeat(auto-fill, minmax(370px, 1fr))',
                'repeat-min-320': 'repeat(auto-fill, minmax(320px, 1fr))',
            },

            colors: {
                'default'    : 'rgba(244, 63, 87, 1)',
                'default-60' : 'rgba(227, 126, 126,  1)',
                'default-50' : 'rgba(246, 182, 182, 0.5)',
                'default-120': 'rgba(199, 31, 92, 1)',

                'default-hover': 'rgba(191, 47, 66, 1)',
            },

            backgroundSize: {
                'cover-150': '150%'
            },
        },

        fontFamily: {
            'Roboto': [ 'Roboto' ], 'Roboto-condensed': ['Roboto Condensed'],
        },

        screens: {
            'w-1750': {max: '1750px'},
            'w-1520': {max: '1520px'},
            'w-1450': {max: '1450px'},
            'w-1280': {max: '1280px'},
            'w-1100': {max: '1100px'},
            'w-1024': {max: '1024px'},
            'w-750' : {max: '750px'},
            'w-640' : {max: '640px'},
            'w-320' : {max: '320px'},
        },
        
    },

    plugins: [],
}

