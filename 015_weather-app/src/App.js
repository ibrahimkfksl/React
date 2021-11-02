import GetWeather from "./api/GetWeather";
import "./App.css";
import SelectCity from "./components/SelectCity";
import { CityProvider } from "./context/CityContext";

function App() {
  return (
    <div className="App">
      <CityProvider>
        <SelectCity></SelectCity>
        <GetWeather></GetWeather>
      </CityProvider>
    </div>
  );
}

export default App;
