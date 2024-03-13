
<script lang="ts" setup>
    
    import type { ITool } from '~/types';

    defineProps<{
        tool: ITool
    }>();

</script>


<template>

    <ClientOnly>
        <img :alt="tool.name" :title="tool.name" :src="useImgUrl(`tools/${tool.img}`)" />
    </ClientOnly>

</template>