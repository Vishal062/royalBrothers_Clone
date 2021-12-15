import styles from "./css/home.module.css"
import { Heading } from "@chakra-ui/react"
import { Button } from '@chakra-ui/react'
import Bar from "./bar"
import {bikes} from "./data"
import Caraousel1 from "./caraousel1"
import Caraousel2 from "./caraousel2"
export default function Home(){
    return(
        <div>
            <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%2014.jpg" alt="homeI"/>
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
                <div style={{width:"100%",height:"700px"}}>
                <Caraousel1 />
                </div>
                <div className={styles.sep1}>
                <Heading as='h3' size='lg' fontWeight="600" >FEATURED IN</Heading>
                <Bar />
                <div className={styles.cra2}>
                    <Caraousel2 />
                </div>
            </div>
        </div>
    )
}