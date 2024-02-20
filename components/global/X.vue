

<template>

    <div   
        class="
        grid 
        w-[35px]
        h-[35px]
        grid-rows-[3px_3px]
        content-center
        gap-[21px]
        cursor-pointer
    "
    >

        <div 
            class="
                h-[3px] 
                rounded 
                w-full 
                bg-white
                transition-all 
                origin-top-left
                rotate-[45deg]
            " 
        >
        </div>
    
        <div 
            class="
                h-[3px] 
                rounded 
                w-full 
                bg-white 
                transition-all 
                origin-bottom-left
                -rotate-[45deg]
            " 
        ></div>

    </div>

</template>