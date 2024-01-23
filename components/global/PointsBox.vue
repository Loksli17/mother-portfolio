
<script setup lang="ts">

    const props = defineProps<{
        rowsAmount: number,
        colsAmount: number,
    }>();

</script>


<template>

    <div class="grid gap-[7px]">

        <div class="grid grid-flow-col auto-cols-max gap-[7px]" v-for="i in props.rowsAmount">

            <div v-for="j in props.colsAmount">

                <div class=" bg-slate-400 w-[10px] h-[10px] rounded-[5px] ">
                    
                </div>

            </div>

        </div>

    </div>

</template>