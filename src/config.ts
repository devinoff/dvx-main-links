import {CardGroupInterface} from '@/types';
import {GithubLogoIcon, LastfmLogoIcon, NewspaperIcon, SteamLogoIcon, TwitterLogoIcon} from '@phosphor-icons/react/ssr';

export const config: { cardGroups: CardGroupInterface[] } = {
    cardGroups: [{
        id: 1,
        title: 'social links.',
        cards: [{
            id: 1,
            name: 'github',
            heading: '@devinoff',
            url: 'https://github.com/devinoff',
            icon: GithubLogoIcon
        }, {
            id: 2,
            name: 'last.fm',
            heading: '@dvx_lv',
            url: 'https://www.last.fm/user/dvx_lv',
            icon: LastfmLogoIcon
        }, {
            id: 3,
            name: 'steam',
            heading: '@dvx_lv',
            url: 'https://steamcommunity.com/id/dvx_lv',
            icon: SteamLogoIcon
        }, {
            id: 4,
            name: 'twitter',
            heading: '@dvx_lv',
            url: 'https://x.com/dvx_lv',
            icon: TwitterLogoIcon
        }]
    }, {
        id: 2,
        title: 'projects.',
        cards: [{
            id: 1,
            name: 'zinas.dvx.lv',
            heading: 'collects news and generates clear AI-powered summaries.',
            url: 'https://zinas.dvx.lv/',
            icon: NewspaperIcon
        }]
    }]
};