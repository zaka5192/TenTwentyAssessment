import {useContext} from 'react';
import {ThemeContext} from '../providers/theme.provider';

const useAppTheme = () => {
  const {currentTheme, colors, toggleTheme} = useContext(ThemeContext);
  return {
    currentTheme,
    colors,
    toggleTheme,
  };
};

export default useAppTheme;
