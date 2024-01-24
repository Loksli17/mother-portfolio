
<script setup lang="ts">

    defineProps<{
        text: string,
    }>();

</script>


<template>

    <p class="
        text-[28px] 
        w-[800px] 
        
        w-1520:w-[600px]

        w-1280:text-[24px] 
        w-1280:w-full

        w-640:text-[21px]
    ">
        {{ text }}
    </p>

</template>