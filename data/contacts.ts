import type { IContact } from "~/types";


const contacts: Array<IContact> = 
[
    {
        name   : 'Telegram',
        link   : 'https://t.me/Svetlana_Mi6',
        img    : 'tg.png',
        text   : 't.me/Svetlana_Mi6',
        copyMsg: 'Аккаунт Telegram был скопирован',
    },

    {
        name   : 'Электронная почта',
        link   : 'https://e.mail.ru/compose?mailto=smi0504@mail.ru',
        img    : 'mail.png',
        text   : 'smi0504@mail.ru',
        copyMsg: 'Эл. почта была скопирована',
    },

    {
        name   : 'YouTube канал',
        link   : 'https://clck.ru/39PsFK',
        img    : 'youtube.png',
        text   : 'Занимашки',
        copyMsg: 'Ссылка на аккаунт в YouTube была скопирована',
    },
];


export default contacts;