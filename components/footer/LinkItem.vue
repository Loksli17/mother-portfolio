
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
            text-white
            transition-all
            w-max

            after:absolute
            after:w-full
            after:bg-white
            after:bottom-0
            hover:after:block
            hover:after:h-[2px]
            relative
        "
    > 
        {{ text }} 
    </NuxtLink>

</template>