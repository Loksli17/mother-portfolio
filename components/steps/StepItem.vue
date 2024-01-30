
<script setup lang="ts">

    import { type IStepItem } from '~/types';

    defineProps<{
        step : IStepItem;
        index: number;
    }>();

</script>



<template>

    <div class="
        grid 
        gap-7 
        grid-rows-[max-content_max-content_1fr] 
        w-1280:gap-4
    ">

        <div class=" font-Roboto-condensed font-bold leading-[80px]
            rounded
            bg-default  
            text-[80px]
            w-[80px]
            h-[80px]
            w-1024:text-[60px]
            w-1024:w-[60px]
            w-1024:h-[60px]
            w-1024:leading-[60px]
            relative
            overflow-hidden
        ">

            <div :style="step.style" class="absolute">
                {{ index }}
            </div>

        </div>

        <div>
            <h3 class=" 
                text-[31px] 
                w-1750:text-[28px]
                w-1280:text-[26px]
                w-1024:text-[24px] 
                w-750:text-[20px] 
                font-medium
            "> 
                {{ step.header }} 
            </h3>
        </div>

        <div class=" text-xl  w-1280:text-lg">
            <p> {{ step.text }} </p>
        </div>

    </div>

</template>