
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
            borderColor: '#92F8FF',
        }
    );

</script>


<template>

    <div 
        :style="{
            background,
            borderColor,
            borderWidth,
            width: size,
            height: size,
            borderRadius: size / 2,
        }"
        class="
            absolute 
            w-[360px] 
            h-[360px] 
            border-[20px] 
            rounded-[180px] 
            bottom-[-220px] 
            right-[-140px] 
            
            w-1024:right-[-190px]
            w-1024:bottom-[-250px]
        "
    >

    </div>

</template>