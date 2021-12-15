import {Carousel} from "react-bootstrap"
import styles from "./css/craousel2.module.css"
export default function Caraousel1(){
    return(
        <div >
    <Carousel className={styles.cram} indicators={false} controls={false}>
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
        src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%203.png"
        alt="First slide"
      />
      </div>
      <div  className={styles.craImgdiv}>
       <img
        // className="d-block w-100 "
        className={styles.cra2Img}
        src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%204.png"
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
        src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%204.png"
        alt="First slide"
      />
      </div>
       <div  className={styles.craImgdiv}>
       <img
        // className="d-block w-100 "
        className={styles.cra2Img}
        src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%202.png"
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
        className={styles.cra2Img}
        src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%204.png"
        alt="First slide"
      />
      </div>
       <div  className={styles.craImgdiv}>
       <img
        // className="d-block w-100 "
        className={styles.cra2Img}
        src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/image%205.png"
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