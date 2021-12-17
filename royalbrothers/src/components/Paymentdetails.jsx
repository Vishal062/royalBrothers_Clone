import styles from "./css/checkout.module.css"
import { bikess } from "./data"
import { Button } from '@chakra-ui/react'
import { useContext } from "react"
import { AppContext } from "../appContext/AppContextProvider"
export default function PaymentDetails(){
    const {setTerms} = useContext(AppContext)
    return(
        <div className={styles.checMain}>
        <div className={styles.checMain1}>
        <div className={styles.checMain11}>
        <div className={styles.checHead}>
            <p>SUMMARY</p>
        </div>
            <div className={styles.bikeIm}>
            <img src={bikess[0].img} alt=" "></img>
            <p>{bikess[0].name}</p>
            </div>
            </div>
            <div className={styles.checMain12}>
            <div className={styles.slotTi}>
                <div className={styles.slotTi1}>
                    <p>09:00 am</p>
                    <p>01 Dec 2011</p>
                </div>
                <div className={styles.slotTi2}>
                    <p>to</p>
                </div>
                <div className={styles.slotTi3}>
                    <p>08:00 pm</p>
                    <p>02 Dec 2011</p>
                </div>
            </div>
            <div className={styles.checLocat}>
                <p>CV Raman Nagar ,KBR Complex</p>
                <p>More Mega Store, 88, Ground Floor,</p>
                <p> Outer Ring Road, Opposite Langford Showroom,</p>
            </div>
            <div className={styles.checPri}>
            <div className={styles.checPri1}>
            <p>weekday - 35.0 hrs * ₹55.0/hr</p>
            <p>₹1925.0</p>
            </div>
            <div className={styles.checPri2}>
            <p>Total</p>
            <p>₹1925</p>
            </div>
            <div  className={styles.checPri3}>
            <p>Number of Helmet. (?) </p>
            <input type="number" placeholder="0"/>
            </div>
            <div  className={styles.checPri4}>
            <input type="number" placeholder="Apply Coupons"/>
            <Button width="200px" backgroundColor="#FDB605">Apply</Button>
            </div>
            <div  className={styles.checPri5}>
            <p>Km Limit (?)</p>
            <p>420 km</p>
            </div>
            <div  className={styles.checPri5}>
            <p>Excess Km Charge (?)</p>
            <p>₹6.0/km</p>
            </div>
            <div>
            <p></p>
            <p></p>
            </div>
            </div>
            </div>
        </div> 
        <div className={styles.checMain2}>
        <div className={styles.checMain21}>
            <p>CHECKOUT</p>
        </div>
        <div className={styles.checMain22}>
        <p>Booking Fee</p>
        <p>₹325</p>
        </div>
        <div className={styles.checMain23}>
        <p>CGST (14%)</p>
        <p>₹45.5</p>
        </div>
        <div className={styles.checMain24}>
        <p>SGST (14%)</p>
        <p>45.5</p>
        </div>
        <div className={styles.checMain25}>
        <p>Refundeable deposit Fee</p>
        <p>₹00.0</p>
        </div>
        <div className={styles.checMain26}>
        <p>Total Payable Amount</p>
        <p>₹416</p>
        </div>
        <Button marginLeft="40px" width="350px" marginTop="40px" backgroundColor="#FDB605" onClick={()=>{setTerms(true)}}>Make Payment</Button>
        </div>    
        </div>
    )
}