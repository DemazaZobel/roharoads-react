import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './Home';

import Navbar from './Navbar';
import Services from './Services';
import About from './About';
import MarketAnalysis from './MarketAnalysis';
import ContactPage from './Contact';

function App() {
  return (
    <BrowserRouter class="overflow-hidden">
      <Routes>
        <Route
          path="/"
          element={
            // Add Navbar inside the protected layout
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/Services"
          element={
            // Add Navbar inside the protected layout
            <>
              
              <Services />
            </>
          }
        />
        <Route
          path="/About"
          element={
            // Add Navbar inside the protected layout
            <>
              
              <About />
            </>
          }
        />
        <Route
          path="/MarketAnalysis"
          element={
            // Add Navbar inside the protected layout
            <>
              <Navbar />
              <MarketAnalysis />
            </>
          }
        />
        <Route
          path="/Contact"
          element={
            // Add Navbar inside the protected layout
            <>
              <Navbar />
              <ContactPage />
            </>
          }
        />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
