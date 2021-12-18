import "./validate.css";




const Verify = () => {
   
    return (
        <div className = "validate">
            <div className="parent-1">
                <p>Verify Account</p>
            </div>
            <div id="sign-in-button"></div>
            
            <div className="parent-2" >
                <label>Mobile</label>
                <input type = "number" name="mobile" placeholder="Enter Mobile Number" required />
                <input type = "number" name="otp" placeholder="OTP" required />
                <div className="child-1">
                    <button>Resend</button>
                    <button>Call me</button>
                </div>
                
                <button className="btn1" >SUBMIT</button>
                <p className="last">Entered Wrong Details?</p>
            </div>
        </div>
        
    )
}

export default Verify;