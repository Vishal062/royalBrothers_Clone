import Nav from "./components/navBar";
import Home from "./components/Home";
import Location from "./components/Location";
import {useState} from "react"
import Bikes from "./components/Bikes";
import Footer from "./components/Footer";
import Validations from "./components/validations"
import PaymentDetails from "./components/Paymentdetails";
import {Routes,Route} from "react-router"


function App() {
  const [modal,setModal] = useState(true);
  return (
    <>
    <div style={{width:"100%",position:"absolute",zIndex:"14"}}>
    <Nav />
    </div>
    {modal? <Location state={setModal}/>:""}
    <div style={{height:"100px",width:"100%"}}>
    </div>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/bikes" element={<Bikes/>}></Route>
      <Route path="/validate" element={<Validations/>}></Route>
      <Route path="/checkout" element={<PaymentDetails />}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App;
