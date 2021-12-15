import styles from "./css/location.module.css"
import { location } from "./data"
import { Text } from "@chakra-ui/react"
export default function Location({state}){
return(
    <div className={styles.main} >
    <div className={styles.locations}>
    <div className={styles.top}>
    <div>
        <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%201.png" alt="logo"></img>
        </div>
        <div className={styles.locaBar}>
        </div>
        <div>
        <Text fontSize="18px" fontWeight="500">Bike Rentals</Text>
        </div>
    </div>
    <div className={styles.search}>
    <div className={styles.searchlogo}>
        <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Vector%20(3).png" alt="search"></img>
    </div>
    <div className={styles.searchI}>
        <input placeholder="Search or type city to select"/>
        </div>
        <div className={styles.clear}>
            <Text fontSize="18px" fontWeight="500">Clear</Text>
        </div>
    </div>
    <div className={styles.tiles}>
        {location.map((e)=><div className={styles.tile}>
            <img onClick={()=>{state(false)}} src={e.img} alt="locatios"></img>
            <Text className={styles.tilestext}>{e.name}</Text>
        </div>)}
    </div>
    <div className={styles.select}>
        <Text fontSize="18px" fontWeight="500" marginTop="20px">SELECT CITY TO CONTINUE</Text>
    </div>
    </div>
    </div>
)
}