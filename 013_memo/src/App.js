import "./App.css";
import { useState, useMemo } from "react";
import Header from "./components/Header";

// const data = {
//   name: "mehmet",
// }; useMemo yerine burada tanımlamak da bir çözümdür ancak, her zaman burada tanımlama yapamayabiliriz

function App() {
  const [number, setNumber] = useState(0);

  const data = useMemo(() => {
    return { name: "mehmet" };
  }, []); //kullanımı useEffect gibi

  return (
    <div className="App">
      <Header number={number < 5 ? 0 : number} data={data}></Header>
      <hr />
      <h1>{number}</h1>
      <button onClick={setNumber(number + 1)}>Click</button>
    </div>
  );
}

export default App;
