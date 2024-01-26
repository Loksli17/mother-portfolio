

<script setup lang="ts">

    defineProps<{
        toggle: boolean;
    }>();

    defineEmits<{
        'update:toggle': [boolean],
    }>()

</script>



<template>

    <div 
        @click="$emit('update:toggle', !toggle)"  
        class="
            grid 
            w-[35px] 
            grid-rows-[3px_3px_3px]
            content-center
            gap-[9px]
        "
    >

        <div class="h-[3px] rounded w-full bg-black transition-all origin-top-left" :class="{'rotate-[45deg]': toggle}"></div>
        <div class="h-[3px] rounded w-1/2 bg-black transition-all" :class="{'-translate-x-16': toggle, 'opacity-0': toggle}"></div>
        <div class="h-[3px] rounded w-full bg-black transition-all origin-bottom-left" :class="{'-rotate-[45deg]': toggle}"></div>

    </div>

</template>