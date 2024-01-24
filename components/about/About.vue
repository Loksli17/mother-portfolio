
<script setup lang="ts">

    import H2 from '../global/H2.vue';
    import H3 from '../global/H3.vue';
    import P  from '../global/P.vue';

    interface ITool
    {
        img : string;
        name: string;
    }

    const tools: Ref<Array<ITool>> = ref(
    [
        {
            img: 'ps.png',
            name: 'Adobe Photoshop',
        },

        {
            img: 'AE.png',
            name: 'Adobe After Effects',
        },

        {
            img: 'corel.png',
            name: 'Corel Draw',
        },
    ]);

</script>



<template>

    <div class=" 
        bg-default-50
        grid
        grid-cols-[700px_1fr]
        gap-[60px]
        min-h-screen
        pt-[40px]
        box-border

        w-1750:grid-cols-[600px_1fr]
        w-1520:grid-cols-[540px_1fr]
        w-1450:grid-cols-[500px_1fr]
        w-1280:grid-cols-[390px_1fr]
        w-1024:grid-cols-1

        w-1024:pl-[50px]
        w-1024:pb-[50px]
        w-1024:pr-[50px]
        w-1024:pt-[90px]
        w-1024:gap-[100px]

        w-640:pl-[30px]
        w-640:pr-[30px]
    ">

        <div class="
            grid justify-end content-center grid-cols-[75%]
            w-1024:justify-center w-1024:grid-cols-[55%]
            w-750:grid-cols-[68%]
            w-640:grid-cols-[80%]
        ">
            <div class="relative">
                <img 
                    class="
                        rounded-[50px]
                        w-1024:rounded-[30px] 
                        bg-default
                    " 
                    src="assets/img/women.png" 
                    alt=""
                />

                <div class=" 
                    grid 
                    text-center 
                    absolute
                    text-[35px]  
                    bg-white 
                    py-6
                    px-10
                    top-[-110px] 
                    left-[-100px]
                    rounded-[50px]
                    font-medium

                    w-1520:py-4
                    w-1520:px-7
                    w-1520:text-[26px]
                    w-1520:rounded-[35px] 
                    w-1520:left-[-70px]
                    w-1520:top-[-90px]

                    w-1280:py-3
                    w-1280:px-6
                    w-1280:text-[22px]
                    w-1280:rounded-[25px] 
                    w-1280:left-[-50px]
                    w-1280:top-[-60px]
                ">
                    <div class=" text-[54px] w-1520:text-[39px] w-1280:text-[32px] font-semibold text-[#00D6E3]">25</div> 
                    <div> лет </div> 
                    <div class=" leading-8"> опыта </div>
                </div>

                <PointsBox 
                    class="
                        absolute bottom-[198px] left-[-90px] -z-10
                        w-1750:bottom-[148px]
                        w-1520:bottom-[118px]
                        
                        w-1280:bottom-[58px]
                        w-1280:left-[-60px]

                        w-640:left-[-40px]
                    " 
                    :cols-amount="6" 
                    :rows-amount="9"
                >
                </PointsBox>

                <div class=" 
                    grid 
                    absolute 
                    text-[35px] 
                    bg-white 
                    p-7 
                    bottom-[-50px] 
                    left-[-40px]
                    rounded-[35px]
                    font-medium

                    w-1520:p-5
                    w-1520:text-[26px]
                    w-1520:rounded-[22px] 
                    w-1520:left-[-40px]
                    w-1520:bottom-[-50px]

                    w-1280:text-[21px]
                ">
                    <div class=" leading-10 w-1280:leading-7">Владение различными</div> 
                    <div class=" leading-10 w-1280:leading-7">навыками</div>
                </div>

            </div>
            

        </div>


        <div class="grid gap-12 w-1024:gap-10 w-640:gap-6 auto-rows-max content-center">

            <H2 :text="'Обо мне'"></H2>

            <div class="
                text-[28px]
                max-w-[630px]

                w-1750:max-w-auto

                w-1750:text-[26px]
                w-1520:text-[22px]
                w-1280:text-[20px]
                w-1024:text-[18px]
            ">

                <P :text="'Я более 25 лет создаю рекламную продукцию для разного бизнеса. Монтирую видео-ролики, создаю баннеры, визитки и логотипы.'"></P>
                <P :text="'Работаю в рекламном агентстве. Есть опыт работы на телевидении.'"></P>

            </div>


            <div class="grid gap-6 w-1024:gap-3">

                <H3 :text="'Инструменты'"></H3>

                <ClientOnly>

                    <div class="grid grid-flow-col auto-cols-[85px] gap-[30px] w-1024:auto-cols-[50px] w-1024:gap-[18px]">

                        <div v-for="tool in tools">

                            <img :alt="tool.name" :title="tool.name" :src="useImgUrl(tool.img)"/>

                        </div>
                
                    </div>

                </ClientOnly>

            </div>

        </div>

    </div>

</template>