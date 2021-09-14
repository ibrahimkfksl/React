import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  //filtreleme islemi
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase());
    });
  });
  //object.keys key doner

  return (
    <div>
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul>
        {filtered.map((contact, i) => (
          <li key={i}>{contact.fullname}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
