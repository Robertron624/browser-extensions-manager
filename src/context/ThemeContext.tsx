// ThemeContext.tsx
import React, { useState, useEffect } from 'react';
import { ThemeProviderProps } from '../types';
import { ThemeContext } from './ThemeContextInstance';


export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Check for saved theme preference or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark' || 
        (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false; // Default for SSR
  });

  // Toggle theme function
  const toggleTheme = (): void => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Update localStorage and document class when theme changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      document.documentElement.className = isDarkMode ? 'dark-theme' : 'light-theme';
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};