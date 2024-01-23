

<script setup lang="ts">

    defineProps<{
        text: string,
    }>();

</script>


<template>

    <h2 class=" 
        font-bold 
        text-[54px] 
        
        w-1280:text-[45px]
        w-1024:text-[35px]
        w-640:text-[30px]
    ">
        {{ text }}
    </h2>

</template>