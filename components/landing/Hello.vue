
<script setup lang="ts">

    import H2 from '../global/H2.vue';

</script>



<template>

    <div class="
        min-h-screen 
        grid grid-cols-[1fr_850px] 

        gap-[50px]
        w-1750:grid-cols-[1fr_680px]
        w-1450:grid-cols-[1fr_605px]
        
        w-1280:grid-cols-1 
        overflow-hidden
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
            w-640:pb-[30px]
            w-640:pr-[30px]
        ">

            <div>

                <PointsBox :cols-amount="7" :rows-amount="3"></PointsBox>
                
                <H2 :text="'Видеомонтаж'"></H2>
                <H2 :text="'Графический дизайн'"></H2>

            </div>


            <div class="grid auto-rows-max content-center gap-6 w-1024:gap-5">

                <div>
                    <h3 class=" 
                        font-medium 
                        text-[36px]

                        w-1280:text-[30px]
                        w-1024:text-[27px]
                        w-640:text-[22px]
                        
                    ">
                        Здравствуйте, меня зовут 
                    </h3>

                    <h3 class=" 
                        font-bold 
                        text-[36px]

                        w-1280:text-[30px]
                        w-1024:text-[27px]
                        w-640:text-[22px] 

                        text-[#009CA6]
                    "> 
                        Светлана Мишина 
                    </h3>

                </div>

                <div class="
                    text-[28px] 
                    w-[800px] 
                    
                    w-1520:w-[600px]

                    w-1280:text-[24px] 
                    w-1280:w-full

                    w-1024:text-[21px]

                    w-640:text-[19px]
                ">
                    Я графический дизайнер и видеомонтажер с большим опытом создания видеороликов и рекламной продукции для бизнеса
                </div>

                <button class=" w-max
                    bg-default 
                    py-[12px] 
                    px-[45px] 
                    text-[32px] 
                    font-bold
                    rounded-[10px]
                    hover:bg-default-hover
                    transition-all

                    w-1280:text-[26px]
                    w-1280:px-[32px]

                    w-1024:text-[22px]
                    w-1024:px-[25px]
                    w-1024:py-[8px]
                "> 
                        Cвязаться 
                </button>

            </div>


            <div class=" 
                font-medium 
                text-[27px]

                w-1280:text-[24px]
                w-1024:text-[20px]
                w-640:text-[18px] 
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
                        bg-[#D4FCFF]
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

        <div class="
            absolute 
            w-[360px] 
            h-[360px] 
            border-[20px] 
            rounded-[180px] 
            bottom-[-220px] 
            right-[-140px] 
            border-[#92F8FF] 
            
            w-1024:right-[-190px]
            w-1024:bottom-[-250px]
        ">

        </div>

    </div>

</template>