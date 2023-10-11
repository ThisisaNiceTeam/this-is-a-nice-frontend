'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';

import theme from '@/styles/theme';
import GlobalStyle from '@/styles/global';

interface Props {
  children: ReactNode;
}
const Provider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme.lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Provider;
