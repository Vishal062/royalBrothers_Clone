import styles from "./css/login.module.css"
import axios from "axios"
import { useState } from "react"
import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router"
import { useContext } from "react"
import { AppContext } from "../appContext/AppContextProvider"
export default function Login(){
    const {setS} = useContext(AppContext)
    const navigate = useNavigate();
    const [user,setUser] = useState({
        email:"",
        password:""
    })
    function getData(){
        try{
            axios.post("http://localhost:3001/login",user)
            .then((res)=>{
                if(res.data.status===400){
                    alert(res.data.message);
                    return;
                }
                localStorage.setItem("token",JSON.stringify(res.data.token));
                localStorage.setItem("username",JSON.stringify(res.data.name))
                const token = JSON.parse(localStorage.getItem("token"));
                setS((prev)=>{return prev+1})
                if(token!==""){
                    navigate("/checkout")
                }else{
                    navigate("/validate")
                }
            })
        }catch(err){
            console.log(err)
        }
    }


    function handleChange(e){
        const {name,value} = e.target;
        setUser({...user,[name]:value})
    }
    return(
        <div className={styles.mainLog}>
        <div className={styles.mobil}>
        <div className={styles.mobil1}>
        <input className={styles.inp2} type="text" name="email" value={user.email} placeholder="Email" onChange={handleChange}></input>
        </div>
        </div>
        <input  name="password" value={user.password} placeholder="Password" onChange={handleChange} type="password"></input>
        <div className={styles.capt}>
            <input type="checkbox"></input>
            <p className={styles.itr} >Remember Password?</p>
           <a  className={styles.itr} href="/">Forgot Password?</a>
        </div>
        <div className={styles.capt}>
            <input type="checkbox"></input>
            <p>I am not a robot.</p>
            <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%2083.png" alt="cap"></img>
        </div>
        <Button className={styles.spBt} backgroundColor="#FDB605" onClick={getData}>Login With Password</Button>
        <p className={styles.Ors}>OR</p>
        <Button width="190px" marginLeft="100px" marginTop="30px" >Login With OTP</Button>
        </div>
    )
}