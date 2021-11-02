import { createContext, useState } from "react";

const CityContext = createContext()

export const CityProvider = ({children}) => {

    const [contextCity, setContextCity] = useState(null)
    const cityValues = {
        contextCity,
        setContextCity
    }

    return <CityContext.Provider value={cityValues}>{children}</CityContext.Provider>
    
}

export default CityContext