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