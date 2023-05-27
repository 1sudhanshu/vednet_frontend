
import { ALERT,  AllMail,  HileriMakr,  LionLorpa,  LormLpsa,  NOTES, OUTBOX, PorkLorn, ReproSoft, Sent, SolvnRelto, Spam, Starred, Trash, UNREAD, UPDATE } from "../../../Constant";

export const emailSidbar = [
    {
        id: 1,
        className: 'icon-folder',
        title: AllMail,
    },
    {
        id: 2,
        className: 'icon-new-window',
        title: Sent,
        badge: (69),
    },
    {
        id: 3,
        className: 'icon-trash',
        title: Trash,
        badge: (99),
    },
    {
        id: 4,
        className: 'icon-star',
        title: Starred,
    },
    {
        id: 5,
        line: <hr />
    },
    {
        id: 6,
        className: 'icon-email',
        title: UNREAD,
    },
    {
        id: 7,
        className: 'icon-export',
        title: Spam,
    },
    {
        id: 8,
        className: 'icon-share',
        title: OUTBOX,
    },
    {
        id: 9,
        className: 'icon-file',
        title: UPDATE,
    },
    {
        id: 10,
        className: 'icon-bell',
        title: ALERT,
    },
    {
        id: 11,
        className: 'icon-notepad',
        title: NOTES,
        badge: '20',
    },
];



export let emailList = [
    {tittle:PorkLorn,date:15,month:"July",year:2018,paragraph:"Mattis luctus. Donec nisi diam"},
    {tittle:LormLpsa,date:20,month:"january",year:2020,paragraph:"Mattis luctus. Donec nisi diam"},
    {tittle:HileriMakr,date:20,month:"August",year:2018,paragraph:"Mattis luctus. Donec nisi diam"},
    {tittle:LionLorpa,date:2,month:"Jun",year:2016,paragraph:"Mattis luctus. Donec nisi diam"},
    {tittle:LionLorpa ,date:25,month:"july",year:2015,paragraph:"Mattis luctus. Donec nisi diam"},
    {tittle:SolvnRelto ,date:15,month:"july",year:2018,paragraph:"Mattis luctus. Donec nisi diam"},
    {tittle:ReproSoft,date:2,month:"jun",year:2016,paragraph:"Mattis luctus. Donec nisi diam"},
    {tittle:LionLorpa,date:2,month:"jun",year:2016,paragraph:"Mattis luctus. Donec nisi diam"},
]
