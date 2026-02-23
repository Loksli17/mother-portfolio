
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
            after:bg-white
            after:bottom-0
            hover:after:block
            hover:after:h-[2px]
            text-white
            relative
        "
        :class="{
            'font-semibold': index == activeIndex,
            'after:block'  : index == activeIndex,
            'after:h-[2px]': index == activeIndex,
        }"
    > 
        {{ text }}

    </NuxtLink>

</template>