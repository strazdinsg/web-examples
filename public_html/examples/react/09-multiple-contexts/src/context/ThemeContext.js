import { createContext } from "react";

export const lightTheme = {
  themeClass: "light",
};

export const darkTheme = {
  themeClass: "dark",
};

export const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: function () {},
});
