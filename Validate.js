import "./validate.css";
import firebase from "./Firebase";
import { useState } from "react";




const Verify = () => {

    const [state, setState] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target;
        setState({
            [name]: value
        })
    }
    
    const configureCaptch = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              onSignInSubmit();
            },
            defaultCountry : "IN"
          });
    }

    const onSignInSubmit = () => {
        const phoneNumber = "+91" + state.mobile;
        console.log(phoneNumber);
        configureCaptch();
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            console.log("otp sent");
            // ...
            }).catch((error) => {
                console.log("otp not sent")
            });
    }

    const pressKeyNumber = (event) => {
        if(event.key === "Enter") {
            onSignInSubmit();
        }
    }


    const onSubmitOtp = (e) => {
        const code = state.otp
        console.log(code)
        window.confirmationResult.confirm(code).then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user));
        // ...
        }).catch((error) => {
        alert("OTP is not Valid");
        });
    }


    const pressKeyOtp = (event) => {
        if(event.key === "Enter") {
            onSubmitOtp();
        }
    }

    return (
        <div className = "validate">
            <div className="parent-1">
                <p>Verify Account</p>
            </div>
            <div id="sign-in-button"></div>
            
            <div className="parent-2" >
                <label>Mobile</label>
                <input type = "number" name="mobile" placeholder="Enter Mobile Number" required onChange={handleChange} onKeyPress={pressKeyNumber}/>
                <input type = "number" name="otp" placeholder="OTP" required  onChange={handleChange} onKeyPress={pressKeyOtp}/>
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
