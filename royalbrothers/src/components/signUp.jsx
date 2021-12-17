import styles from "./css/login.module.css"
import { Button } from "@chakra-ui/react"
export default function Login(){
    return(
        <div className={styles.mainLog}>
        <input placeholder="Name as per Aadhar/Passport"></input>
        <input placeholder="Email"></input>
        <div className={styles.mobil}>
        <p>Mobile</p>
        <div className={styles.mobil1}>
        <input className={styles.inp1} placeholder="+91"></input>
        <input className={styles.inp2} placeholder="As Per Aadhar"></input>
        </div>
        </div>
        <input type="password" placeholder="Password"></input>
        <div className={styles.capt}>
            <input type="checkbox"></input>
            <p>I am not a robot.</p>
            <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%2083.png" alt="cap"></img>
        </div>
        <Button className={styles.spBt} backgroundColor="#FDB605">Sign Up</Button>
        </div>
    )
}