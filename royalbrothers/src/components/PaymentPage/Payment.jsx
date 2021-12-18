import { react } from "react";
import "./Payment.css";
// import { useNavigate } from "react-router-dom";

export const Payment = () => {
    // const navigate = useNavigate();
  return (
    <>
      <div className="PaymentMainBody">
        <div className="PaymentPayment">
          <div className="PaymentCPM">
            <p className="Paymentt1">Choose Payment Method</p>
          </div>
          <div className="Paymentbox1">
            <div className="PaymentP11">
              <p className="Paymentt2">Credit card</p>
            </div>
            <div className="PaymentP1">
              <p className="Paymentt2">Debit Card</p>
            </div>
            <div className="PaymentP1">
              <p className="Paymentt2">Net Banking</p>
            </div>
            <div className="PaymentP1">
              <p className="Paymentt2">UPI Payment</p>
            </div>
            <div className="PaymentP1">
              <img
                className="Paymentimg1"
                src={require("./Images/Paytm.png")}
                alt="paytm"
              />
            </div>
          </div>

          <div className="Paymentbox2">
            <p className="Paymentt3">Enter Your Card Details</p>
            <input
              className="Paymentt3"
              type="radio"
              value="MALE"
              name="Payment"
            />{" "}
            <img
              className="Paymentimg2"
              src={require("./Images/Visa.png")}
              alt="paytm"
            />
            <input
              className="Paymentt3"
              type="radio"
              value="MALE"
              name="Payment"
            />{" "}
            <img
              className="Paymentimg2"
              src={require("./Images/dinnersClub.png")}
              alt="paytm"
            />
            <input
              className="Paymentt3"
              type="radio"
              value="MALE"
              name="Payment"
            />{" "}
            <img
              className="Paymentimg2"
              src={require("./Images/Aexpress.png")}
              alt="paytm"
            />
            <input
              className="Paymentt3"
              type="radio"
              value="MALE"
              name="Payment"
            />{" "}
            <img
              className="Paymentimg2"
              src={require("./Images/rupay.png")}
              alt="paytm"
            />
            <div className="PaymentpaymentDetails">
              <p className="Paymentt4">Card Number</p>
              <input
                className="Paymentinp2"
                placeholder="Enter Your Card Number"
              />
              <p className="Paymentt4">Name on the Card</p>
              <input className="Paymentinp2" placeholder="Enter Your Name" />

              <p className="Paymentt4">Expiry</p>
              <select className="Paymentinp3" name="expireMM" id="expireMM">
                <option value="">Month</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <select className="Paymentinp3" name="expireYY" id="expireYY">
                <option value="">Year</option>
                <option value="20">2020</option>
                <option value="21">2021</option>
                <option value="22">2022</option>
                <option value="23">2023</option>
                <option value="24">2024</option>
              </select>
              <select className="Paymentinp3" name="expireYY" id="expireYY">
                <option value="">CVV</option>
                <option value="20">947</option>
                <option value="21">578</option>
                <option value="22">341</option>
                <option value="23">564</option>
              </select>
              <input
                class="PaymentinputCard"
                type="hidden"
                name="expiry"
                id="expiry"
                maxlength="4"
              />
            </div>
            <button className="Paymentbtn11">MAKE PAYMENT</button>
          </div>
        </div>

        <div className="PaymentSummary">
          <div className="PaymentCPM1">
            <p className="Paymentt1">Summary</p>
            <p className="Payments1">Total payable amount</p>
            <p className="Payments1">&#8377; 416</p>
            <img
              className="Paymentloading"
              src={require("./Images/loading.png")}
              alt="Time Loading"
            />
          </div>
        </div>
      </div>

      <div className="Paymentnote">
        <p className="PaymentnoteTxt">
          <b>Note:</b> Making Payments on RoyalBrothers.com is 100% safe. Your
          transaction is processed through a secure https internet connection
          based on secure socket layer technology. Your payment details are only
          used for processing the transaction and never stored.
        </p>
      </div>
    </>
  );
};
