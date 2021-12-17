
import HomePage from "./components/home/Home";
import Login from './components/login/Login';
import Register from './components/register/Register';
import {Routes, Route} from "react-router-dom";


function App() {
  


  return (
    <div>
      
        <Routes>
          <Route exact path= "/" element = {<HomePage/>}></Route>
          <Route exact path= "/login" element = {<Login/>}></Route>
          <Route exact path= "/register" element = {<Register/>}></Route>
        </Routes>
      
      
    </div>
  );
}

export default App;
