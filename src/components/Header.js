import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import logo from '../assets/logo.PNG';
import { NAV_LINKS } from '../data/site';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, toggleLang } = useLanguage();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const lightHeader = isScrolled || !isHome;

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        lightHeader ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg">
            <img src={logo} alt="SAN Optik Logo" className="h-12 w-12 object-contain" />
            <span className={`font-sans text-2xl font-bold tracking-tight ${lightHeader ? 'text-emerald-600' : 'text-white'}`}>
              SAN OPTİK
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6" aria-label="Ana navigasyon">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:scale-105 transition duration-300 font-medium text-sm ${
                  location.pathname === link.path
                    ? 'text-emerald-600 font-semibold'
                    : lightHeader
                    ? 'text-gray-700 hover:text-emerald-600'
                    : 'text-white hover:text-emerald-200'
                }`}
              >
                {t(link.labelKey)}
              </Link>
            ))}
            <button
              type="button"
              onClick={toggleLang}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full border text-sm font-medium transition-colors ${
                lightHeader
                  ? 'border-emerald-200 text-emerald-700 hover:bg-emerald-50'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
              aria-label="Dil değiştir"
            >
              <Globe className="w-4 h-4" />
              {t('lang.switch')}
            </button>
            <Link
              to="/randevu"
              className="px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-semibold hover:bg-emerald-700 transition-colors"
            >
              {t('nav.appointment')}
            </Link>
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={toggleLang}
              className={`p-2 rounded-lg ${lightHeader ? 'text-emerald-700' : 'text-white'}`}
              aria-label="Dil değiştir"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                lightHeader ? 'text-gray-700' : 'text-white'
              }`}
              aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`h-1 w-full transition-all duration-300 ${lightHeader ? 'bg-gray-200' : 'bg-transparent'}`}>
        <div
          className={`h-full transition-all duration-200 ${lightHeader ? 'bg-emerald-600' : 'bg-white/30'}`}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-white">
          <nav className="flex flex-col p-6 space-y-1" aria-label="Mobil navigasyon">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {t(link.labelKey)}
              </Link>
            ))}
            <Link
              to="/randevu"
              className="mt-4 px-4 py-3 bg-emerald-600 text-white rounded-xl text-lg font-semibold text-center hover:bg-emerald-700"
            >
              {t('nav.appointment')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
