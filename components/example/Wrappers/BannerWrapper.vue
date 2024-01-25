
<script setup lang="ts">
    
    import BannerItem   from '../Items/BannerItem.vue';
    import banners     from '../../../data/banners';
    import ItemWrapper from '~/components/global/ItemWrapper.vue';

</script>


<template>

    <ItemWrapper>
        <BannerItem v-for="banner in banners" :banner="banner"></BannerItem>
    </ItemWrapper>

</template>