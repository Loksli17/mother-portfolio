

export function useVideoUrl(path: string)
{
    return new URL(`../assets/video/${path}`, import.meta.url).href;
}