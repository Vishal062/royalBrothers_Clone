import {  createContext,useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [location,setLocation] = useState("")
    return(
        <AppContext.Provider value={{location,setLocation}}>
            {children}
        </AppContext.Provider>
    )
}