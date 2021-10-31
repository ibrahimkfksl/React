import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"); //sayfa her yenilendiginde dark olarak gelicek! Local Storage a kaydederek bu sorunun onune gecebilirsin
  useEffect(() => {
    //theme in degistigini buradan anliyoruz
    localStorage.setItem("theme", theme) //localstorage a ekledik
  },[theme])
  const values = {
    theme,
    setTheme,
  }; // iki veride gönderilmeli
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}; 

export const useTheme = () => useContext(ThemeContext) //surekli import yapmamak icin kendi hook umuzu yazdik

export default ThemeContext; //kendi hook umuzu yazdik buna gerek yok  Button.js den bak

