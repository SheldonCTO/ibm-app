import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notification from './Components/Notification/Notification';
import Login from './Components/Login/Login';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Landing_Page from './Components/LandingPage/Landing_Page';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';

import GiveReviews from './Components/ReviewForm/ReviewForm.js';
// import Navbar from './Components/Navbar/Navbar';
import './App.css';

function App() {
  return (
<div className="App">
        <BrowserRouter>
        {/* <Navbar/> */}
          <Notification>
              <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/sign_up" element={<Sign_Up />} />
              <Route path="/landing_page" element={<Landing_Page />} />
              <Route path="/instant_consultation" element={<InstantConsultation />} />
                 <Route path="<component_route>" element={<component_name/>}/> //replace the component_route with the component path  and component_name with the component name as imported in the **App.js file**. 
                
              </Routes>
          </Notification>
        </BrowserRouter>
        </div>
  );
}

export default App;