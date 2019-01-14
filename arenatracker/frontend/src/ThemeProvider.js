import React from "react";

export const themes = {
  ally: {
    currentTheme: "ally",
    background: '#234890',
  },
  horde: {
    currentTheme: "horde",
    background: '#870A0A',
  },
  default: {
      currentTheme: "default",
      background: '#5C5C5C',
  }
};

export const ThemeContext = React.createContext({
  theme: themes.default,
  toggleTheme: () => {} // default value
});