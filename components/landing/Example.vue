
<script setup lang="ts">

    import H2  from '../global/H2.vue';
    import Tab from '../example/Tab.vue';

    import BannerWrapper from '../example/BannerWrapper.vue';
    import LogoWrapper   from '../example/LogoWrapper.vue';
    import VideoWrapper  from '../example/VideoWrapper.vue';



    export type TabType = 'Video' | 'Banner' | 'Logo';

    const typeToComponent: Record<TabType, any> = 
    {
        'Banner': BannerWrapper,
        'Video' : VideoWrapper,
        'Logo'  : LogoWrapper,
    };

    interface Tab
    {
        text   : string;
        tabType: TabType;
    }

    const tabs: Array<Tab> = [
        {text: 'Видеоролики',       tabType: 'Video'}, 
        {text: 'Визитки и баннеры', tabType: 'Banner'},
        {text: 'Логотипы',          tabType: 'Logo'},
    ];
    
    const activeTab: Ref<TabType> = ref('Video');
    const activeWrapper = shallowRef(VideoWrapper);


    const setTab = (type: TabType) => 
    {
        activeTab.value     = type;
        activeWrapper.value = typeToComponent[type]; 
    }



</script>



<template>

    <div class="
        p-[80px]
        grid
        gap-[80px]

        w-1024:p-[50px]
        w-640:p-[30px]

    ">

        <div class="grid grid-cols-[max-content_max-content] gap-[80px] content-center">

            <H2 :text="'Примеры работы'"></H2>

            <div class=" 
                grid auto-cols-max grid-flow-col gap-[60px] px-[56px] py-[24px] bg-default rounded-[7px]
            ">

                <Tab 
                    v-for="tab in tabs" 
                    :text="tab.text" 
                    :tabType="tab.tabType" 
                    :active-tab="activeTab"
                    @click="setTab(tab.tabType)"
                ></Tab>

            </div>

        </div>

        <div>
            <component :is="activeWrapper"></component>
        </div>

        
    </div>

</template>