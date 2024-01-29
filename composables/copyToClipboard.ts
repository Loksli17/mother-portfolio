

export default function copyToClipboard(text: string, msg: string)
{
    if(!process.client) return;


    if (navigator.clipboard && window.isSecureContext) 
    {
        navigator.clipboard.writeText(text);
        useNuxtApp().$toast.info(msg);
    } 
    else 
    {
        const textArea = document.createElement("textarea");
        textArea.value = text;
            
        textArea.style.position = "absolute";
        textArea.style.left     = "-999999px";
            
        document.body.prepend(textArea);
        textArea.select();

        try 
        {
            document.execCommand('copy');
            useNuxtApp().$toast.info(msg);
        } 
        catch (error) 
        {
            console.error(error);
            useNuxtApp().$toast.error('Ошибка копирования');
        } 
        finally 
        {
            textArea.remove();
        }
    }
}