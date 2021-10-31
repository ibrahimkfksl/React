import "./App.css";
import Container from "./components/Container";
//import ThemeContext from "./context/ThemeContext"; //bu şekilde ThemeContext.provider ı almaktan sa direkt erişmek istiyoruz
import { ThemeProvider } from "./context/ThemeContext";
import {UserProvider} from "./context/UserContext"

function App() {
  return (
    // <ThemeContext.Provider value="dark">
    //   <Button />
    // </ThemeContext.Provider> //ikisi de aynı şey, alttaki gibi yönetim kolaylaşır
    //theme provider in icinde container children olarak geciyor suan
    <ThemeProvider> 
      <UserProvider>
         <Container></Container>
      </UserProvider>  
    </ThemeProvider>
  );
}

export default App;
