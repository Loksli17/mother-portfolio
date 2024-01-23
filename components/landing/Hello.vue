
<script setup lang="ts">


</script>



<template>

    <div class=" 
        min-h-screen 
        grid grid-cols-[1fr_775px] 

        gap-[40px]
        w-1750:grid-cols-[1fr_680px]
        w-1450:grid-cols-[1fr_550px]
        
        w-1280:grid-cols-1 
        w-1280:gap-[40px] 
        overflow-hidden
    ">

        <div class="grid auto-rows-max grid-rows-[max-content_1fr_max-content] w-1280:order-last pt-[130px] w-1280:pt-[0px] pl-[80px] pb-[80px] box-border">

            <div>

                <PointsBox :cols-amount="7" :rows-amount="3" :bg-name="'bg-default'"></PointsBox>
                
                <h2 class=" font-bold text-[54px] w-1280:text-[45px]">
                    Видеомонтаж
                </h2>

                <h2 class=" font-bold text-[54px] w-1280:text-[45px]">
                    Графический дизайн
                </h2>

            </div>


            <div class="grid auto-rows-max content-center gap-6">

                <div>
                    <h3 class=" font-medium text-[36px] w-1280:text-[30px]" >
                        Здравствуйте, меня зовут 
                    </h3>

                    <h3 class=" font-bold text-[36px] w-1280:text-[30px] text-[#009CA6]"> Светлана Мишина </h3>
                </div>

                <div class="text-[28px] w-[800px] w-1520:w-[600px] w-1280:text-[24px] w-1280:w-full">
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
                "> 
                        Cвязаться 
                </button>

            </div>


            <div  class=" font-medium text-[27px]">
                г. Хабаровск
            </div>

        </div>

        <div class="pr-[80px] box-border grid items-center justify-center grid-cols-[75%] w-1280:pt-[130px] w-1280:grid-cols-1 w-1280:pl-[80px]">
            
            <div class="relative">
                
                <img class="rounded-[160px] w-1520:rounded-[110px] w-1280:rounded-[70px] bg-[#D4FCFF]" src="assets/img/women.png" alt="">
                
                <PointsBox 
                    class="absolute bottom-[-58px] left-[120px] -z-10 w-1280:hidden" 
                    :cols-amount="8" 
                    :rows-amount="4"
                    :opacity="0.6"
                >
                </PointsBox>
            
            </div>
            
        </div>

    </div>

</template>