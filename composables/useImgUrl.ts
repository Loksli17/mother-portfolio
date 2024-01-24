

export function useImgUrl(path: string)
{
    return new URL(`../assets/img/${path}`, import.meta.url).href;
}