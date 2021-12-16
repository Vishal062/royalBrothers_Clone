import {Carousel} from "react-bootstrap"
import styles from "./css/craousel2.module.css"
export default function Caraousel1(){
    return(
    <Carousel className={styles.mainCra} indicators={true} controls={true}>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100 "
        style={{height:"650px"}}
        src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/cra2%20(1).jpg"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100 "
        style={{height:"650px"}}
        src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/cra2%20(2).jpg"
        alt="Second slide"
      />
  
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100 "
        style={{height:"650px"}}
        src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/cra2%20(3).jpg"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
  
    )
}