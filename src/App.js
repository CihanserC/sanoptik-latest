import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Brands from './components/Brands';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative overflow-x-hidden w-full">
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Home />
            <div id="brands">
              <Brands />
            </div>
            <div id="about">
              <AboutUs />
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
