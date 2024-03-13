
<script setup lang="ts">

    import type { IContact } from '~/types';

    defineProps<{
        contact: IContact
    }>();

</script>


<template>

    <div
        class="cursor-pointer" 
        @click="copyToClipboard(contact.link, contact.copyMsg)"
    >
        
        <ClientOnly>
            
            <img :src="useImgUrl(`contacts/${contact.img}`)"/>
        
        </ClientOnly>
    
    </div>

</template>