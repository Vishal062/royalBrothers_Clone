import { react } from "react";
import "./css/Payment.css";
export default function Payment(){
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

          <div className="box2">
            <p className="t3">Enter Your Card Details</p>
            <input
              className="t3"
              type="radio"
              value="MALE"
              name="Payment"
            />{" "}
            <img
              className="img2"
              src={require("./Images/Visa.png")}
              alt="paytm"
            />
            <input className="t3" type="radio" value="MALE" name="Payment" />{" "}
            <img
              className="img2"
              src={require("./Images/dinnersClub.png")}
              alt="paytm"
            />
            <input className="t3" type="radio" value="MALE" name="Payment" />{" "}
            <img
              className="img2"
              src={require("./Images/Aexpress.png")}
              alt="paytm"
            />
            <input className="t3" type="radio" value="MALE" name="Payment" />{" "}
            <img
              className="img2"
              src={require("./Images/rupay.png")}
              alt="paytm"
            />
            <div className="paymentDetails">
              <p className="t4">Card Number</p>
              <input className="inp2" placeholder="Enter Your Card Number" />
              <p className="t4">Name on the Card</p>
              <input className="inp2" placeholder="Enter Your Name" />

              <p className="t4">Expiry</p>
              <select className="inp3" name="expireMM" id="expireMM">
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
              <select className="inp3" name="expireYY" id="expireYY">
                <option value="">Year</option>
                <option value="20">2020</option>
                <option value="21">2021</option>
                <option value="22">2022</option>
                <option value="23">2023</option>
                <option value="24">2024</option>
              </select>
              <select className="inp3" name="expireYY" id="expireYY">
                <option value="">CVV</option>
                <option value="20">947</option>
                <option value="21">578</option>
                <option value="22">341</option>
                <option value="23">564</option>
              </select>
              <input
                class="inputCard"
                type="hidden"
                name="expiry"
                id="expiry"
                maxlength="4"
              />
            </div>
            <button className="btn11">MAKE PAYMENT</button>
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
