
export default function PaymentConfirm (){
  return (
    <>
      <div className="MainBody">
        <div className="Payment">
          <div className="CPM">
            <p className="t1">Choose Payment Method</p>
          </div>
          <div className="box1">
            <div className="P11">
              <p className="t2">Credit card</p>
            </div>
            <div className="P1">
              <p className="t2">Debit Card</p>
            </div>
            <div className="P1">
              <p className="t2">Net Banking</p>
            </div>
            <div className="P1">
              <p className="t2">UPI Payment</p>
            </div>
            <div className="P1">
              <img
                className="img1"
                src={require("./Images/Paytm.png")}
                alt="paytm"
              />
            </div>
          </div>
          <div className="box22">
            <p className="Otp1">Enter Your OTP</p>
            <div>
              <input className="inp5" placeholder="Enter Your OTP" />
            </div>
            <button className="btn2">PAY</button>
            <div className="note3">
              <p>Dont share your otp with anyone.</p>
            </div>
          </div>
        </div>

        <div className="Summary">
          <div className="CPM1">
            <p className="t1">Summary</p>
            <p className="s1">Total payable amount</p>
            <p className="s1">&#8377; 416</p>
            <img
              className="loading"
              src={require("./Images/loading.png")}
              alt="Time Loading"
            />
          </div>
        </div>
      </div>

      <div className="note">
        <p className="noteTxt">
          <b>Note:</b> Making Payments on RoyalBrothers.com is 100% safe. Your
          transaction is processed through a secure https internet connection
          based on secure socket layer technology. Your payment details are only
          used for processing the transaction and never stored.
        </p>
      </div>
    </>
  );
};
