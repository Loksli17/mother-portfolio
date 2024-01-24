

<script setup lang="ts">

    import { type IVideo } from '~/types'

    defineProps<{
        video: IVideo;
    }>();

</script>


<template>

    <div class="grid gap-4 bg-default rounded-[20px]">

        <div class=" p-7 ">
            {{ video.name }}
        </div>

        <div class=" p-7 ">

            <div v-for="tag in video.tags">

                {{ tag }}

            </div>

        </div>

    </div>
    
</template>