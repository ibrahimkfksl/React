import "./style.css";

function ItemList({ setItem, items }) {
  const setLine = (e) => {
    if (e.target.className === "crossed-line") {
      e.target.classList.remove("crossed-line");
    } else {
      return e.target.classList.add("crossed-line");
    }
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <div key={index}>
            <input type="checkbox" id={index} />
            <label htmlFor={index} onClick={setLine}>
              {item}
            </label>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
