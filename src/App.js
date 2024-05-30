import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notification from './Components/Notification/Notification';
import Layout from './Components/Landing_Page/Landing_page'};
import GiveReviews from './Components/ReviewForm/ReviewForm.js';
import './App.css';

function App() {
  return (
<div className="App">
        <BrowserRouter>
          <Notification>
              <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/" element={<Landing_Page/>}/>
                <Route path="/instant-consultation" element={<InstantConsultation />} />
                 <Route path="<component_route>" element={<component_name/>}/> //replace the component_route with the component path  and component_name with the component name as imported in the **App.js file**. 
                
              </Routes>
          </Notification>
        </BrowserRouter>
        </div>
  );
}

export default App;