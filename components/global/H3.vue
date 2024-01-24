
<script setup lang="ts">

    defineProps<{
        text: string,
    }>();

</script>


<template>

    <h3 class=" 
        font-bold 
        text-[36px]

        w-1280:text-[30px]
        w-1024:text-[27px]
        w-640:text-[22px] 
    "> 
        {{ text }} 
    </h3>

</template>