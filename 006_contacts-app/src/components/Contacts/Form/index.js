import { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phone_number: "" };
function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname !== "" || form.phone_number === "") {
      return false;
    }

    addContact([...contacts, form]);
  };
  //form submit oldugunda varsayilan olarak sayfayi yeniler, nedeni ise form bir endpointe gider veriyi koyar ve sayfa yenilenir mantigi var
  //kullanicilari kaydedecigimiz state i Contacts state inde tutarsak kayit islemi cok kolay olur

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          onChange={onChangeInput}
          value={form.fullname}
        />
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          onChange={onChangeInput}
          value={form.phone_number}
        />
      </div>

      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
