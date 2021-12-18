import styles from "./css/home.module.css"
import { Heading } from "@chakra-ui/react"
import { Button } from '@chakra-ui/react'
import Bar from "./bar"
import {bikes} from "./data"
import Caraousel1 from "./caraousel1"
import Caraousel2 from "./caraousel2"
import {useState} from "react"
import { useNavigate } from "react-router"
import { useContext } from "react"
import { AppContext } from "../appContext/AppContextProvider"


export default function Home(){
    const {setPick,setDrop} = useContext(AppContext)
    const navigate = useNavigate();
    const [pickup,setPickup] = useState({
        start:"",
        end:""
    })
    const [dropOff,setDropoff] = useState({
        start:"",
        end:""
    })

    function handlePickup(e){
        const {name,value} = e.target
        setPickup({...pickup,[name]:value})
    }
    function handleDrop(e){
        const {name,value} = e.target
        setDropoff({...dropOff,[name]:value})
    }

    function handleData(){
        if(pickup.start&&pickup.end&&dropOff.start&&dropOff.end){
        localStorage.setItem("pick",JSON.stringify(pickup))
        localStorage.setItem("drop",JSON.stringify(dropOff))
        setPick(pickup)
        setDrop(dropOff)
        navigate("/bikes")
        }else{
            alert("Select All the fields")
        }
    }
    return(
        <div>
            <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%2014.jpg" alt="homeI"/>
            <div className={styles.dateBox}>
                <Heading fontSize="26px" fontWeight="500" className={styles.dataH1}>Search your next ride</Heading>
                <p className={styles.pickUp}>Pickup</p>
                <div className={styles.datTi}>
                    <input type="date" name="start" value={pickup.start} onChange={handlePickup} placeholder="Date"></input>
                    <input type="time" name="end" value={pickup.end} onChange={handlePickup} className={styles.times} placeholder="Time"></input>
                </div>
                <p className={styles.dropOff}>Dropoff</p>
                <div className={styles.datTi}>
                    <input type="date" name="start" value={dropOff.start} onChange={handleDrop} placeholder="Date"></input>
                    <input type="time" name="end" value={dropOff.end} onChange={handleDrop} className={styles.times} placeholder="Time"></input>
                </div>
                <Button width="300px" marginTop="20px" marginLeft= "15px" font-size="20px" backgroundColor="#FDB605" onClick={handleData}>Search</Button>
                <div className={styles.infod}>
                <p>*Pick-up and Drop-up time is between 9:00 AM to 8:00 PM</p>
                </div>
            </div>
            <Button position="absolute" zIndex="4" marginLeft="920px" marginTop="-300px" height="55px" width="188px"  backgroundColor="#FDB605" fontSize="18px">Shop Now</Button>
            <div className={styles.bar}>
            <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%208.png" alt="bar1"></img>
                <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%206.png" alt="bar"></img>
            </div>
            <div className={styles.info}>
            <Heading as='h6' size='xs'>Vehicle Insuarence</Heading>
            <Heading as='h6' size='xs'>Vehicle Insuarence</Heading>
            <Heading as='h6' size='xs'>Vehicle Insuarence</Heading>
            </div>
            <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%2013.png" alt="homei2"/>
            <div className={styles.sep1}>
                <Heading as='h3' size='lg' fontWeight="600">OUR FLEET</Heading>
                <Bar />
            </div>
            <div className={styles.box}>
                {bikes.map((e)=>
                <div className={styles.boxes}>
                <Heading fontSize="18px" fontWeight="semibold">{e.name}</Heading>
                <img src={e.img} alt="images"></img>
                <div className={styles.boxesline}></div>
                <Heading fontSize="20px" marginTop="10px" fontWeight="500">{e.price}</Heading>
                <Button width="100%" marginTop="10px" fontSize="18px" backgroundColor="#FDB605" borderTopLeftRadius="0px" borderTopRightRadius="0px">BOOK NOW</Button>
                </div>
                )}
            </div>
            <div className={styles.excluding}>
                    <Heading fontSize="18px" fontWeight="500">*Excluding of all taxes</Heading>
                </div>
                <div className={styles.quality}>
                    <Heading as='h3' size='lg' fontWeight="600">WE BELIEVE IN QUALITY</Heading>
                    <Bar />
                </div>
                <div className={styles.cra11}>
                <Caraousel1 />
                </div>
                <div className={styles.sep1}>
                <Heading as='h3' size='lg' fontWeight="600" marginTop="230px">FEATURED IN</Heading>
                <Bar />
                <div className={styles.cra2}>
                    <Caraousel2 />
                </div>
            </div>
        </div>
    )
}