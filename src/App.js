import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Notification>
          <Navbar/>
              <Routes>
                {/* <Route path="./Conponenets/Login/Login.js" element={<Login />}/>
                <Route path="./Conponenets/Sign_Up/Sign_Up.js" element={<SignUp />}/>
                <Route path="/instant-consultation" element={<InstantConsultation />} />
                 <Route path="<component_route>" element={<component_name/>}/> //replace the component_route with the component path  and component_name with the component name as imported in the **App.js file**. 
                 */}
              </Routes>
          </Notification>
        </BrowserRouter>
        </div>
  );
}

export default App;