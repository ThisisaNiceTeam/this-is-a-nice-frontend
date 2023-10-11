import { Global, css, Theme } from '@emotion/react';

const style = (theme: Theme) => css`
  body {
    background: ${theme.background.primary};
    color: ${theme.text.primary};
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};
export default GlobalStyle;
