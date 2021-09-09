import PropTypes from "prop-types";

function User(props) {
  //props bir objedir
  //parametre olarak alinirken {name, surName, isLoggedIn} olarak da alinabilir props.name yerine direkt name olarak kullanirsin

  //   if (!isLoggedIn) {
  //       return(
  //           <div>Giris Yapmadiniz</div>
  //       )
  //   } buna early return denir burdan sonrasina bakmiyor

  return (
    <>
      <h1>{props.name}</h1>
      <h1>{props.surName}</h1>
      <h1>{props.age}</h1>
      <h1>{props.isLoggedIn ? "Giris Basarili" : "Giris Basarisiz"}</h1>
      <h1>
        {props.address.title}
        {props.address.zip}
      </h1>
      {props.friends &&
        props.friends.map((friend, index) => <div key={index}>{friend}</div>)}
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surName: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isLoggedIn: PropTypes.array,
  friends: PropTypes.array,
  address: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
}; //bu sekilde degiskenlerin ozelliklerin belirleyebiliriz

User.defaultProps = {
  isLoggedIn: false,
  name: "isimsiz",
};

export default User;
