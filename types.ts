import { Experience } from "#build/components";

export type TabType = 'Video' | 'Banner' | 'Logo';



export interface IVideo
{
    name   : string;
    file   : string;
    tags   : Array<string>;
    preview: string;
}


export interface IImage
{
    name: string;
    file: string;
    tags: Array<string>;
}


export interface IStepItem
{
    header: string;
    text  : string;
    style : Record<string, string>;
}



export interface IExperienceItem
{
    yearStart: number;
    yearEnd  : number;
    name     : string;
    post     : string;
}



export interface ITool
{
    img : string;
    name: string;
}