import Add from "./add/index";
import ItemList from "./item/index";
import { useState } from "react";
import Footer from "./footer";

function ToDo() {
  const [item, setItem] = useState([]);
  return (
    <>
      <h1>todos</h1>
      <div>
        <Add setItem={setItem} item={item}></Add>
        <ItemList setItem={setItem} items={item}></ItemList>
        <Footer></Footer>
      </div>
    </>
  );
}

export default ToDo;
