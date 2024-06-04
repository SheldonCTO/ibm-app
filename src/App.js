import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notification from './components/notification/notification';
import Login from './components/login/login'
import SignUp from './components/signUp/signUp';
import LandingPage from './components/landingPage/landingPage';
import InstantConsultation from './components/instantConsultation/instantConsultation';
import GiveReviews from './components/reviewForm/reviewForm';

import './App.css';

function App() {
  return (
<div className="App">
        <BrowserRouter>
        {/* <Navbar/> */}
          <Notification>
              <Routes>
              <Route path="/landingPage" element={<LandingPage />} />
              <Route path="/reviewForm" element={<GiveReviews />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              
              <Route path="/instantConsultation" element={<InstantConsultation />} />
                 {/* <Route path="<component_route>" element={<component_name/>}/> //replace the component_route with the component path  and component_name with the component name as imported in the **App.js file**.  */}
                
              </Routes>
          </Notification>
        </BrowserRouter>
        </div>
  );
}

export default App;