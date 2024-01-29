
<script setup lang='ts'>

    import H2       from '../global/H2.vue';
    import Circle   from '../global/Circle.vue';
    import steps    from '../../data/steps';
    import StepItem from './StepItem.vue';

</script>



<template>

    <div class="  
        relative
        px-[80px] 
        w-1024:px-[50px]
        w-640:px-[30px]
        bg-default-50
        grid 
        gap-[120px]
        overflow-hidden
        w-1280:gap-[50px]
        
        w-1024:py-[100px]
        w-640:py-[65px]
        py-[120px]
    ">

        <H2 :text="'Процесс работы'"></H2>

        <div class="
            grid 
            grid-flow-col 
            auto-cols-[280px] 
            justify-between 

            w-1750:auto-cols-[240px] 
            w-1520:auto-cols-[220px] 
            w-1450:auto-cols-[190px] 
            w-1280:grid-cols-1 
            
            gap-11 
            w-1750:gap-9

            w-1280:gap-12
            w-1280:grid-flow-row
        ">

            <StepItem 
                v-for="(step, index) in steps" 
                :step="step" 
                :index="index + 1"
            ></StepItem>

        </div>


        <Circle 
            :size="280" 
            class="
            absolute
            top-[-120px] 
            right-[-140px] 
            w-1024:right-[-285px] 
            w-1024:bottom-[-160px]
            w-1024:opacity-30
        "
        />
        
    </div>


</template>