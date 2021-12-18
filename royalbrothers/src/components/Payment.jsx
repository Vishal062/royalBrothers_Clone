import styles from "./css/payment.module.css"
import { Button } from "@chakra-ui/react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";


export default function Payment(){  


  return (
    <>
      <div className={styles.mainBod}>
      <div className={styles.mainBod1}>
      <div className={styles.mainBod1H}>
      <p>CHOOSE PAYMENT METHOD</p>
      </div>
      <div className={styles.mainBod1m}>
        <div className={styles.mainBod1m1}>
        <Button width="250px" height="40px" borderRadius="0px" borderBottom="2px solid lightgrey">Credit card</Button>
        <Button width="250px" height="40px" borderRadius="0px" borderBottom="2px solid lightgrey">Debit card</Button>
        <Button width="250px" height="40px" borderRadius="0px" borderBottom="2px solid lightgrey">Net Banking</Button>
        <Button width="250px" height="40px" borderRadius="0px" borderBottom="2px solid lightgrey">Upi Banking</Button>
        <Button width="250px" height="40px" borderRadius="0px" borderBottom="2px solid lightgrey"></Button>
        </div>
        <div className={styles.mainBod1m2}>
        <div className={styles.mainBod1m2a}>
          <p>Enter Card Details</p>
        </div>
        <div className={styles.mainBod1m2a1}> 
        <div className={styles.mainBod1m2a1a}>
        <input type="radio"></input>
          <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%2022.png" alt="card"></img>
        </div>
        <div className={styles.mainBod1m2a1a}>
        <input type="radio"></input>
          <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%2021%20(1).png" alt="card"></img>
        </div>
        <div className={styles.mainBod1m2a1a}>
        <input type="radio"></input>
          <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%2020%402x.png" alt="card"></img>
        </div>
        <div className={styles.mainBod1m2a1b}>
        <input type="radio"></input>
          <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%2023%20(1).png" alt="card"></img>
        </div>
        </div>
        <div className={styles.mainInp}>
        <p className={styles.cardst}>Card Number</p>
        <input  className={styles.cardsi}></input>
        <p className={styles.cardst}>Name on Card</p>
        <input  className={styles.cardsi}></input>
        <div className={styles.expi}>
          <p>Expiry</p>
          <p>Cvv</p>
        </div>
        <div className={styles.expii}>
          <input></input>
          <input></input>
          <input></input>
        </div>
        <Button marginTop="10px" marginLeft="19px" width="250px" backgroundColor="#FDB605">Make Payment</Button>
        </div>
        </div>
      </div>
      </div>
      <div className={styles.mainBod2}>
      <div className={styles.mainBod2H}>
      <p>SUMMARY</p>
      </div>
      <div className={styles.paym}>
        <p>Total Payable Amount</p>
        <p>₹416</p>
      </div>
      <div className={styles.timer}>
      <CountdownCircleTimer
    isPlaying
    duration={180}
    colors={[
      ['#000000', 0.33],
      ['#000000', 0.33],
      ['#000000', 0.33],
    ]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
  </div>
      </div>
      </div>
      <div className={styles.note}>
    <p><strong>Note:</strong> Making Payments on RoyalBrothers.com is 100% safe. Your transaction is processed through a secure https internet connection based on secure socket layer technology. Your payment details are only used for processing the transaction and never stored.</p>
  </div>
    </>
  );
};
