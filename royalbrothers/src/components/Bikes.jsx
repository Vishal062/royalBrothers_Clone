import styles from "./css/bikes.module.css"
import { Button } from "@chakra-ui/react"
export default function Bikes(){
    return(
        <div className={styles.sMain}>
        <img src="https://raw.githubusercontent.com/Kamleshfw11179/royalBrothersimages/main/Header%20of%204%20or%207%20days.png" alt="header"></img>
        <div className={styles.sMain1}>
        <div className={styles.sMain11}>
        <div className={styles.sMain11d}>
        <div className={styles.filter}>
        <p>Filters</p>
        </div>
            <input placeholder="Search Date & Time"></input>
            <div className={styles.sMain11d1}>
                <div className={styles.sMain11d1a}>
                    <p>Pickup Date</p>
                    <input type="text"></input>
                </div>
                <div className={styles.sMain11d1b}>
                    <p>Time</p>
                    <input type="text"></input>
                </div>
            </div>
            <div className={styles.sMain11d1}>
                <div className={styles.sMain11d1a}>
                    <p>Dropoff Date</p>
                    <input type="text"></input>
                </div>
                <div className={styles.sMain11d1b}>
                    <p>Time</p>
                    <input type="text"></input>
                </div>
            </div>
            <div className={styles.sMain11d1}>
                <div className={styles.sMain11d1c}>
                    <p>Search Duration</p>
                    <input type="text"></input>
                </div>
            </div>
            <div className={styles.sMain11d1}>
                <div className={styles.sMain11d1d}>
                    <p>Search by location</p>
                    <input type="text" placeholder="Search Location"></input>
                </div>
            </div>
            <div className={styles.sMain11d1}>
            <div className={styles.sLoc}>
            <p>Basavanagudi.</p>
            <p>Basavanagudi.</p>
            <p>Jayanagar.</p>
            <p>Koramangala.</p>
            <p>Malleshwaram.</p>
            <p>Rajaji Nagar.</p>
            <p>Frazer Town.</p>
            <p>Sadashivanagar.</p>
            <p>Chandni Chowk.</p>
            <p>Daryaganj.</p>
            <p>Shastri Nagar.</p>
            <p>Kishanganj.</p>
            <p>Karol Bagh.</p>
            <p>Rajender Nagar.</p>
            <p>Aminjikarai </p>
            <p>Ayanavaram </p>
            <p>Mambalam </p>
            <p>Tondiarpet </p>
            </div>
            </div>
            <div className={styles.sMain11d1}>
                <div className={styles.sMain11d1d}>
                    <p>Search by location</p>
                    <input type="text" placeholder="Search Location"></input>
                </div>
            </div>
            <div className={styles.sMain11d1}>
            <div className={styles.sLoc}>
            <p>Basavanagudi.</p>
            <p>Basavanagudi.</p>
            <p>Jayanagar.</p>
            <p>Koramangala.</p>
            <p>Malleshwaram.</p>
            <p>Rajaji Nagar.</p>
            <p>Frazer Town.</p>
            <p>Sadashivanagar.</p>
            <p>Chandni Chowk.</p>
            <p>Daryaganj.</p>
            <p>Shastri Nagar.</p>
            <p>Kishanganj.</p>
            <p>Karol Bagh.</p>
            <p>Rajender Nagar.</p>
            <p>Aminjikarai </p>
            <p>Ayanavaram </p>
            <p>Mambalam </p>
            <p>Tondiarpet </p>
            </div>
            </div>
            <Button className={styles.button}>Apply Filters</Button>
        </div>
        </div>
        <div className={styles.sMain12}>
            <div className={styles.filters}>
            <button>Sort By</button>
            <button>Relevance</button>
            <button>Price Low To High</button>
            <button>Price Hight To Low</button>
            </div>
        </div>
        </div>
        </div>
    )
}