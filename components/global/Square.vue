

<script lang="ts" setup>

    const props = withDefaults(
        defineProps<{
            size: number,
        }>(),
        {
            size: 20,
        }, 
    );

    const sizeComp = ref<number>(props.size);

    
    onMounted(() => 
    {
        window.addEventListener('resize', () => 
        {
            sizeComp.value = window.innerWidth > 1024 ? props.size : props.size * 0.8;
        })
    });

</script>



<template>

    <ClientOnly>

        <div 
            :class=" `rounded bg-default w-[${sizeComp}px] h-[${sizeComp}px]`"
        >
    
        </div>

    </ClientOnly>


</template>