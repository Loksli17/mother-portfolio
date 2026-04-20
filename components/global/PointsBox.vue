
<script setup lang="ts">

    const props = withDefaults(
        defineProps<{
            rowsAmount : number,
            colsAmount : number,
            background?: string,
            opacity   ?: number,
        }>(),
        {
            background: 'rgba(255, 163, 163, 0.6)',
            opacity   : 1,
        }
    );

</script>


<template>

    <div class="grid gap-[7px]">

        <div class="grid grid-flow-col auto-cols-max gap-[7px]" v-for="i in props.rowsAmount">

            <div v-for="j in props.colsAmount">

                <div :style="{background, opacity}" class=" w-[10px] h-[10px] rounded-[5px] ">
                    
                </div>

            </div>

        </div>

    </div>

</template>