
<script setup lang="ts">

    import H2     from '../global/H2.vue';
    import H3     from '../global/H3.vue';
    import Circle from '../global/Circle.vue';
    import Button from '../global/Button.vue';
    import P      from '../global/P.vue';

</script>
 


<template>

    <div class="
        min-h-screen 
        grid grid-cols-[1fr_850px] 

        gap-[50px]
        w-1750:grid-cols-[1fr_680px]
        w-1450:grid-cols-[1fr_605px]
        
        w-1280:grid-cols-1 
        relative
    ">

        <div class=" 
            grid 
            auto-rows-max 
            grid-rows-[max-content_1fr_max-content]
            pt-[130px]
            pl-[80px]
            pb-[80px]
            box-border
            
            w-1280:order-last 
            w-1280:pt-[0px]
            w-1280:pr-[80px]
            w-1280:pb-[80px]
            w-1280:gap-[40px]

            w-1024:pl-[50px]
            w-1024:pb-[50px]
            w-1024:pr-[50px]

            w-640:pl-[30px]
            w-640:pr-[30px]
        ">

            <div>

                <PointsBox :cols-amount="7" :rows-amount="3"></PointsBox>
                
                <H2 :text="'Видеомонтаж'"></H2>
                <H2 :text="'Графический дизайн'"></H2>

            </div>


            <div class="grid auto-rows-max content-center gap-6 w-1024:gap-5">

                <div>

                    <H3 :text="'Здравствуйте, меня зовут'" > </H3>
                    <H3 :text="'Светлана Мишина'" class="text-[#009CA6]"> </H3>

                </div>

                <P :text="
                    'Я графический дизайнер и видеомонтажер с большим опытом создания видеороликов и рекламной продукции для бизнеса'
                "></P>
                <Button :text="'Cвязаться'"></Button>

            </div>


            <div class=" 
                font-medium 
                text-[27px]

                w-1280:text-[24px]
                w-1024:text-[22px]
                w-640:text-[20px] 
            ">
                г. Хабаровск
            </div>

        </div>

        <div class="
            pr-[80px] 
            box-border 
            grid items-center 
            justify-center 
            grid-cols-[75%] 
            
            w-1280:pt-[130px]
            w-1280:grid-cols-[50%] 
            w-1280:pl-[80px]
            w-1280:pb-[0px]

            w-1024:pt-[110px]
            w-1024:grid-cols-[70%] 
            w-1024:pl-[50px]
            w-1024:pr-[50px]

            w-640:grid-cols-1
            w-640:pl-[30px]
            w-640:pr-[30px]
        ">
            
            <div class="relative">
                
                <img 
                    class="
                        rounded-[120px] 
                        w-1520:rounded-[90px] 
                        w-1280:rounded-[60px] 
                        w-1024:rounded-[40px]
                        bg-[#E1FDFF]
                    " 
                    src="assets/img/women.png" 
                    alt=""
                >
                
                <PointsBox 
                    class="absolute bottom-[-58px] left-[120px] -z-10 w-1280:hidden" 
                    :cols-amount="8" 
                    :rows-amount="4"
                    :opacity="0.6"
                >
                </PointsBox>
            
            </div>
            
        </div>

        <Circle 
            :size="360" 
            class="
                bottom-[-220px] 
                right-[-140px] 
                w-1024:right-[-285px] 
                w-1024:bottom-[-160px]
                w-1024:opacity-30
            "
        />

    </div>

</template>