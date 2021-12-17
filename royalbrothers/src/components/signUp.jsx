import styles from "./css/login.module.css"
import { Button } from "@chakra-ui/react"
import { useState } from "react"
import axios from "axios"
export default function Login(){
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        mCode:"",
        mobile:""
    })


    function handleChange(e){
        const {name,value} = e.target;
        setUser({...user,[name]:value})
    }


    function signUp(){
        try{
        axios.post("http://localhost:3001/register",user)
        .then((res)=>{
            if(res.status===200){
                console.log(res)
                alert("User registered successfully.");
                setUser({
                    name:"",
                    email:"",
                    password:"",
                    mCode:"",
                    mobile:""
                })
            }
        })
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div className={styles.mainLog}>
        <input type="text" value={user.name} name="name" onChange={handleChange} placeholder="Name as per Aadhar/Passport"></input>
        <input type="text" value={user.email} name="email" onChange={handleChange}  placeholder="Email"></input>
        <div className={styles.mobil}>
        <p>Mobile</p>
        <div className={styles.mobil1}>
        <input type="number" value={user.mCode} name="mCode" onChange={handleChange}  className={styles.inp1} placeholder="+91"></input>
        <input type="number" value={user.mobile} name="mobile" onChange={handleChange} className={styles.inp2} placeholder="As Per Aadhar"></input>
        </div>
        </div>
        <input type="password" value={user.password} name="password" onChange={handleChange}  placeholder="Password"></input>
        <div className={styles.capt}>
            <input type="checkbox"></input>
            <p>I am not a robot.</p>
            <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%2083.png" alt="cap"></img>
        </div>
        <Button className={styles.spBt} backgroundColor="#FDB605" onClick={signUp}>Sign Up</Button>
        </div>
    )
}