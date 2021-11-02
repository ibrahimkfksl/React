import { createContext, useState } from "react";
//multi context yapicaz

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [contextCity, setContextCity] = useState(null);
  const values = { contextCity, setContextCity };

  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

export default CityContext;
