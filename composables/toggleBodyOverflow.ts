

export function toggleBodyOverflow(toggle: boolean)
{   
    if(!process.client) return;

    if(toggle)
    {
        document.body.style.overflowY = 'hidden';
    }
    else 
    {
        document.body.style.overflowY = 'auto';
    }
}