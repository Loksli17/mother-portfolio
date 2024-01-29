
<script setup lang="ts">

    import H2       from '../global/H2.vue';
    import LinkItem from './LinkItem.vue';

    defineProps<{
        links: Array<string>;
    }>()


    let root = ref<HTMLDivElement | null>(null);
    let scrollToElement: (e: PointerEvent, ms?: number | undefined) => void;

    const year : number = new Date().getFullYear();
    
    onMounted(() => 
    {
        root = inject('root')!;
        scrollToElement = scrollToElementFactory(root);
    });

</script>



<template>

    <div class=" border-t-white border-t-8
        p-[80px] 

        w-1024:py-[65px] 
        w-640:py-[65px]

        w-1024:p-[50px] 
        w-640:p-[30px] 
        
        bg-default 
        grid 
        gap-[30px]
        relative
        overflow-hidden
    ">

        <H2 :text="'Контакты'"></H2>

        <div class="
            grid 
            grid-cols-[500px_1fr_max-content] 
            w-1280:grid-cols-[385px_1fr_max-content] 
            gap-10 
            w-1024:grid-cols-1
        ">

            <div class="
                bg-white 
                p-9 
                rounded-[20px] 
                grid 
                gap-12 
                w-1024:gap-8 
                w-1024:p-7
            ">

                <div class="
                    grid 
                    grid-cols-[max-content_1fr] 
                    gap-5 
                    w-1024:gap-4 
                    w-640:grid-cols-[max-content] 
                    w-640:justify-center 
                    w-640:justify-items-center
                ">
                    
                    <div class="
                        p-3 
                        w-1024:p-2 
                        bg-default-60 
                        rounded-md 
                        w-1024:rounded 
                        w-max
                    ">
                        <img class="w-[45px]" src="assets/img/tg.png"/>
                    </div>
                    
                    <div class="grid gap-2 w-640:justify-items-center">

                        <h4 class=" 
                            font-semibold 
                            text-[24px] 
                            w-1280:text-[21px] 
                            w-750:text-[19px]
                        ">
                            Telegram
                        </h4>

                        <div class="
                            grid 
                            grid-cols-[max-content_max-content] 
                            content-center
                            item-center
                            gap-3
                        ">
                            
                            <span class="
                                text-[19px] 
                                w-1280:text-[18px] 
                                w-750:text-[16px]
                            ">
                               t.me/Svetlana_Mi6
                            </span>
                            
                            <div 
                                class="
                                    w-[25px] 
                                    w-1280:w-[22px] 
                                    w-750:w-[20px] 
                                    cursor-pointer
                                "
                                @click="copyToClipboard('https://t.me/Svetlana_Mi6', 'Аккаунт в Telegram был скопирован')"
                            >
                                <img src="assets/img/copy-img.png" alt="">
                            </div>
                        
                        </div>  <!-- https://t.me/Svetlana_Mi6 -->
                         
                    </div>

                </div>

                <div class="
                    grid 
                    grid-cols-[max-content_1fr] 
                    gap-5 
                    w-1024:gap-4 
                    w-640:grid-cols-[max-content] 
                    w-640:justify-center w-640:justify-items-center
                ">

                    <div class="
                        p-3 
                        w-1024:p-2 
                        bg-default-60 
                        rounded-md 
                        w-1024:rounded 
                        w-max
                    ">
                        <img class="w-[45px]" src="assets/img/mail.png"/>
                    </div>

                    <div class="
                        grid 
                        gap-2 
                        w-640:justify-items-center
                    ">

                        <h4 class=" 
                            font-semibold 
                            text-[24px] 
                            w-1280:text-[21px] 
                            w-750:text-[19px]
                        ">
                            Электронная почта
                        </h4>
                        
                            <div class="
                                grid 
                                grid-cols-[max-content_max-content] 
                                content-center 
                                item-center
                                gap-3
                            ">
                            
                                <span class="
                                    text-[19px] 
                                    w-1280:text-[18px] 
                                    w-750:text-[16px]
                                ">
                                   smi0504@mail.ru
                                </span>
                            
                                <div 
                                    @click="copyToClipboard('smi0504@mail.ru', 'Электронная почта была скопирована')" 
                                    class="
                                        w-[25px] 
                                        w-1280:w-[22px] 
                                        w-750:w-[20px] 
                                        cursor-pointer
                                    "
                                >
                                    <img src="assets/img/copy-img.png" alt="">
                                </div>
                        
                            </div>

                    </div>

                </div>

            </div>
            

            <div class="grid gap-4 content-end">
                
                <PointsBox 
                    class="w-1024:hidden" 
                    :cols-amount="6" 
                    :rows-amount="4" 
                    :background="'#fff'"
                ></PointsBox>
                
                <div class="
                    text-[24px] 
                    w-1280:text-[21px] 
                    w-750:text-[19px] 
                    grid 
                    grid-cols-[24px_1fr] 
                    gap-2 
                    items-center
                ">
                    <img src="assets/img/pointer.png">
                    <span>г. Хабаровск, +7 МСК</span>
                </div>
                
                <div class="
                    text-[22px] 
                    w-1280:text-[19px] 
                    w-750:text-[18px]
                ">
                    @Портфолио, {{ year }}
                </div>
                
                <div class="
                    text-[22px] 
                    w-1280:text-[19px] 
                    w-750:text-[18px]
                ">
                    Светлана Георгиевна Мишина
                </div>

            </div>
            

            <div class="grid gap-3 w-1024:gap-2 content-end">

                <ClientOnly>

                    <LinkItem 
                        :text="link" 
                        @click-scroll="scrollToElement" 
                        v-for="link in links"
                    >
                    </LinkItem>

                </ClientOnly>


            </div>
            
        </div>


        <Circle 
            :size="280" 
            :background="'#fff'"
            :border-width="0"
            class="
                absolute
                top-[-190px] 
                right-[190px] 
                w-1024:right-[-285px] 
                w-1024:bottom-[-160px]
                w-1024:opacity-30
            "
        />

    </div>

</template>