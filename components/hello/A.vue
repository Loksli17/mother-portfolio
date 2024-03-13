

<script setup lang="ts">

    defineProps<{
        text: string,
        href: string
    }>();

</script>


<template>

    <a 
        :href="href" 
        target="_blank"
        class=" 
            w-max
            bg-default 
            py-[12px] 
            px-[45px] 
            text-[32px] 
            font-bold
            rounded-[10px]
            hover:bg-default-hover
            transition-all

            w-1280:text-[26px]
            w-1280:px-[32px]

            w-1024:text-[22px]
            w-1024:px-[25px]
            w-1024:py-[8px]
        "
    > 
        {{ text }} 
    </a>

</template>