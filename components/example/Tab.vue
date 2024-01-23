
<script setup lang="ts">

    const props = defineProps<{
        text     : string,
        activeTab: TabType,
        tabType  : TabType,
    }>();

</script>


<template>

    <div 
        class=" text-[28px] cursor-pointer font-medium"
        :class="{'text-[#009DA7]': activeTab == tabType}"
    > 
        {{ text }}
    </div>
    
</template>