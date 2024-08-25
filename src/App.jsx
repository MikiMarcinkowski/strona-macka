// import React from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import AboutMe from "./components/About_Me/AboutMe";
import Offer from "./components/Offer/Offer";
import Contact from "./components/Contact/Contact";
import FirstConsultation from "./components/First_Consultation/FirstConsultation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/contact" element={<Contact />} />{" "}
          {/* Dodajemy trasę dla zakładki Kontakt */}
          <Route
            path="/first-consultation"
            element={<FirstConsultation />}
          />{" "}
          {/* Dodajemy trasę dla zakładki Pierwsza Konsultacja */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
