import {  createContext,useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [location,setLocation] = useState("")
    const [terms,setTerms] = useState(false)
    return(
        <AppContext.Provider value={{location,setLocation,terms,setTerms}}>
            {children}
        </AppContext.Provider>
    )
}