
<script setup lang="ts">

    import Burger from './Burger.vue';

    const toggle = ref<boolean>(false);
    const left   = ref<number>(0);

    watchEffect(() =>
    {
        toggleBodyOverflow(toggle.value);

        if(!process.client) return;

        if(toggle.value) left.value = 0;
        else left.value = window.innerWidth;

    });


    onMounted(() => 
    {
        window.addEventListener("resize", () => 
        {
            if(!toggle.value) left.value = window.innerWidth;

            if(window.innerWidth >= 1024)
            {
                toggle.value = false;
            }
        });
    });

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
        z-20

        w-1024:rounded-bl-[7px]
        w-1024:rounded-br-[7px]
        w-1024:px-[50px]

        w-640:px-[30px]
    ">

        <div class="
            w-1024:hidden 
            grid 
            gap-12 
            grid-flow-col 
            auto-cols-max 
            content-center
        ">
            <NuxtLink class=" text-[22px] h-max"> Приветствие </NuxtLink>
            <NuxtLink class=" text-[22px] h-max"> Обо мне </NuxtLink>
            <NuxtLink class=" text-[22px] h-max"> Примеры работ </NuxtLink>
            <NuxtLink class=" text-[22px] h-max"> Контакты </NuxtLink>
        </div>


        <div class="hidden w-1024:grid ">
            <Burger v-model:toggle="toggle"></Burger>
        </div>


        <div class="
            grid 
            grid-cols-[40px_40px] 
            gap-[30px] 
            w-1024:grid-cols-[35px_35px] 
            w-1024:gap-[20px] 
            content-center
        ">

            <div>
                <img src="assets/img/tg.png"/>
            </div>

            <div>
                <img src="assets/img/mail.png"/>
            </div>
            
        </div>
        

    </div>

    <ClientOnly>

        <Teleport to="body">

            <div
                class=" 
                transition-all
                fixed 
                h-screen 
                w-screen 
                bg-default 
                z-10 
                box-border 
                pt-[90px] 
                auto-rows-max
                w-1024:px-[50px]
                w-750:px-[30px]
                gap-[25px]
                top-0
                grid
            "
                :style="{ left: `${left}px`}"
                :class="{ 'opacity-0': !toggle, 'opacity-100': toggle}"
            >  

                <NuxtLink class=" text-[22px] h-max"> Приветствие </NuxtLink>
                <NuxtLink class=" text-[22px] h-max"> Обо мне </NuxtLink>
                <NuxtLink class=" text-[22px] h-max"> Примеры работ </NuxtLink>
                <NuxtLink class=" text-[22px] h-max"> Контакты </NuxtLink>

            </div>

        </Teleport>

    </ClientOnly>

</template>