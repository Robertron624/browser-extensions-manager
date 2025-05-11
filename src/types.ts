export type Theme = "light" | "dark";
export type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};
export type ThemeProviderProps = {
  children: React.ReactNode;
};
