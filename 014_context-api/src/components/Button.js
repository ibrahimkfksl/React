//import { useContext } from "react"; //useContext i kullanmamız gerekiyor datalara erişim için

//import ThemeContext from "../context/ThemeContext"; //biz bu context içerisindeki dataları kullanmak istiyoruz
//bu yüzden bu context i import ettik
//kendi hook umuzu yazdik
import {useTheme} from "../context/ThemeContext"


function Button() {
 // const { theme, setTheme } = useContext(ThemeContext); //kendi hook umuzu yazdigimizdan kaldirdim
 const { theme, setTheme } = useTheme();
  return (
    <div>
      Active Theme: {theme}
      <br />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
}

export default Button;
