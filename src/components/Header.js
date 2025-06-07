import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.PNG';

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Adjust this value based on your header height plus some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="SAN Optik Logo" className="h-14 w-14 object-contain" />
            <span className="text-3xl font-bold tracking-wide text-emerald-600">SAN OPTİK</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-emerald-600 hover:scale-105 transition duration-300 font-medium">
              Ana Sayfa
            </button>
            <button onClick={() => scrollToSection('brands')} className="text-gray-700 hover:text-emerald-600 hover:scale-105 transition duration-300 font-medium">
              Markalar
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-emerald-600 hover:scale-105 transition duration-300 font-medium">
              Hakkımızda
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-emerald-600 hover:scale-105 transition duration-300 font-medium">
              İletişim
            </button>
          </nav>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 w-full bg-gray-200">
        <div
          className="h-full bg-emerald-600 transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
};

export default Header;
