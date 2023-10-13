import { useTheme } from 'next-themes';
import { DarkMode, LightMode } from '@emotion-icons/material';
import { useEffect, useState } from 'react';

// eslint-disable-next-line consistent-return
const ThemedButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (theme === 'light') return <DarkMode width={20} height={20} onClick={() => setTheme('dark')} />;
  if (theme === 'dark') return <LightMode width={20} height={20} onClick={() => setTheme('light')} />;
};

export default ThemedButton;
