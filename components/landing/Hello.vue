
<script setup lang="ts">


</script>



<template>

    <div class=" min-h-screen p-[80px] pt-[120px] box-border grid grid-cols-2">

        <div class="grid auto-rows-max grid-rows-[max-content_1fr_max-content]">

            <div>

                <PointsBox :cols-amount="7" :rows-amount="3"></PointsBox>
                
                <h2 class=" font-bold text-[54px]">
                    Видеомонтаж
                </h2>

                <h2 class=" font-bold text-[54px]">
                    Графический дизайн
                </h2>

            </div>


            <div class="grid auto-rows-max content-center gap-6">

                <div>
                    <h3 class=" font-medium text-[36px] " >
                        Здравствуйте, меня зовут 
                    </h3>

                    <h3 class=" font-bold  text-[36px] text-[#009CA6]"> Светлана Мишина </h3>
                </div>

                <p class="text-[28px] max-w-[862px]">
                    Я графический дизайнер и видеомонтажер с большим опытом создания видеороликов и рекламной продукции для бизнеса
                </p>

                <button class=" w-max
                    bg-default 
                    py-[12px] 
                    px-[45px] 
                    text-[32px] 
                    font-bold
                    rounded-[10px]
                    hover:bg-default-hover
                    transition-all
                "> 
                        Cвязаться 
                </button>

            </div>


            <div  class=" font-medium text-[27px]">
                г. Хабаровск
            </div>

        </div>

        <div>

        </div>

    </div>

</template>