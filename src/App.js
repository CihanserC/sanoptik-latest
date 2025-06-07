import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HomeOne from './components/Home-1';
import Brands from './components/Brands';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ContactSection from './components/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <HomeOne />
          <div id="brands">
            <Brands />
          </div>
          <div id="about">
            <AboutUs />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
