
<script setup lang="ts">

    import H2 from '../global/H2.vue';

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
        grid-cols-[1040px_1fr]
        min-h-screen
        pt-[40px]
        box-border

        w-1750:grid-cols-[920px_1fr]
        w-1520:grid-cols-[820px_1fr]
        w-1280:grid-cols-[700px_1fr]
        w-1024:grid-cols-1

        w-1024:pl-[50px]
        w-1024:pb-[50px]
        w-1024:pr-[50px]

        w-640:pl-[30px]
        w-640:pb-[30px]
        w-640:pr-[30px]
    ">

        <div>

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

                <p>
                    Я более 25 лет создаю рекламную продукцию для разного бизнеса. Монтирую видео-ролики, создаю баннеры, визитки и логотипы.
                </p>

                <p>
                    Работаю в рекламном агентстве. Есть опыт работы на телевидении.
                </p>

            </div>


            <div class="grid gap-6 w-1024:gap-3">

                <h2 class=" 
                    font-bold 
                    text-[45px] 
            
                    w-1280:text-[35px]
                    w-1024:text-[28px]
                    w-640:text-[22px]
                ">
                    Инструменты
                </h2>

                <div>

                    <div v-for="tool in tools">

                        {{  tool.name }}

                    </div>
                
                </div>

            </div>

        </div>

    </div>

</template>