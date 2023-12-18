import React from 'react';
import Script from 'next/script';

import type { Metadata } from 'next';

import Provider from '@/app/Provider';

export const metadata: Metadata = {
  title: 'SSAFY LIVE',
  description: 'This is random chat application for SSAFY 10th',
};

declare global {
  interface Window {
    Kakao: any;
  }
}

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body>
        <Script
          src='https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js'
          integrity='sha384-6MFdIr0zOira1CHQkedUqJVql0YtcZA1P0nbPrQYJXVJZUkTk/oX4U9GhUIs3/z8'
          crossOrigin='anonymous'
        />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
