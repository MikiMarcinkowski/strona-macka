import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AboutMe from './components/About_Me/AboutMe';
import Offer from './components/Offer/Offer';
import Contact from './components/Contact/Contact';
import FirstConsultation from './components/First_Consultation/FirstConsultation';
import CookiesModal from './components/modal/CookiesModal';



function App() {
  const phoneNumber = "+48888252520";
  const emailAddress = "maciusm666@wp.pl";



  return (
    <Router>
      <div className="App">
        <Header phone={phoneNumber} mail={emailAddress} />
       <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/offer" element={<Offer />} />
          <Route
            path="/contact"
            element={<Contact phone={phoneNumber} mail={emailAddress} />}
          />
          <Route path="/first-consultation" element={<FirstConsultation />} />
        </Routes>
        <Footer phone={phoneNumber} mail={emailAddress} />
        <CookiesModal />
      </div>
    </Router>
  );
}

export default App;
