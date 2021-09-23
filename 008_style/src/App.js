import logo from "./logo.svg";
import "./App.css";
import A from "./components/A";
import B from "./components/B";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ color: "red", backgroundColor: "black" }}>
          lorem ipsum dolor, mahmudo kurban
        </p>

        <A />
        <B />
      </header>
    </div>
  );
  //inline olarak stlye tanimi boyle yapilir, ancak camel case kullanmalisin!
}

export default App;
