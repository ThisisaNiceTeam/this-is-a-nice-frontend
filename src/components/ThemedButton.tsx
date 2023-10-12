import { useTheme } from 'next-themes';
import Image from 'next/image';

const ThemedButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Image
      src='/svgs/themeButton.svg'
      alt='themeButton'
      width={20}
      height={20}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    />
  );
};

export default ThemedButton;
