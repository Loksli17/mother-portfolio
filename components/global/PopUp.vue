
<script setup lang="ts">

    const props = defineProps<{
        toggle: boolean
    }>();

    const emit = defineEmits<{'update:toggle': [boolean]}>();

    const close = () => 
    {
        emit('update:toggle', false);
    }

    watchEffect(() => 
    {
        if(props.toggle)
        {
            document.body.style.overflowY = 'hidden';
        }
        else 
        {
            document.body.style.overflowY = 'auto';
        }
    });

</script>



<template>

    <div 
        @click.self="close" 
        v-if="toggle" 
        class=" 
            h-screen 
            w-screen 
            fixed 
            top-0 
            left-0 
            z-30 
            grid 
            justify-center 
            items-center 
            bg-black
            bg-opacity-85
            justify-items-center
        "
    >

        <div class="bg-white p-10 w-1024:p-8 w-640:p-4 rounded-md w-750:w-[85%] max-h-[80%] overflow-y-auto">
            <slot></slot>

        </div>

        <div @click="close" class=" fixed w-[40px] h-[40px] bg-white top-7 right-7 ">

        </div>

    </div>

</template>