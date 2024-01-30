
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(
{
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],

    app: 
    {
        head:
        {
            title   : 'Графический дизайнер Светлана Мишина. Портфолио. Примеры работы',
            charset : 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta    : 
            [
                { name: 'description', content: `
                    Портфолио графического дизайнера и видеомонтажера Светланы Мишиной. 
                    Представлены примеры работ и рабочий процесс. 
                    Представлены навыки и компетенции по созданию рекламных видеороликов, визиток, баннеров и т.д.
                ` }
            ]
        }
    },
    
    postcss: 
    {
        plugins: 
        {
            tailwindcss : {},
            autoprefixer: {},
        },
    },

    modules: [['@nuxtjs/google-fonts', 
    {
        families: {
            Roboto: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        }
    }]],

})
