

<script setup lang="ts">
    
    import type { IExperienceItem } from '~/types';
    import Square                   from '../global/Square.vue';

    defineProps<{
        experience: IExperienceItem,
        length    : number,
        index     : number,
    }>();

</script>



<template>

    <div class="grid grid-cols-[max-content_1fr] gap-8 ">

        <div class="grid grid-rows-[max-content_1fr] gap-7 justify-items-center translate-y-6">
            
            <Square/>

            <div v-if="index != length - 1" class="h-full w-[3px] bg-default-60">

            </div>

        </div>

        <div class="grid gap-3 bg-white box-border p-5 rounded">

            <div class=" font-semibold text-3xl">
                {{ experience.name }}
            </div>

            <div>
                {{ experience.yearStart }} - {{ experience.yearEnd }}
            </div>

        </div>

    </div>


</template>