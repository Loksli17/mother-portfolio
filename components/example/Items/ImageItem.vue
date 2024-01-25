
<script setup lang="ts">

    import { type IImage } from '~/types';

    defineProps<{
        image: IImage;
    }>();

</script>



<template>

    <div>

        <div>

            <ClientOnly>

                <div 
                    class=" 
                        w-full 
                        h-[309px] 
                        w-1024:h-[250px] 
                        rounded-t-[10px]
                        cursor-pointer
                        overflow-hidden
                    "
                >

                    <div :style="{backgroundImage: `url(${useImgUrl(`${image.file}`)})`}" class="
                        w-full 
                        h-full 
                        bg-center 
                        bg-cover 
                        hover:scale-[1.2] 
                        transition-transform
                    ">
                        
                    </div>

                </div>
                
                <!-- <img  :src="useImgUrl(`images/${image.file}`)"> -->

            </ClientOnly>

        </div>

        <div class="p-7 grid gap-5 w-1024:p-4 bg-default rounded-b-[10px] w-full">

            <div class=" text-[25px] w-1024:text-[20px]">
                {{ image.name }}
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
                    v-for="tag in image.tags"
                >
                    {{ tag }}
                </div>

            </div>

        </div>
            
    </div>

</template>