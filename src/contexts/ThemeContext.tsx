import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: {
    mode: string;
    tabBarBackground: string;
    inactiveTintColor: string;
    activeTintColor: string;
    background: string;
    text: string;
    card: string;
    button: string;
    buttonText: string;
  };
}

const lightTheme = {
  mode: 'light', // Added mode property
  tabBarBackground: '#ffffff',
  activeTintColor: '#3C6EEF',
  inactiveTintColor: '#818589',
  background: '#ffffff',
  text: '#000000',
  card: '#ffffff',
  button: '#F6F5F4',
  buttonText: '#000000',
};

const darkTheme = {
  mode: 'dark', // Added mode property
  tabBarBackground: '#1f1f1f',
  activeTintColor: '#ffffff',
  inactiveTintColor: '#aaaaaa',
  background: '#000000',
  text: '#ffffff',
  card: '#222222',
  button: '#444444',
  buttonText: '#ffffff',
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Select theme based on isDarkMode
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
