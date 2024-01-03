import { ConfigProvider } from 'antd';

// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

// Define the context
const ThemeContext = createContext(null);

// Define a provider component
export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Example theme state

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Context value
  const contextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
