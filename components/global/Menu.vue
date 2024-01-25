
<script setup lang="ts">

    import Burger from './Burger.vue';

</script>


<template>

    <div class=" 
        h-[70px] 
        bg-default 
        grid 
        w-full 
        fixed 
        rounded-bl-[15px]
        rounded-br-[15px]
        px-[80px]
        box-border
        content-center
        grid-cols-[1fr_max-content]
        w-1024:h-[60px]
        z-10

        w-1024:rounded-bl-[7px]
        w-1024:rounded-br-[7px]
        w-1024:px-[50px]

        w-640:px-[30px]
    ">

        <div class="w-1024:hidden grid gap-12 grid-flow-col auto-cols-max content-center">
            <NuxtLink class=" text-[22px] h-max"> Приветствие </NuxtLink>
            <NuxtLink class=" text-[22px] h-max"> Обо мне </NuxtLink>
            <NuxtLink class=" text-[22px] h-max"> Примеры работ </NuxtLink>
            <NuxtLink class=" text-[22px] h-max"> Контакты </NuxtLink>
        </div>

        <div class="hidden w-1024:grid ">

            <Burger></Burger>

        </div>

        <div class="grid grid-cols-[40px_40px] gap-[30px] w-1024:grid-cols-[35px_35px] w-1024:gap-[20px] content-center">

            <div>
                <img src="assets/img/tg.png"/>
            </div>

            <div>
                <img src="assets/img/mail.png"/>
            </div>
            
        </div>
    
    </div>

</template>