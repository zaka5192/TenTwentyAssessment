import React, {useState} from 'react';
import {T_APP_THEME, T_CONTEXT, T_THEME_CONTEXT} from './types';
import {appColors} from '../theme';

export const ThemeContext = React.createContext<T_THEME_CONTEXT>({
  currentTheme: 'light',
  colors: appColors,
  toggleTheme: () => {},
});

const ThemeProvider: React.FC<T_CONTEXT> = ({children}) => {
  const [currentTheme, setCurrentTheme] = useState<T_APP_THEME>('light');
  const toggleTheme = () => {};
  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        toggleTheme,
        colors: appColors,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
