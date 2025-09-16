import {ReactElement} from 'react';
import {config} from '@/config';
import {GithubLogoIcon} from "@phosphor-icons/react/ssr";
import Fheadter from "@/components/Fheadter";
import CardGroup from "@/components/CardGroup";

export default function Home(): ReactElement {
  return (
    <main className='w-full max-w-[768px] h-full min-h-screen flex flex-col justify-between gap-8 z-10'>
        <Fheadter type='header'>
            <h1>
                dvx_lv
            </h1>
        </Fheadter>

        {config.cardGroups.map(cardGroup => (
            <CardGroup key={cardGroup.id} group={cardGroup} />
        ))}

        <Fheadter type='footer'>
            <a href='https://dvx.lv/'>
                dvx_lv
            </a>
            |
            <a href='https://github.com/devinoff/dvx-main-links' className='flex items-center gap-2'>
                <GithubLogoIcon weight='bold' /> repo
            </a>
            |
            <span>{new Date().getFullYear()}</span>
        </Fheadter>
    </main>
  );
}
