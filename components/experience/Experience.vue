

<script setup lang="ts">

    import H3             from '../global/H3.vue';
    import experience     from '../../data/experience';
    import ExperienceItem from './ExperienceItem.vue';
    import Circle         from '../global/Circle.vue';

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

        <div class="grid gap-16 w-1280:gap-8">

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


        <div class="grid gap gap-16 w-1280:gap-8 grid-rows-[max-content_1fr]">

            <H3 :text="'Образование'"></H3>

            <div class=" bg-white rounded-md shadow relative overflow-hidden gap-8 w-1024:gap-4">

                <div class="overflow-hidden">

                    <ClientOnly>

                        <div :style="{backgroundImage: `url(${useImgUrl(`togu.jpg`)})`}" class="
                            w-full 
                            h-[360px]
                            w-1024:h-[210px] 
                            bg-center 
                            bg-cover 
                            hover:scale-[1.05] 
                            transition-transform
                        ">
                            
                        </div>

                    </ClientOnly>

                </div>

                <div class="grid items-start p-8 w-1024:p-5 gap-6 w-1024:gap-3">

                    <div class=" text-4xl font-semibold w-1024:text-xl w-750:text-lg">
                        <h4>ХГТУ [ТОГУ]</h4>
                    </div>
                    
                    <div class=" text-2xl w-1024:text-lg w-750:text-base">
                        <span>Специальность: <b>Программное обеспечение</b></span>
                    </div>

                    <div class=" font-light text-lg w-1024:text-base w-750:text-sm text-slate-500">
                        <span>1991 - 1996 г. Хабаровск</span>
                    </div>

                </div>

                <Circle :size="170" class=" -bottom-9 -right-9 w-1024:-right-14 w-750:hidden"/>

            </div>

        </div>

    </div>

</template>