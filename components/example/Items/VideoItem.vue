


<script setup lang="ts">

    import { type IVideo } from '~/types';

    defineProps<{
        video: IVideo;
    }>();

</script>



<template>

    <div>


        <div>

            <ClientOnly>

                <video controls muted class="
                    w-full 
                    h-[309px] 
                    shadow-xl 
                    w-1024:h-[250px] 
                    bg-black 
                    rounded-t-[10px]
                    " 
                    :poster="useImgUrl(`preview/${video.preview}`)"
                >

                    <source :src="useVideoUrl(video.file)" type="video/mp4" />

                </video>

            </ClientOnly>

        </div>

        <div class="p-7 grid gap-8 w-1024:p-4 bg-default-55 rounded-b-[10px] w-full ">

            <div class=" text-[25px] w-1024:text-[20px]">
                {{ video.name }}
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
                    v-for="tag in video.tags"
                >
                    <span> {{ tag }} </span>
                </div>

            </div>

            <div class="grid justify-end">

                <span class=" font-medium
                    text-[22px]
                    w-1024:text-[19px]
                ">
                    {{ video.price }} руб
                </span>

            </div>

        </div>

    </div>
    
</template>