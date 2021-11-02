import { useContext, useEffect } from "react";
import useTurkeyCities from "use-turkey-cities";
import CityContext from "../context/CityContext";

function SelectCity() {
  const { cities, city } = useTurkeyCities();
  const { contextCity, setContextCity } = useContext(CityContext);

  useEffect(() => {}, [contextCity]);

  return (
    <div>
      <select
        onChange={(e) => {
          setContextCity(e.target.value);
        }}
        value={contextCity}
      >
        {cities.map((city) => (
          <option key={`city-${city}`} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectCity;
