
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
            cursor-pointer 
            font-medium
            
            w-1450:text-[24px]
            w-1024:text-[21px]
            w-750:text-[19px]
        "
        :class="{'text-[#009DA7]': activeTab == tabType, 'font-semibold': activeTab == tabType}"
    > 
        {{ text }}
    </div>
    
</template>