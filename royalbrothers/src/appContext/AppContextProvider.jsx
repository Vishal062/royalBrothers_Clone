import {  createContext,useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [location,setLocation] = useState("")
    const [terms,setTerms] = useState(false)
    const [token,setToken] = useState(JSON.parse(localStorage.getItem("token")))
    return(
        <AppContext.Provider value={{location,setLocation,terms,setTerms,token}}>
            {children}
        </AppContext.Provider>
    )
}