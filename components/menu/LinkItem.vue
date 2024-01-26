
<script setup lang="ts">

    defineProps<{
        text: string
    }>();

    defineEmits<{
        'click-scroll': [PointerEvent],
    }>()

</script>



<template>

    <NuxtLink 
        @click.prevent="$emit('click-scroll', $event)" 
        class=" 
            text-[22px]
            h-max
        "
    > 
        {{ text }}
    </NuxtLink>

</template>