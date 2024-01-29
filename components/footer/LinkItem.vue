
<script setup lang="ts">

    defineProps<{
        text: string,
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
            w-1280:text-[19px] 
            w-750:text-[18px] 
            cursor-pointer 
            hover:text-[#009da7]
            transition-all
        "
    > 
        {{ text }} 
    </NuxtLink>

</template>