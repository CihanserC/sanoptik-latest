import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.PNG';

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Check if page is scrolled
      setIsScrolled(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else if (sectionId === 'contact') {
      // Find the footer element
      const footerElement = document.querySelector('footer');
      if (footerElement) {
        const headerOffset = 100;
        const elementPosition = footerElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="SAN Optik Logo" className="h-14 w-14 object-contain" />
            <span className={`text-3xl font-bold tracking-wide ${
              isScrolled ? 'text-emerald-600' : 'text-white'
            }`}>SAN OPTİK</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className={`hover:scale-105 transition duration-300 font-medium ${
              isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-200'
            }`}>
              Ana Sayfa
            </button>
            <button onClick={() => scrollToSection('brands')} className={`hover:scale-105 transition duration-300 font-medium ${
              isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-200'
            }`}>
              Markalar
            </button>
            <button onClick={() => scrollToSection('about')} className={`hover:scale-105 transition duration-300 font-medium ${
              isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-200'
            }`}>
              Hakkımızda
            </button>
            <button onClick={() => scrollToSection('contact')} className={`hover:scale-105 transition duration-300 font-medium ${
              isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-200'
            }`}>
              İletişim
            </button>
          </nav>
        </div>
      </div>

      {/* Progress Bar */}
      <div className={`h-1 w-full transition-all duration-300 ${
        isScrolled ? 'bg-gray-200' : 'bg-transparent'
      }`}>
        <div
          className={`h-full transition-all duration-200 ${
            isScrolled ? 'bg-emerald-600' : 'bg-white/30'
          }`}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
};

export default Header;
