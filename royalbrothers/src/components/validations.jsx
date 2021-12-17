import Login from "./login"
import Signup from "./signUp"
import { useState } from "react"
import styles from "./css/validate.module.css"
export default function Validations(){
    const [state,setState] = useState("login")
    console.log(state)
    return(
        <div className={styles.mainV}>
        <div className={styles.mainLa}>
        <p>Ride.</p>
        <p>Rent.</p>
        <p>Explore.</p>
        </div>
        <div className={styles.mainSilo}>
        <div className={styles.swapLosi}>
            <button onClick={()=>{setState("login")}}>Login</button>
            <button onClick={()=>{setState("signup")}}>Signup</button>
        </div>
        </div>
        <div className={styles.comp}>
        {state==="signup"?<Signup />:<Login/>}
        </div>       
        </div>
    )
}