
<script setup lang="ts">
    
    import VideoItem from '../Items/VideoItem.vue';
    import videos    from '../../../videos';

</script>


<template>

    <div class="
        grid 
        gap-12
        grid-cols-repeat-min-540
        w-1520:grid-cols-repeat-min-320
        w-1280:gap-10 
        w-1024:gap-8
    ">
        
        <VideoItem v-for="video in videos" :video="video"></VideoItem>

    </div>

</template>