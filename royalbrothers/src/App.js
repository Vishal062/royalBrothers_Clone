import Nav from "./components/navBar";
import Home from "./components/Home";
import Location from "./components/Location";
import {useState} from "react"
import Bikes from "./components/Bikes";


function App() {
  const [modal,setModal] = useState(true);
  return (
    <>
    <Nav />
    {modal? <Location state={setModal}/>:""}
    <div style={{height:"100px",width:"100%"}}>
    </div>
    <Home />
    {/* <Bikes /> */}
    </>
  )
}

export default App;
