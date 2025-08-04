// context/FilterContextInstance.ts
import { createContext } from 'react';
import { FilterContextType } from '../types';

export const FilterContext = createContext<FilterContextType>({
  activeFilter: 'all',
  setActiveFilter: () => {},
  filteredExtensions: [],
  extensions: [],
  setExtensions: () => {},
  toggleExtensionStatus: () => {},
  removeExtension: () => {},
  loading: false,
  error: null,
});