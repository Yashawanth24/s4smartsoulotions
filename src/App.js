import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import ServicesSection from './ServicesSection';
import FullSite from './FullSite';
import ContactForm from './ContactForm';
import Footer from './Footer';
import IndivdualServices from './IndivdualServices';
import TermsAndConditions from './Terms&condition';
import PrivacyPolicy from './PrivacyPolicy';
import AboutUs from './AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Header will always be visible */}
        <Routes>
          <Route path="/" element={<FullSite />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/services/:serviceId' element={<IndivdualServices />} /> 
          <Route path='/terms' element={<TermsAndConditions/>}/>
          <Route path='/privacy' element={<PrivacyPolicy/>}/>
          <Route path='/about' element={<AboutUs/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
