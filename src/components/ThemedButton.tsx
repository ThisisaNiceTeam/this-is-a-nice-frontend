import { useTheme } from 'next-themes';
import styled from '@emotion/styled';

import ThemeButton from '#/svgs/themeButton.svg';

const ThemeButtonComponent = styled(ThemeButton)`
  path {
    fill: var(--text-primary);
  }
  cursor: pointer;
`;

const ThemedButton = () => {
  const { theme, setTheme } = useTheme();

  return <ThemeButtonComponent width={20} height={20} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />;
};

export default ThemedButton;
