
<script setup lang="ts">

    defineProps<{
        text       : string,
        activeIndex: number,
        index      : number,
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
            cursor-pointer
            transition-all
            after:absolute
            after:w-full
            after:h-[2px]
            after:bg-white
            after:bottom-0
            hover:text-[#009da7]
        "
        :class="{
            'font-semibold': index == activeIndex,
            'relative'     : index == activeIndex,
            'after:block'  : index == activeIndex
        }"
    > 
        {{ text }}

    </NuxtLink>

</template>