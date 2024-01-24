


<script setup lang="ts">

    import { type IVideo } from '~/types';

    defineProps<{
        video: IVideo;
    }>();

</script>



<template>

    <div class="">


        <div>

            <ClientOnly>

                <video controls muted class="w-full h-[280px] bg-black rounded-t-[10px]" :poster="useImgUrl(video.preview)">

                    <source :src="useVideoUrl(video.file)" type="video/mp4" />

                </video>

            </ClientOnly>

        </div>

        <div class="p-7 grid gap-5 w-1024:p-4 bg-default rounded-b-[10px] ">

            <div class=" text-[25px] w-1024:text-[20px]">
                {{ video.name }}
            </div>

            <div class=" grid grid-flow-col auto-cols-max gap-4 ">

                <div class="px-4 py-2 text-[19px] bg-white rounded-md w-1024:px-3 w-1024:py-1 w-1024:rounded w-1024:text-[15px]" v-for="tag in video.tags">

                    {{ tag }}

                </div>

            </div>

        </div>

    </div>
    
</template>