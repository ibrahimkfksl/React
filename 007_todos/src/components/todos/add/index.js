function Add({ item, setItem }) {
  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setItem([...item, e.target.value]);
      e.target.value = "";
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="What needs to be done"
        onKeyDown={_handleKeyDown}
      />
    </div>
  );
}

export default Add;
