import "./css/validate.css";
import { useState } from "react";
import { useNavigate } from "react-router";



export default function Verify(){
    const navigate = useNavigate()
    const [num,setNum] = useState({
        mobile:"",
        otp:""
    })
    function handleChange(e){
        const {name,value} = e.target;
        setNum({...num,[name]:value})
    }
    return (
        <div className = "validate">
            <div className="parent-1">
                <p>Verify Account</p>
            </div>
            <div id="sign-in-button"></div>
            
            <div className="parent-2" >
                <label>Mobile</label>
                <input type = "number" value={num.mobile} name="mobile" placeholder="Enter Mobile Number"  onChange={handleChange} />
                <input type = "number" value={num.otp} name="otp" placeholder="OTP"   onChange={handleChange} />
                <div className="child-1">
                    <button>Resend</button>
                    <button>Call me</button>
                </div>
                
                <button className="btn1" onClick={()=>{alert("Otp Verified");navigate("/")}}>SUBMIT</button>
                <p className="last">Entered Wrong Details?</p>
            </div>
        </div>
        
    )
}


