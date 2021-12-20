import styles from "./css/checkout.module.css"
// import { bikess } from "./data"
import { Button } from '@chakra-ui/react'
import { useContext,useEffect,useState } from "react"
import { AppContext } from "../appContext/AppContextProvider"
import axios from "axios"
export default function PaymentDetails(){
    const {setTerms} = useContext(AppContext);
    useEffect(()=>{
        const pick = JSON.parse(localStorage.getItem("pick"))
        const drop = JSON.parse(localStorage.getItem("drop"));
        const ids = JSON.parse(localStorage.getItem("id"));
        const drops =  Number(drop.end.split(":")[0])-12;
        setPick(pick);
        setDrop(drop)
        setdTime(drops)
        axios.get(`https://royal-brother.herokuapp.com/bike/${ids}`)
        .then((res)=>{
            setBike(res.data)
        })

    },[])
    const [bike,setBike] = useState({})
    const [pick,setPick] = useState({})
    const [drop,setDrop] = useState({})
    const [dtime,setdTime] = useState(0)
    return(
        <div className={styles.checMain}>
        <div className={styles.checMain1}>
        <div className={styles.checMain11}>
        <div className={styles.checHead}>
            <p>SUMMARY</p>
        </div>
            <div className={styles.bikeIm}>
            <img src={bike.image} alt=" "></img>
            <p>{bike.name}</p>
            </div>
            </div>
            <div className={styles.checMain12}>
            <div className={styles.slotTi}>
                <div className={styles.slotTi1}>
                    <p>{bike.availableTime}:00 am</p>
                    <p>{pick.start}</p>
                </div>
                <div className={styles.slotTi2}>
                    <p>to</p>
                </div>
                <div className={styles.slotTi3}>
                    <p>{dtime}:00 pm</p>
                    <p>{drop.start}</p>
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
            <p>₹{bike.price*4}</p>
            </div>
            <div className={styles.checPri2}>
            <p>Total</p>
            <p>₹{bike.price*4}</p>
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
        <p>₹{bike.price*4}</p>
        </div>
        <div className={styles.checMain23}>
        <p>CGST (14%)</p>
        <p>₹{Math.floor(bike.price*4*0.14)}</p>
        </div>
        <div className={styles.checMain24}>
        <p>SGST (14%)</p>
        <p>₹{Math.floor(bike.price*4*0.14)}</p>
        </div>
        <div className={styles.checMain25}>
        <p>Refundeable deposit Fee</p>
        <p>₹00.0</p>
        </div>
        <div className={styles.checMain26}>
        <p>Total Payable Amount</p>
        <p>₹{(bike.price*4)+Math.floor(bike.price*4*0.28)}</p>
        </div>
        <Button marginLeft="40px" width="350px" marginTop="40px" backgroundColor="#FDB605" onClick={()=>{setTerms(true)}}>Make Payment</Button>
        </div>    
        </div>
    )
}