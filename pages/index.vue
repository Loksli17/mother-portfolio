
<script setup lang="ts">

    import Hello   from '../components/hello/Hello.vue';
    import About   from '../components/about/About.vue';
    import Example from '../components/example/Example.vue';
    import Footer  from '~/components/footer/Footer.vue';



    const root                = ref<HTMLDivElement | null>(null);
    const activeMenuLinkIndex = ref<number>(0);


    const scrollMaxValue = () => 
    {
        const body = document.body;
        const html = document.documentElement;

        const documentHeight = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );

        const windowHeight = window.innerHeight;

        return documentHeight - windowHeight;
    };



    const clickToLink = (index: number) => 
    {
        root.value!.children[index].scrollIntoView( {behavior: 'smooth'} );
    }

    
    const scroll = (scrollY: number) => 
    {
        if(scrollY == scrollMaxValue())
        {
            activeMenuLinkIndex.value = root.value!.children.length - 1;
            return;
        }

        for(let i = 0; i < root.value!.children.length; i++)
        {
            const offset = (root.value!.children[i] as HTMLElement).offsetTop;
            const height = (root.value!.children[i] as HTMLElement).getBoundingClientRect().height;

            if(scrollY < offset + height)
            {
                activeMenuLinkIndex.value = i;
                break;
            }
        }
    }

</script>



<template>

    <div  class="overflow-hidden">

        <Menu 
            :activeLinkIndex="activeMenuLinkIndex" 
            @scroll="scroll" 
            @clickToLink="clickToLink"
        >
        </Menu>


        <div ref="root">

            <Hello/>
            <About/>
            <Example/>
            <Footer/>

        </div>


    </div>

</template>