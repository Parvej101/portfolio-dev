

'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeChange = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    // console.log('Changing theme to:', newTheme);
    setTheme(newTheme);
  };

  // console.log('Current theme:', theme);

  return (
    <button onClick={handleThemeChange}>
      {theme === 'dark' ? (
        <SunIcon className='h-6 w-6 text-yellow-500' />
      ) : (
        <MoonIcon className='h-6 w-6 text-gray-900' />
      )}
    </button>
  );
};

export default ThemeSwitch;
