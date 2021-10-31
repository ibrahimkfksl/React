import { useContext } from "react"; //useContext i kullanmamız gerekiyor datalara erişim için

import ThemeContext from "../context/ThemeContext"; //biz bu context içerisindeki dataları kullanmak istiyoruz
//bu yüzden bu context i import ettik

function Button() {
  const { theme, setTheme } = useContext(ThemeContext);
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
