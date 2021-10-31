import "./App.css";
import Container from "./components/Container";
//import ThemeContext from "./context/ThemeContext"; //bu şekilde ThemeContext.provider ı almaktan sa direkt erişmek istiyoruz
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    // <ThemeContext.Provider value="dark">
    //   <Button />
    // </ThemeContext.Provider> //ikisi de aynı şey, alttaki gibi yönetim kolaylaşır
    <ThemeProvider>
      <Container></Container>
    </ThemeProvider>
  );
}

export default App;
