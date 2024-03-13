

<script setup lang="ts">
    
    import type { IExperienceItem } from '~/types';

    defineProps<{
        experience : IExperienceItem,
        itemsAmount: number,
        index      : number,
    }>();

</script>



<template>

    <div class="grid grid-cols-[max-content_1fr] gap-8 w-1024:gap-6">

        <div class="grid grid-rows-[max-content_1fr] gap-7 justify-items-center translate-y-6">
            
            <div :class=" `rounded bg-default w-[25px] h-[25px] w-1024:w-[20px] w-1024:h-[20px]`"></div>
            <div v-if="index != itemsAmount - 1" :class='`h-full w-[3px] bg-default-60`'></div>

        </div>

        
        <div class="grid gap-3 bg-white box-border p-5 rounded-lg w-1024:p-3 shadow">

            <div class=" font-semibold text-3xl w-1280:text-2xl w-1024:text-lg">
                <span> {{ experience.name }} </span>
            </div>

            <div class=" text-lg w-1024:text-base">
                <span> {{ experience.post }} </span>
            </div>

            <div class=" text text-slate-500 font-light">
                <span> {{ experience.yearStart }} - {{ experience.yearEnd }} </span> 
            </div>

        </div>

    </div>

</template>