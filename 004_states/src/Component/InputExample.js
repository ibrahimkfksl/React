import { useState } from "react";

//input icin state tanimi yapacagiz

function InputExample() {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();

  //birden fazla form tek fonksiyon ile bu sekilde yonetilebilir
  const [form, setForm] = useState({ name: "", surname: "" });
  const onChangeInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div>
      Please Enter a name
      <br />
      <input
        name="name"
        value={name}
        onChange={() => setName(event.target.value)}
      />
      {name}
      <br />
      <br />
      Please Enter a surname
      <br />
      <input
        name="surname"
        value={surname}
        onChange={() => setSurname(event.target.value)}
      />
      {surname}
      <br />
    </div>
  );
}

export default InputExample;
