
<script setup lang="ts">
    
    import type { IVideo } from '~/types';
    import VideoItem       from '../Items/VideoItem.vue';


    const videos: Array<IVideo> = [
        {
            name: 'Рекламный ролик для gloria jeans',
            file: 'test.mp4',
            tags: ['20сек', '2d анимация'],
            preview: 'preview.png',
        },
        {
            name: 'Рекламный ролик для gloria jeans',
            file: 'test.mp4',
            tags: ['20сек', '2d анимация'],
            preview: 'preview.png',
        },
        {
            name: 'Рекламный ролик для gloria jeans',
            file: 'test.mp4',
            tags: ['20сек', '2d анимация'],
            preview: 'preview.png',
        },
        {
            name: 'Рекламный ролик для gloria jeans',
            file: 'test.mp4',
            tags: ['20сек', '2d анимация'],
            preview: 'preview.png',
        }
    ];

</script>


<template>

    <div class="
        grid 
        gap-12
        grid-cols-repeat-min-540
        w-1520:grid-cols-repeat-min-320
        w-1280:gap-10 
        w-1024:gap-6
    ">
        
        <VideoItem v-for="video in videos" :video="video"></VideoItem>

    </div>

</template>