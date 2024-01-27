


export default function copyToClipboard(text: string, msg: string)
{
    navigator.clipboard.writeText(text);
    useNuxtApp().$toast.success(msg);
}