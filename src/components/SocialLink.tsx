import {ReactElement} from 'react';
import {SocialLinkInterface} from '@/types';

export default function SocialLink({ link, className }: { link: SocialLinkInterface, className: string }): ReactElement {
    return (
        <a href={link.url} target='_blank' className={`flex items-center gap-4 bg-background-2/60 p-5 xs:p-6 rounded-xl border-2 border-primary group hover:bg-background-2 transition-colors duration-300 ease-in-out text-typography-2 ${className}`}>
            <link.icon size={50} weight='fill' className='w-[44px] group-hover:w-[50px] transition-[width] duration-300 ease-in-out shrink-0' />
            <div className='flex flex-col min-w-0'>
                <span className='text-xl font-semibold truncate'>
                    {link.name}
                </span>
                <small className='text-sm text-typography-3'>
                    {link.username}
                </small>
            </div>
        </a>
    );
}