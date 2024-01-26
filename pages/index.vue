
<script setup lang="ts">

    import Hello   from '../components/hello/Hello.vue';
    import About   from '../components/about/About.vue';
    import Example from '../components/example/Example.vue';
    import Footer  from '~/components/footer/Footer.vue';


    const root = ref<HTMLDivElement | null>(null);
    
    const scroll = (index: number) => 
    {
        root.value!.children[index].scrollIntoView( {behavior: 'smooth'} );
    }

</script>



<template>

    <div  class="overflow-hidden">

        <Menu @scroll="scroll"></Menu>

        <div ref="root">

            <Hello/>
            <About/>
            <Example/>
            <Footer/>

        </div>


    </div>

</template>