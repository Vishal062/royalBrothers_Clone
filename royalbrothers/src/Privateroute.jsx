import { Navigate } from "react-router"
import { useContext } from "react";
import { AppContext } from "./appContext/AppContextProvider";
export default function Privateroute({children}){
    const {token} = useContext(AppContext)
    if(!token){
        return(
            <Navigate to="/validate"/>
        )
    }else{
        return(
            <>
                {children}
            </>
        )
    }
}