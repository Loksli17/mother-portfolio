


<script setup lang="ts">

    import { type IVideo } from '~/types';

    defineProps<{
        video: IVideo;
    }>();

</script>



<template>

    <div class=" bg-default rounded-[10px]">


        <div>
            <VueVideoPlayer 
                class="w-full h-[300px]" 
                :src="useVideoUrl(video.file)"
                :poster="useImgUrl(video.preview)"
                controls
            >
            </VueVideoPlayer>
        </div>

        <div class="p-7 grid gap-5 w-1024:p-4">

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