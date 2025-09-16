import {ReactElement} from 'react';
import Card from '@/components/Card';
import {CardGroupInterface} from '@/types';

export default function CardGroup({ group }: { group: CardGroupInterface }): ReactElement {
    return (
        <div className='flex flex-col gap-2 px-8 lg:px-0'>
            <h2 className='text-[17px] ml-4'>
                {group.title}
            </h2>
            <div className='grid gap-4 md:gap-6 grid-cols-1 xs:grid-cols-2'>
                {group.cards.map((link, index, array) => (
                    <Card link={link} key={link.id} className={array.length % 2 !== 0 && index === array.length - 1 ? 'xs:col-span-2' : ''} />
                ))}
            </div>
        </div>
    );
}