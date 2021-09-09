import "./App.css";
import Header from "./components/Header";
import User from "./components/User";

const name = "Mehmet"; //degisken tanimlama jsx de {} ile cagrilir
const isLoggedIn = true;

function App() {
  return (
    <div>
      <Header />
      <p className="xyz">deneme</p>

      <hr />

      <label htmlFor="myinput">
        Name
        <input id="myinput"></input>
      </label>

      <hr />

      <h1>{`Benim adim ${name}`}</h1>

      <hr />

      <h1>{isLoggedIn && `Hosgeldin ${name}`}</h1>
      <h1>{!isLoggedIn && `Lutfen Giris Yapiniz`}</h1>
      <h1>{isLoggedIn ? `Hosgeldin ${name}` : `Lutfen Giris Yapiniz`}</h1>

      <hr />

      <User
        name="Mehmet"
        surName="Demir"
        isLoggedIn={false}
        age={21}
        friends={["ahmet", "tayfun", "gokhan", "ayse", "fatma"]}
        address={{
          title: "Istanbul/Sancaktepe",
          zip: 34885,
        }}
      />
    </div>
  );
}

export default App;
