
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
        gap-6 
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
                content-center
                item-center
            ">

                <a 
                    class="
                        text-[19px] 
                        w-1280:text-[18px] 
                        w-750:text-[16px]
                        cursor-pointer
                        hover:text-gray-400
                        transition-all
                    " 
                    :href="`${contact.link}`"
                    target="_blank"
                >

                    {{ contact.text }}

                </a>

            </div>

        </div>

    </div>


</template>