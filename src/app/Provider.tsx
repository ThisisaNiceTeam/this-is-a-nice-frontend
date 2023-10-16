'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

import GlobalStyle from '@/styles/global';

interface Props {
  children: ReactNode;
}
const Provider = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider defaultTheme='light'>{children}</ThemeProvider>
    </>
  );
};

export default Provider;
