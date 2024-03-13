
<script setup lang="ts">
    
    import type { IContact } from '~/types';

    defineProps<{
        contact: IContact
    }>();

</script>



<template>

    <div class="
        grid 
        grid-cols-[max-content_1fr] 
        gap-5 
        w-1024:gap-4 
        w-640:grid-cols-[max-content] 
        w-640:justify-center 
        w-640:justify-items-center
    ">

        <div class="
            p-3 
            w-1024:p-2 
            bg-default-60 
            rounded-md 
            w-1024:rounded 
            w-max
            grid
            content-center
        ">

            <ClientOnly>

                <img class="w-[45px]" :src="useImgUrl(`contacts/${contact.img}`)" />

            </ClientOnly>

        </div>

        <div class="grid gap-2 w-640:justify-items-center">

            <h4 class=" 
                font-semibold 
                text-[24px] 
                w-1280:text-[21px] 
                w-750:text-[19px]
            ">
                {{ contact.name }}
            </h4>

            <div class="
                grid 
                grid-cols-[max-content_max-content] 
                content-center
                item-center
                gap-3
            ">

                <span class="
                    text-[19px] 
                    w-1280:text-[18px] 
                    w-750:text-[16px]
                ">
                    {{ contact.link }}
                </span>

                <div class="
                        w-[25px] 
                        w-1280:w-[22px] 
                        w-750:w-[20px] 
                        cursor-pointer
                    " @click="copyToClipboard(contact.link, contact.copyMsg)">
                    <img src="assets/img/copy-img.png" alt="">
                </div>

            </div>

        </div>

    </div>


</template>