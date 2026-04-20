
<script setup lang="ts">
    
    import type { TabType } from '~/types';

    
    defineProps<{
        text     : string,
        activeTab: TabType,
        tabType  : TabType,
    }>();

</script>


<template>

    <div 
        class=" 
            text-[28px] 
            text-white
            cursor-pointer
            
            w-1450:text-[24px]
            w-1024:text-[21px]
            w-750:text-[19px]

            relative

            after:absolute
            after:w-full  
            after:bg-white 
            after:bottom-0
            after:left-0

            hover:after:block
            hover:after:h-[2px]
        "
        :class="
        {
            'after:block'  : activeTab == tabType,
            'after:h-[2px]': activeTab == tabType,
            'font-semibold': activeTab == tabType
        }"
    > 
        {{ text }}
    </div>
    
</template>