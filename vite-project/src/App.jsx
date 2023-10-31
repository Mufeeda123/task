import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login"
import LoginForm from "./components/loginform"
import Registeration from"./components/register"
import Staffprofile from "./components/staff profile"
import OtpVerify from "./components/verify otp"
import Resetpass from "./components/password reset"

function App(){
  return(
    <Router>
      <Routes>
        {/* <Route

        exact path="*"
        element={<Login/>}
        /> */}
          <Route

exact path="*"
element={<LoginForm/>}
/>
        {/* <Route

exact path="*"
element={<Registeration/>}
/> */}
     {/* <Route

exact path="*"
element={<Staffprofile/>}
/> */}
    {/* <Route

exact path="*"
element={<OtpVerify/>}
/> */}
   {/* <Route

exact path="*"
element={<Resetpass/>}
/> */}

   
      </Routes>
    </Router>
  )
}
export default App