import { Global, css } from '@emotion/react';

import theme from '@/styles/theme';

const style = () => css`
  body {
    margin: 0;
    padding: 0;
    background-color: var(--bg-home);
  }

  [data-theme='dark'] {
    --text-primary: ${theme.darkTheme.text.primary};
    --text-secondary: ${theme.darkTheme.text.secondary};
    --text-tertiary: ${theme.darkTheme.text.tertiary};
    --text-accent: ${theme.darkTheme.text.accent};

    --bg-primary: ${theme.darkTheme.background.primary};
    --bg-secondary: ${theme.darkTheme.background.secondary};
    --bg-accent: ${theme.darkTheme.background.accent};
    --bg-select: ${theme.darkTheme.background.select};
    --bg-home: ${theme.darkTheme.background.home};
    --bg-gradient: ${theme.darkTheme.background.gradient};

    --icon-primary: ${theme.darkTheme.icon.primary};
    --icon-secondary: ${theme.darkTheme.icon.secondary};
    --icon-accent: ${theme.darkTheme.icon.accent};

    --outline-primary: ${theme.darkTheme.outline.primary};
    --outline-secondary: ${theme.darkTheme.outline.secondary};

    --button-primary: ${theme.darkTheme.button.primary};
    --button-secondary: ${theme.darkTheme.button.secondary};
  }

  [data-theme='light'] {
    --text-primary: ${theme.lightTheme.text.primary};
    --text-secondary: ${theme.lightTheme.text.secondary};
    --text-tertiary: ${theme.lightTheme.text.tertiary};
    --text-accent: ${theme.lightTheme.text.accent};

    --bg-primary: ${theme.lightTheme.background.primary};
    --bg-secondary: ${theme.lightTheme.background.secondary};
    --bg-accent: ${theme.lightTheme.background.accent};
    --bg-select: ${theme.lightTheme.background.select};
    --bg-home: ${theme.lightTheme.background.home};
    --bg-gradient: ${theme.lightTheme.background.gradient};

    --icon-primary: ${theme.lightTheme.icon.primary};
    --icon-secondary: ${theme.lightTheme.icon.secondary};
    --icon-accent: ${theme.lightTheme.icon.accent};

    --outline-primary: ${theme.lightTheme.outline.primary};
    --outline-secondary: ${theme.lightTheme.outline.secondary};

    --button-primary: ${theme.lightTheme.button.primary};
    --button-secondary: ${theme.lightTheme.button.secondary};
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};
export default GlobalStyle;
