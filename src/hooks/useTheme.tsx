import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContextInstance';
import { ThemeContextType } from '../types';

export const useTheme = (): ThemeContextType => useContext(ThemeContext);