import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'


export default defineNuxtPlugin(( {vueApp} ) => 
{
    if(!process.client) return;
    vueApp.use(VueVideoPlayer);
})