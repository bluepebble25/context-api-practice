import { createContext, useContext, useState } from 'react';
import { lightTheme, darkTheme } from '../styles/theme';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState('light');
  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => {
  const context = useContext(ThemeContext);
  const { themeMode, setThemeMode, theme } = context;

  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  return { themeMode, toggleTheme, theme };
};

export { ThemeProvider, useTheme };
