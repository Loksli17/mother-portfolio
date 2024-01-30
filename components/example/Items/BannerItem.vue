
<script setup lang="ts">

    import PopUp           from '~/components/global/PopUp.vue';
    import { type IImage } from '~/types';

    defineProps<{
        banner: IImage;
    }>();

    const showPopUp = ref<boolean>(false);

</script>



<template>

    <div>

        <div>

            <ClientOnly>

                <div 
                    @click="showPopUp = true"
                    class=" 
                        w-full 
                        h-[309px] 
                        w-1024:h-[250px] 
                        rounded-t-[10px]
                        cursor-pointer
                        overflow-hidden
                        shadow-2xl
                    "
                >

                    <div :style="{backgroundImage: `url(${useImgUrl(`${banner.file}`)})`}" class="
                        w-full 
                        h-full 
                        bg-center 
                        bg-cover 
                        hover:scale-[1.2] 
                        transition-transform
                    ">
                        
                    </div>

                </div>

            </ClientOnly>

        </div>

        <div class="p-7 grid gap-5 w-1024:p-4 bg-default rounded-b-[10px] w-full">

            <div class=" text-[25px] w-1024:text-[20px]">
                {{ banner.name }}
            </div>

            <div class=" flex gap-[10px] flex-wrap w-full">

                <div class=" 
                    w-max
                    px-4 
                    py-2 
                    text-[19px] 
                    bg-white 
                    rounded-md 
                    w-1024:px-3 
                    w-1024:py-1 
                    w-1024:rounded 
                    w-1024:text-[15px]
                " 
                    v-for="tag in banner.tags"
                >
                    {{ tag }}
                </div>

            </div>

        </div>
            
    </div>


    <Teleport to="body">

        <PopUp v-model:toggle="showPopUp">

            <img 
                class=" w-[850px] w-1520:w-[600px] w-750:w-full " 
                :src="useImgUrl(`${banner.file}`)"
            >

        </PopUp>

    </Teleport>

</template>