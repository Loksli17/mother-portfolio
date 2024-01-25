
<script setup lang="ts">

    import Hello   from '../components/hello/Hello.vue';
    import About   from '../components/about/About.vue';
    import Example from '../components/example/Example.vue';
    import Footer  from '~/components/footer/Footer.vue';

</script>



<template>

    <div  class="overflow-hidden">

        <Menu></Menu>

        <Hello/>
        <About/>
        <Example/>
        <Footer/>

    </div>

</template>