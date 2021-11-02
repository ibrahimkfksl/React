import "./App.css";
import Palatte from "./components/Palette";
import { init, subscribe } from "./socketApi";
import { useEffect, useState } from "react";

function App() {
  const [activeColor, setActiveColor] = useState("#282c34"); //bu rengi backend de de tanımladık, varsayılan renk olarak
  useEffect(() => {
    init();
    subscribe((color) => setActiveColor(color));
  }, []);
  return (
    <div className="App" style={{ backgroundColor: activeColor }}>
      <Palatte activeColor></Palatte>
    </div>
  );
}

export default App;
