export type TabType = 'Video' | 'Advert' ;



export interface IVideo
{
    name   : string;
    file   : string;
    tags   : Array<string>;
    preview: string;
    price  : number;
}


export interface IImage
{
    name : string;
    file : string;
    tags : Array<string>;
    price: number;
}


export interface IStepItem
{
    header: string;
    text  : string;
    style : Record<string, string>;
}


export interface IContact
{
    img    : string;
    link   : string;
    name   : string;
    text   : string;
    copyMsg: string;
}