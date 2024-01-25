
<script setup lang="ts">

    import { type IImage } from '~/types';

    defineProps<{
        logo: IImage;
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
                        bg-slate-100
                        grid justify-items-center items-center
                    "
                >

                    <!-- <div :style="{backgroundImage: `url(${useImgUrl(`${logo.file}`)})`}" class="
                        w-full 
                        h-full 
                        bg-center 
                        bg-cover 
                        hover:scale-[1.2] 
                        transition-transform
                    ">
                        
                    </div> -->

                    <img class=" w-4/5 " :src="useImgUrl(`${logo.file}`)">

                </div>
                
                

            </ClientOnly>

        </div>

        <div class="p-7 grid gap-5 w-1024:p-4 bg-default rounded-b-[10px] w-full">

            <div class=" text-[25px] w-1024:text-[20px]">
                {{ logo.name }}
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
                    v-for="tag in logo.tags"
                >
                    {{ tag }}
                </div>

            </div>

        </div>
            
    </div>

</template>