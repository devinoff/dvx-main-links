//footer+header=fheadter

import {ReactElement, ReactNode} from 'react';

export default function Fheadter({ type, children }: { type: 'header' | 'footer', children: ReactNode }): ReactElement {
    const Tag = type;

    const conditionalClasses = type === 'header' ? 'border-b-2 md:border-t-0 md:rounded-b-xl' : 'border-t-2 md:border-b-0 md:rounded-t-xl';

    return (
        <Tag className={`bg-background-2 w-full p-5 md:border-2 border-primary flex justify-center items-center gap-4 ${conditionalClasses}`}>
            {children}
        </Tag>
    );
}