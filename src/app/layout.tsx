import React from 'react';

import type { Metadata } from 'next';

import Provider from '@/app/Provider';

export const metadata: Metadata = {
  title: 'SSAFY LIVE',
  description: 'This is random chat application for SSAFY 10th',
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
