

<script setup lang="ts">
    
    import LogoItem    from '../Items/LogoItem.vue';
    import logos       from '../../../data/logos';
    import ItemWrapper from '~/components/global/ItemWrapper.vue';

</script>


<template>

    <ItemWrapper>

        <LogoItem v-for="logo in logos" :logo="logo"></LogoItem>

    </ItemWrapper>

</template>