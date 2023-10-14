import { useTheme } from 'next-themes';
import { DarkMode, LightMode } from '@emotion-icons/material';
import { useEffect, useState } from 'react';

const pointer = {
  cursor: 'pointer',
};

const ThemedButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    if (theme === 'dark') setTheme('light');
  };

  if (!mounted) return null;

  return theme === 'dark' ? (
    <DarkMode width={20} height={20} onClick={toggleTheme} style={pointer} data-testid='dark-button' />
  ) : (
    <LightMode width={20} height={20} onClick={toggleTheme} style={pointer} data-testid='light-button' />
  );
};

export default ThemedButton;
