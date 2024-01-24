
<script setup lang="ts">
    
    import type { IVideo } from '~/types';
    import VideoItem       from '../Items/VideoItem.vue';


    const videos: Array<IVideo> = [
        {
            name: 'Рекламный ролик для gloria jeans',
            file: '',
            tags: ['20сек', '2d анимация'],
        },
        {
            name: 'Рекламный ролик для gloria jeans',
            file: '',
            tags: ['20сек', '2d анимация'],
        },
        {
            name: 'Рекламный ролик для gloria jeans',
            file: '',
            tags: ['20сек', '2d анимация'],
        },
        {
            name: 'Рекламный ролик для gloria jeans',
            file: '',
            tags: ['20сек', '2d анимация'],
        }
    ];

</script>


<template>

    <div class="
        grid 
        gap-14 
        grid-cols-repeat-min-540
        w-1520:grid-cols-repeat-min-440 
        w-1024:grid-cols-repeat-min-320
        w-1280:gap-11 
        w-1024:gap-8
    ">
        
        <VideoItem v-for="video in videos" :video="video"></VideoItem>

    </div>

</template>