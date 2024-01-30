

<script setup lang="ts">


    import X from '../global/X.vue';

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
        toggleBodyOverflow(props.toggle);
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
            bg-opacity-90
            justify-items-center
            px-10
            w-750:px-6
            border-box
        "
    >

        <div class="
            bg-white 
            p-10 
            w-1024:p-8 
            w-640:p-4 
            rounded-md 
            max-h-[80%] 
            overflow-y-auto
        ">
            <slot></slot>

        </div>


        <X @click="close" class=" fixed top-7 right-7 "> </X>

    </div>

</template>