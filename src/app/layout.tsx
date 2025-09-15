import type { Metadata } from 'next';
import './globals.css';
import {ReactElement} from 'react';
import {Nunito} from 'next/font/google';

export const metadata: Metadata = {
  title: 'dvx_lv',
  description: 'this is my website',
};

const nunito = Nunito({ subsets: ['latin-ext'] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): ReactElement {
  return (
    <html lang='en'>
      <body className={`bg-background-1 text-typography-1 w-full h-full min-h-screen flex justify-center items-center ${nunito.className}`}>
        {children}
      </body>
    </html>
  );
}
