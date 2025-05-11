// src/context/ThemeContextInstance.ts
import { createContext } from 'react';
import { ThemeContextType } from '../types';

// Create context with a default value
export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});