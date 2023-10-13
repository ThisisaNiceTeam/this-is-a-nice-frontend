import { useTheme } from 'next-themes';
import { DarkMode, LightMode } from '@emotion-icons/material';
import { useEffect, useState } from 'react';

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
    <LightMode width={20} height={20} onClick={toggleTheme} data-testid='light-button' />
  ) : (
    <DarkMode width={20} height={20} onClick={toggleTheme} data-testid='dark-button' />
  );
};

export default ThemedButton;
