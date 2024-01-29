

export default function scrollToElementFactory(root: Ref<HTMLDivElement | null>): (e: PointerEvent, ms?: number) => void
{   
    return (e: PointerEvent, ms: number = 0) => 
    {   
        setTimeout(() => 
        {
            const target   = (e.target as HTMLElement);
            const children = target.parentElement?.children;
            const index    = Array.prototype.indexOf.call(children, target);

            root.value!.children[index].scrollIntoView( {behavior: 'smooth'} );

        }, ms);
    }
}