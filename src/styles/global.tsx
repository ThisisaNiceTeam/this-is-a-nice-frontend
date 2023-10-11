import { Global, css, Theme } from '@emotion/react';

const style = (theme: Theme) => css`
  body {
    background-color: ${theme.text.accent};
    color: ${theme.text.primary};
    margin: 0;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};
export default GlobalStyle;
