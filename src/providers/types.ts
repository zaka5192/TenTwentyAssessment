import React from 'react';
import {T_APP_COLORS} from '../theme/types';

export type T_APP_THEME = 'light' | 'dark';

export type T_THEME_CONTEXT = {
  currentTheme: T_APP_THEME;
  colors: T_APP_COLORS;
  toggleTheme: () => void;
};

export type T_CONTEXT = {
  children: React.ReactNode;
};
