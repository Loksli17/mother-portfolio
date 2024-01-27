
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
            hover:text-white
            transition-all
        "
        :class="{
            'font-semibold': index == activeIndex,
            'relative'     : index == activeIndex,
        }"
    > 
        {{ text }}

        <div 
            class="
                absolute
                w-full
                h-[2px]
                bg-white
                bottom-0
            "
            :class="
            {
                'block' : index == activeIndex,
                'hidden': index != activeIndex,
            }"
        > 
        </div>

    </NuxtLink>

</template>