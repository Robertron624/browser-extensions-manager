import React from "react";
import { useTheme } from "../hooks/useTheme";
import { Sun, Moon } from "./Icons";
import './ThemeSwitcher.css'

const ThemeSwitcher: React.FC = () => {
    const { isDarkMode, toggleTheme } = useTheme();
  
    return (
      <button 
        onClick={toggleTheme} 
        className="theme-switcher"
        aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
        title={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
      >
        {isDarkMode ? (
          <Sun 
            width={24} 
            height={24} 
            color="currentColor" 
            className="theme-icon"
            title="Light Mode Icon"
          />
        ) : (
          <Moon 
            width={24} 
            height={24} 
            color="currentColor"
            className="theme-icon"
            title="Dark Mode Icon"
          />
        )}
      </button>
    );
  };
  
  export default ThemeSwitcher;