

<script setup lang="ts">

    import Hello   from '../components/hello/Hello.vue';
    import About   from '../components/about/About.vue';
    import Example from '../components/example/Example.vue';
    import Steps   from '~/components/steps/Steps.vue';
    import Footer  from '~/components/footer/Footer.vue';
    import Menu    from '~/components/menu/Menu.vue';

    const root = ref<HTMLDivElement | null>(null);

    provide('root', root);

</script>



<template>


    <div class="overflow-hidden">

        <Menu 
            :links="['Приветствие', 'Обо мне', 'Примеры работы', 'Процесс', 'Контакты']">
        </Menu>


        <div ref="root">

            <Hello/>
            <About/>
            <Example/>
            <Steps/>
            <Footer/>

        </div>

    </div>

</template>