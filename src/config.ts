import {SocialLinkInterface} from '@/types';
import {GithubLogoIcon, LastfmLogoIcon, SteamLogoIcon, TwitterLogoIcon} from '@phosphor-icons/react/ssr';

export const config: { links: SocialLinkInterface[] } = {
    links: [{
        id: 1,
        name: 'GitHub',
        username: '@devinoff',
        url: 'https://github.com/devinoff',
        icon: GithubLogoIcon
    }, {
        id: 2,
        name: 'last.fm',
        username: '@dvx_lv',
        url: 'https://www.last.fm/user/dvx_lv',
        icon: LastfmLogoIcon
    }, {
        id: 3,
        name: 'Steam',
        username: '@dvx_lv',
        url: 'https://steamcommunity.com/id/dvx_lv',
        icon: SteamLogoIcon
    }, {
        id: 4,
        name: 'Twitter',
        username: '@dvx_lv',
        url: 'https://x.com/dvx_lv',
        icon: TwitterLogoIcon
    }, {
        id: 5,
        name: 'Twitter',
        username: '@dvx_lv',
        url: 'https://x.com/dvx_lv',
        icon: TwitterLogoIcon
    }]
};