import React from 'react';
import localFont from 'next/font/local';

import type { Metadata } from 'next';

import Provider from '@/app/Provider';

export const metadata: Metadata = {
  title: 'SSAFY LIVE',
  description: 'This is random chat application for SSAFY 10th',
};

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
  preload: true,
});

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en' className={pretendard.className} suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
