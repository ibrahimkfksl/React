import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = () => {
  const [theme, setTheme] = useState("dark");
  const values = {
    theme,
    setTheme,
  }; // iki veride gönderilmeli
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}; //

export default ThemeContext;
