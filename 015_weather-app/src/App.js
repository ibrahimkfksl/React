
import './App.css';
import SelectCity from './components/SelectCity';
import CityProvider from './context/CityContext';

function App() {
  return (
      <CityProvider>
        <SelectCity></SelectCity>
      </CityProvider>
  )
}

export default App;
