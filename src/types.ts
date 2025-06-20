export type Theme = "light" | "dark";
export type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};
export type ThemeProviderProps = {
  children: React.ReactNode;
};
// components/Icons/IconProps.ts
export interface IconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  color?: string;
  title?: string;
}

export type FilterState = 'all' | 'active' | 'inactive';

export interface Extension {
  id: string;
  name: string;
  description: string;
  logo: string;
  isActive: boolean;
}

export interface FilterContextType {
  activeFilter: FilterState;
  setActiveFilter: (filter: FilterState) => void;
  filteredExtensions: Extension[];
  extensions: Extension[];
  setExtensions: (extensions: Extension[]) => void;
}