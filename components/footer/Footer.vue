
<script setup lang="ts">

    import H2          from '../global/H2.vue';
    import LinkItem    from './LinkItem.vue';
    import contacts    from '~/data/contacts';
    import ContactItem from './ContactItem.vue';

    
    defineProps<{
        links: Array<string>;
    }>()


    let   root         = ref<HTMLDivElement | null>(null);
    const year: number = new Date().getFullYear();

    let scrollToElement: (e: PointerEvent, ms?: number | undefined) => void;

    
    onMounted(() => 
    {
        root            = inject('root')!;
        scrollToElement = scrollToElementFactory(root);
    });

</script>



<template>

    <div class=" 
        border-t-white 
        border-t-8
        p-[80px] 

        w-1024:py-[65px] 
        w-640:py-[65px]

        w-1024:p-[50px] 
        w-640:p-[30px] 
        
        bg-default 
        grid 
        gap-[35px]
        relative
        overflow-hidden
    ">

        <H2 :text="'Контакты'"></H2>

        <div class="
            grid 
            grid-cols-[440px_1fr_max-content] 
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

                <ContactItem 
                    v-for="contact in contacts" 
                    :contact="contact"
                />

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