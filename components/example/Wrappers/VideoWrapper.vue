
<script setup lang="ts">
    
    import VideoItem   from '../Items/VideoItem.vue';
    import videos      from '../../../data/videos';
    import ItemWrapper from '~/components/global/ItemWrapper.vue';

</script>


<template>

    <ItemWrapper>

        <VideoItem v-for="video in videos" :video="video"></VideoItem>

    </ItemWrapper>

</template>