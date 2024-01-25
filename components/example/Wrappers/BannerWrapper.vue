
<script setup lang="ts">
    
    import ImageItem from '../Items/ImageItem.vue';
    import banners   from '../../../data/banners';

</script>



<template>

    <div class=" transition-transform
        grid 
        gap-12
        grid-cols-repeat-min-540
        w-1520:grid-cols-repeat-min-320
        w-1280:gap-10 
        w-1024:gap-8
    ">
    
        <ImageItem v-for="banner in banners" :image="banner"></ImageItem>

    </div>

</template>