import React from "react";

export const themes = {
    light: {
      color: '#000000',
      background: '#fefefe',
    },
    dark: {
      color: '#ffffff',
      background: '#000000',
    },
  };

export const ThemeContext = React.createContext(themes.light)