import { react } from "react";
import "./PaymentConfirm.css";


export const PaymentConfirm = () => {

  

  return (
    <>
      <div className="ConfirmMainBody">
        <div className="ConfirmPayment">
          <div className="ConfirmCPM">
            <p className="Confirmt1">Choose Payment Method</p>
          </div>
          <div className="Confirmbox1">
            <div className="ConfirmP11">
              <p className="Confirmt2">Credit card</p>
            </div>
            <div className="ConfirmP1">
              <p className="Confirmt2">Debit Card</p>
            </div>
            <div className="ConfirmP1">
              <p className="Confirmt2">Net Banking</p>
            </div>
            <div className="ConfirmP1">
              <p className="Confirmt2">UPI Payment</p>
            </div>
            <div className="ConfirmP1">
              <img
                className="Confirmimg1"
                src={require("./Images/Paytm.png")}
                alt="paytm"
              />
            </div>
          </div>
          <div className="Confirmbox22">
            <p className="ConfirmOtp1">Enter Your OTP</p>
            <div>
              <input className="Confirminp5" placeholder="Enter Your OTP" />
            </div>
            <button className="Confirmbtn2" >PAY</button>
            <div className="Confirmnote3">
              <p>Dont share your otp with anyone.</p>
            </div>
          </div>
        </div>

        <div className="ConfirmSummary">
          <div className="ConfirmCPM1">
            <p className="Confirmt1">Summary</p>
            <p className="Confirms1">Total payable amount</p>
            <p className="Confirms1">&#8377; 416</p>
            <img
              className="Confirmloading"
              src={require("./Images/loading.png")}
              alt="Time Loading"
            />
          </div>
        </div>
      </div>

      <div className="Confirmnote">
        <p className="ConfirmnoteTxt">
          <b>Note:</b> Making Payments on RoyalBrothers.com is 100% safe. Your
          transaction is processed through a secure https internet connection
          based on secure socket layer technology. Your payment details are only
          used for processing the transaction and never stored.
        </p>
      </div>
    </>
  );
};
