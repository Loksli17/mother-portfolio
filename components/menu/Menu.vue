
<script setup lang="ts">

    import Burger   from '../global/Burger.vue';
    import LinkItem from './LinkItem.vue';

    defineProps<{
        links: Array<string>;
    }>()


    const toggle      = ref<boolean>(false);
    const left        = ref<number>(0);
    const activeIndex = ref<number>(0);
    
    let root = ref<HTMLDivElement | null>(null);

    const scrollToElement = scrollToElementFactory(root);

    const countActiveIndex = (scrollY: number) => 
    {
        if((scrollMaxValue() - scrollY) <= 40)
        {
            activeIndex.value = root.value!.children.length - 1;
            return;
        }

        for(let i = 0; i < root.value!.children.length; i++)
        {
            const offset = (root.value!.children[i] as HTMLElement).offsetTop;
            const height = (root.value!.children[i] as HTMLElement).getBoundingClientRect().height;

            if(scrollY < offset + height - 1.5)
            {
                activeIndex.value = i;
                break;
            }
        }
    }


    onMounted(() => 
    {
        window.addEventListener("resize", () => 
        {
            if(!toggle.value) left.value = window.innerWidth;

            if(window.innerWidth >= 1024)
            {
                toggle.value = false;
            }

            countActiveIndex(window.scrollY);
        });

        window.addEventListener('scroll', (e: Event) => 
        {
            countActiveIndex(window.scrollY);
        });

        root = inject('root')!;
    });


    watchEffect(() =>
    {
        toggleBodyOverflow(toggle.value);

        if(!process.client) return;

        if(toggle.value) left.value = 0;
        else left.value = window.innerWidth;
    });


    const clickScroll = (e: PointerEvent, ms: number = 0) => 
    {   
        toggle.value = false;
        scrollToElement(e, ms);
    } 

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
            <LinkItem 
                @click-scroll="clickScroll" 
                v-for="(link, index) in links" :text="link"
                :index="index"
                :active-index="activeIndex"
            >
            </LinkItem>

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

            <div
                class="cursor-pointer" 
                @click="copyToClipboard('https://t.me/Svetlana_Mi6', 'Аккаунт в Telegram был скопирован')"
            >
                <img src="assets/img/tg.png"/>
            </div>

            <div
                class="cursor-pointer"
                @click="copyToClipboard('smi0504@mail.ru', 'Электронная почта была скопирована')"
            >
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

                <LinkItem 
                    class="w-max"
                    @click-scroll="clickScroll($event, 200)" 
                    v-for="(link, index) in links" 
                    :text="link"
                    :index="index"
                    :active-index="activeIndex"
                >
                </LinkItem>

            </div>

        </Teleport>

    </ClientOnly>

</template>