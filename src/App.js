import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 
import Header from './Header';
import ServicesSection from './ServicesSection';
import FullSite from './FullSite';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Header will always be visible */}
        <Routes>
          <Route path="/" element={<FullSite />} />
          <Route path="/services" element={<ServicesSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
