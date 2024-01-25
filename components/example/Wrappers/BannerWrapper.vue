
<script setup lang="ts">
    
    import BannerItem from '../Items/BannerItem.vue';
    import banners    from '../../../data/banners';

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
    
        <BannerItem v-for="banner in banners" :banner="banner"></BannerItem>

    </div>

</template>