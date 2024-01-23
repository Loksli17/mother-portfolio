
<script setup lang="ts">


</script>



<template>

    <div class=" min-h-screen p-[80px] box-border grid grid-cols-2">

        <div class="">

            <div>

                <PointsBox :cols-amount="7" :rows-amount="3"></PointsBox>
                
                <h2 class=" font-bold text-[60px]">
                    Видеомонтаж
                </h2>

                <h2 class=" font-bold text-[60px]">
                    Графический дизайн
                </h2>

            </div>


            <div>

                <h3 class=" font-medium text-[40px]" >
                    Здравствуйте, меня зовут 
                    <span> Светлана Мишина </span>
                </h3>
                
                <p>
                    Я графический дизайнер и видеомонтажер с большим опытом создания видеороликов и рекламной продукции для бизнеса
                </p>
            
            </div>

            <button class=" py-[12px] px-[16px] text-[36px] font-bold"> Cвязаться </button>
        
            <div>
                г. Хабаровск
            </div>

        </div>

        <div>

        </div>

    </div>

</template>