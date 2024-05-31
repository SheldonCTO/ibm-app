import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notification from './components/Notification/Notification';
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp';
import LandingPage from './components/LandingPage/LandingPage';
import InstantConsultation from './components/InstantConsultation/InstantConsultation';
import GiveReviews from './components/ReviewForm/ReviewForm.js';
// import Navbar from './Components/Navbar/Navbar';
import './App.css';

function App() {
  return (
<div className="App">
        <BrowserRouter>
        {/* <Navbar/> */}
          <Notification>
              <Routes>
              <Route path="/reviews" element={<GiveReviews />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign_up" element={<SignUp />} />
              <Route path="/landing_page" element={<LandingPage />} />
              <Route path="/instant_consultation" element={<InstantConsultation />} />
                 {/* <Route path="<component_route>" element={<component_name/>}/> //replace the component_route with the component path  and component_name with the component name as imported in the **App.js file**.  */}
                
              </Routes>
          </Notification>
        </BrowserRouter>
        </div>
  );
}

export default App;