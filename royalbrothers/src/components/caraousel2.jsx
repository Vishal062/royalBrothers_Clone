import {Carousel} from "react-bootstrap"
import styles from "./css/craousel2.module.css"
export default function Caraousel1(){
    return(
        <div >
    <Carousel className={styles.cram} indicators={false} controls={false} variant="dark">
    <Carousel.Item interval={1000}>
    <div  className={styles.cra2div}>
      <div className={styles.craImgdiv}>
      <img
        // className="d-block w-100 "
        className={styles.cra2Img}
        src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%202.png"
        alt="First slide"
      />
      </div>
      <div  className={styles.craImgdiv}>
       <img
        // className="d-block w-100 "
        className={styles.cra2Img}
        src="https://images.newindianexpress.com/images/FrontEnd/images/new_logo.jpg?w=300&dpr=2.6"
        alt="First slide"
      />
      </div>
      <div  className={styles.craImgdiv}>
       <img
        // className="d-block w-100 "
        className={styles.cra2Img}
        style={{width:"200px"}}
        src="https://freepngimg.com/save/68296-business-media-company-inc42-startup-marketing/2000x595"
        alt="First slide"
      />
      </div>
      </div>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
    <div style={{display:"flex" ,flexDirection:"row"}}>
    <div  className={styles.craImgdiv}>
      <img
       className={styles.cra2Img}
        src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%207.png"
        alt="First slide"
      />
      </div>
       <div  className={styles.craImgdiv}>
       <img
        className={styles.cra2Img}
        style={{width:"200px"}}
        src="https://freepngimg.com/save/68296-business-media-company-inc42-startup-marketing/2000x595"
        alt="First slide"
      />
      </div>
       <div  className={styles.craImgdiv}>
       <img
        // className="d-block w-100 "
        style={{width:"200px",height:"130px" ,marginTop:"-5px"}}
        className={styles.cra2Img}
        src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/media/times%20of%20india.png"
        alt="First slide"
      />
      </div>
      </div>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
    <div style={{display:"flex" ,flexDirection:"row"}}>
    <div  className={styles.craImgdiv}>
      <img
        // className="d-block w-100 "
        style={{width:"200px",height:"100px" ,marginTop:"-5px"}}
        className={styles.cra2Img}
        src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/media/bettre.png"
        alt="First slide"
      />
      </div>
       <div  className={styles.craImgdiv}>
       <img
        // className="d-block w-100 "
        style={{width:"200px",height:"200px" ,marginTop:"-5px"}}
        className={styles.cra2Img}
        src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/media/hindu.png"
        alt="First slide"
      />
      </div>
       <div  className={styles.craImgdiv}>
       <img
        // className="d-block w-100 "
        className={styles.cra2Img}
        src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%203.png"
        alt="First slide"
      />
      </div>
      </div>
    </Carousel.Item>
  </Carousel>
  </div>
  
    )
}