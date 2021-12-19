import Nav from "./components/navBar";
import Home from "./components/Home";
import Location from "./components/Location";
import Location2 from "./components/Location2";
import Payment  from "./components/Payment";
import {useState} from "react"
import Bikes from "./components/Bikes";
import Footer from "./components/Footer";
import Validations from "./components/validations"
import Verify from "./components/Validate";
import PaymentDetails from "./components/Paymentdetails";
import Last from "./components/Last";
import {Routes,Route} from "react-router"
import {useContext} from "react"
import {AppContext} from "./appContext/AppContextProvider"


function App() {
  const [modal,setModal] = useState(true);
  const {terms}  = useContext(AppContext)
  return (
    <>
    <div style={{width:"100%",position:"absolute",zIndex:"14"}}>
    <Nav />
    </div>
    {modal? <Location state={setModal}/>:""}
    {terms?<Location2 />:""}
    <div style={{height:"100px",width:"100%"}}>
    </div>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/bikes" element={<Bikes/>}></Route>
      <Route path="/validate" element={<Validations/>}></Route>
      <Route path="/checkout" element={<PaymentDetails />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
      <Route path="/paymentconfirm" element={<Last />}></Route>
      <Route path="/verify" element={<Verify />}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App;
