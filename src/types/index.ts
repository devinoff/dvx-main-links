import {Icon} from '@phosphor-icons/react';

export interface CardInterface {
    id: number;
    name: string;
    heading: string;
    url: string;
    icon: Icon;
}
export interface CardGroupInterface {
    id: number;
    title: string;
    cards: CardInterface[];
}