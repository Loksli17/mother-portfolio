
<script setup lang="ts">

    import { type IStepItem } from '~/types';

    defineProps<{
        step : IStepItem;
        index: number;
    }>();

</script>



<template>

    <div class="grid gap-7 grid-rows-[max-content_max-content_1fr] w-1280:gap-4">

        <div class=" 
            py-3 
            px-6 
            rounded
            w-1024:py-2 
            w-1024:px-5 
            bg-default 
            w-max 
            font-semibold 
            text-[34px] 
            w-1024:text-[28px] 
            w-750:text-[24px]"
        >
            {{ index }}
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

        <div class=" text-lg">
            <p> {{ step.text }} </p>
        </div>

    </div>

</template>