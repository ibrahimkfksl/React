import { useState } from "react"; //state importu kesinlikle sart
import Counter from "./Component/Counter";
import InputExample from "./Component/InputExample";

function App() {
  const [name, setName] = useState("Mehmet");
  //bu state name tutacak ve bu state in degerlerini degistirecek fonksiyonun ismi setName dir
  //ayrica useState e parametre gecersen bu ilk deger atamasi olur
  const [age, setAge] = useState(21);
  //state guncellendigi anda render bastan yapilir, yani goruntu yeniden olusur
  const [friends, setFriends] = useState(["Ahmet", "Murat"]); //array states
  const [address, setAddress] = useState({
    title: "istanbul",
    zip: 34885,
  }); //object states
  //set ederken sadece title set edersen zip kaybolur ve silinir, bu yuzden ikisini de guncellemen gerekiyor

  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Ahmet")}>Change Name</button>
      <button onClick={() => setAge(2)}>Change Age</button>
      <hr />
      <br />
      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <button onClick={() => setFriends([...friends, "Ayse"])}>
        Add New Friend
      </button>
      <hr />
      <br />
      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>
      <button onClick={() => setAddress({ title: "ankara", zip: 33885 })}>
        Change Address
      </button>
      <button onClick={() => setAddress({ ...address, title: "ankara" })}>
        Change Address
      </button>
      <hr />
      <br />
      <Counter></Counter>
      <hr />
      <br />
      <InputExample />
    </div>
  );
}

export default App;
