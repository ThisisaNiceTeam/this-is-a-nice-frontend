'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { RecoilRoot } from 'recoil';

import GlobalStyle from '@/styles/global';

interface Props {
  children: ReactNode;
}
const Provider = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <ThemeProvider defaultTheme='light'>{children}</ThemeProvider>
      </RecoilRoot>
    </>
  );
};

export default Provider;
