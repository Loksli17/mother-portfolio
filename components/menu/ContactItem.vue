
<script setup lang="ts">

    import type { IContact } from '~/types';

    defineProps<{
        contact: IContact
    }>();

</script>


<template>

    <a
        class="cursor-pointer" 
        :href="`${contact.link}`"
        target="_blank"
    >
        
        <ClientOnly>
            
            <img :src="useImgUrl(`contacts/${contact.img}`)"/>
        
        </ClientOnly>
    
    </a>

</template>