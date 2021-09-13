import { useState, useEffect } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("ibrahim");

  //useEffect hook u eventleri yakalar, her hangi bir state guncellenirse calisir
  useEffect(() => {
    console.log("state guncellendi");
  }); //component uzerindeki herhangi bir state guncellenirse bu ifade ile o state yakalanir
  //lifecycle hook lari kesinlikle bir if blogunun vs icinde bulunmamali, tek basina component icinde return ifadesinin disinda tanimlanmali

  //componentDidMount, component yuklendigi anda calisir
  useEffect(() => {
    console.log("component did mount");

    const interval = setInterval(() => {
      setNumber((n) => ++n);
    }, 1000); //component yuklendigi anda n degeri birer birer 1 saniyede bir artsin
    //asenkron bir islemdir, unmount edilmesi gerekiyor, cunku bu component ekrandan gittiginde bu islem devam ediyor

    //component unmount islemi, component kaldirildiginda calisir, did mount icinde bu sekilde tanimlanir
    return () => {
      clearInterval(interval);
    }; // asenkron islemin durdurulmasi sarttir, durdurmazsan bu component ekranda kaldirildiginda, asenkron islem devam eder
  }, []); //array in ici bos ise component did mount fonksiyonudur

  //spesifik olarak bir state guncellendiginde calisir, ikinci parametre olarak state veye stateler verilir
  useEffect(() => {
    console.log("number state guncellendi");
  }, [number]);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <hr />

      <h1>{name}</h1>
      <button onClick={() => setName("oznur")}>Click</button>
    </div>
  );
}

export default Counter;
