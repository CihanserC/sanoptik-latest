import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import StickyMobileCTA from './components/StickyMobileCTA';
import LocalBusinessSchema from './components/LocalBusinessSchema';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import BrandsPage from './pages/BrandsPage';
import BrandDetailPage from './pages/BrandDetailPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AppointmentPage from './pages/AppointmentPage';
import PrivacyPage from './pages/PrivacyPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <LocalBusinessSchema />
        <div className="relative overflow-x-hidden w-full">
          <div className="min-h-screen flex flex-col pb-16 md:pb-0">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/hizmetler" element={<ServicesPage />} />
                <Route path="/hizmetler/:slug" element={<ServiceDetailPage />} />
                <Route path="/markalar" element={<BrandsPage />} />
                <Route path="/markalar/:slug" element={<BrandDetailPage />} />
                <Route path="/hakkimizda" element={<AboutPage />} />
                <Route path="/sss" element={<FAQPage />} />
                <Route path="/iletisim" element={<ContactPage />} />
                <Route path="/magazamiz" element={<GalleryPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/randevu" element={<AppointmentPage />} />
                <Route path="/gizlilik" element={<PrivacyPage />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
            <StickyMobileCTA />
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
