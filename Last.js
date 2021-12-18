import "./Last.css";

const Last = () => {
    return (
        
        <div className="Main1">
            <h2>Thanks for your booking!</h2>
            
            <div className="Main2">
                
                <div className="Parent1">
                    <img alt = "" src = "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/002/medium/Activa_3G-min_2.png?1519738389"/>
                    <p>Honda Activa 3G</p>
                </div>
                <div className="Parent2">
                    <div className="Child1">
                        <div className="first_container">
                            <div>
                                <p>08:30pm<br/>11 Dec 2021</p>
                                
                            </div>
                            <div className="to">
                                to
                            </div>
                            <div className="time">
                                <p>08:30pm<br/>12 Dec 2021</p>
                                
                            </div>
                        </div>
                        
                        <div className="second_container">
                            <p>Marathalli CG Clinic(Karthik Nagar)<br/>No. 98 Karthik
                            LRTE Layout Outer Ring Road, <br/>Marathalli, Banglore-560037</p>
                        </div>
                        <div className="third_container">
                            <p className="p1">Total Amount Paid</p>
                            <p className="p2">₹416</p>
                        </div>
                    </div>
                    <div className="child2">
                        Payment Done Through UPI
                    </div>
                    <div className="child3">
                        BOOKING CONFIRMED
                    </div>
                    <div className="child4"> 
                        <button>Book Another Ride</button>
                    </div>
                    
                </div>
            </div>
            
        </div>


    )
}


export default Last;