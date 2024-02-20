

<script setup lang="ts">

    const props = withDefaults(
        defineProps<{
            width: number,
        }>(),
        {
            width: 3,
        }, 
    );

</script>


<template>

    <div :class='`h-full w-[${width}px] bg-default-60`'></div>

</template>