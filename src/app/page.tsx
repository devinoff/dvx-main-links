import {ReactElement} from 'react';
import {config} from '@/config';
import SocialLink from '@/components/SocialLink';
import {GithubLogoIcon, NewspaperIcon} from "@phosphor-icons/react/ssr";

export default function Home(): ReactElement {
  return (
    <main className='w-full max-w-[768px] h-full min-h-screen flex flex-col justify-between gap-8 z-10'>
        <header className='bg-background-2/60 w-full p-5 border-b-2 md:border-2 md:border-t-0 border-primary md:rounded-b-xl flex justify-center'>
            <h1>
                dvx_lv
            </h1>
        </header>
        <div className='flex flex-col gap-2 px-8 lg:px-0'>
            <h2 className='text-[17px] ml-4'>
                social links.
            </h2>
            <div className='grid gap-4 md:gap-6 grid-cols-1 xs:grid-cols-2'>
                {config.links.map((link, index, array) => (
                    <SocialLink link={link} key={link.id} className={array.length % 2 !== 0 && index === array.length - 1 ? 'xs:col-span-2' : ''} />
                ))}
            </div>
        </div>
        <div className='flex flex-col gap-2 px-8 lg:px-0'>
            <h2 className='text-[17px] ml-4'>
                projects.
            </h2>
            <div className='grid gap-4 md:gap-6 grid-cols-1 xs:grid-cols-2'>
                {[{
                    id: 1,
                    name: 'zinas.dvx.lv',
                    username: 'collects news and generates clear AI-powered summaries.',
                    url: 'https://zinas.dvx.lv/',
                    icon: NewspaperIcon
                }].map((link, index, array) => (
                    <SocialLink link={link} key={link.id} className={array.length % 2 !== 0 && index === array.length - 1 ? 'xs:col-span-2' : ''} />
                ))}
            </div>
        </div>
        <footer className='bg-background-2/60 w-full p-5 border-t-2 md:border-2 md:border-b-0 border-primary md:rounded-t-xl flex justify-center items-center gap-4'>
            <a href='https://dvx.lv/'>
                dvx_lv
            </a>
            |
            <a href='https://github.com/devinoff/dvx-main-links' className='flex items-center gap-2'>
                <GithubLogoIcon weight='bold' /> repo
            </a>
            |
            <span>{new Date().getFullYear()}</span>
        </footer>
    </main>
  );
}
