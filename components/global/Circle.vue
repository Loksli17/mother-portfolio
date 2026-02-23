
<script setup lang="ts"> 

    withDefaults(
        defineProps<{
            borderColor?: string;
            borderWidth?: number;
            background? : string;
            size        : number;
        }>(),
        {
            background : 'rgba(0, 0, 0, 0)', //rgba (0, 0, 0, 0)
            borderWidth: 20,
            borderColor: '#F43F57',
        }
    );

</script>


<template>

    <div 
        :style="{
            background,
            border      : `${borderWidth}px solid ${borderColor}`,
            width       : `${size}px`,
            height      : `${size}px`,
            borderRadius: `${size / 2}px`,
        }"
        class="
            absolute
        "
    >

    </div>

</template>