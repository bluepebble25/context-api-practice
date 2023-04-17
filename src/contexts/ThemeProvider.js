import { createContext, useContext, useState } from 'react';
import { lightTheme, darkTheme } from '../styles/theme';

const ThemeContext = createContext({
  themeMode: 'light',
  setThemeMode: () => {},
  theme: lightTheme,
});

function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState('light');
  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Context Provider에서 현재 테마와 관련된 정보를 가져온다.
 * @returns themeMode(테마 모드), toggleTheme(토글 함수), theme(테마 객체)를 Array에 담아 반환
 */
const useTheme = () => {
  const context = useContext(ThemeContext);
  const { themeMode, setThemeMode, theme } = context;

  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };
  return [themeMode, toggleTheme, theme];
};

export { ThemeProvider, useTheme };
