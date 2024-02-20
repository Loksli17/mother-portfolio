

<script setup lang="ts">

    import H3             from '../global/H3.vue';
    import experience     from '../../data/experience';
    import ExperienceItem from './ExperienceItem.vue';

</script>



<template>

    <div class="
        bg-default-50
        px-[80px] 
        w-1024:px-[50px]
        w-640:px-[30px]

        w-1024:py-[100px]
        w-640:py-[65px]
        py-[120px]

        grid grid-cols-2 gap-20

        w-1280:grid-cols-1
        w-1280:gap-14
    ">

        <div class="grid gap-16 w-1280:gap-12">

            <H3 :text="'Опыт работы'"></H3>
            
            <div class="grid gap-7">

                <ExperienceItem 
                    v-for="(item, index) in experience" 
                    :experience="item"
                    :items-amount="experience.length"
                    :index="index"
                />

            </div>
            
        </div>


        <div>

            <H3 :text="'Образование'"></H3>

        </div>

    </div>

</template>