import React, { createContext, useContext, useState, useCallback } from 'react';

const translations = {
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.services': 'Hizmetler',
    'nav.brands': 'Markalar',
    'nav.store': 'Mağazamız',
    'nav.about': 'Hakkımızda',
    'nav.blog': 'Blog',
    'nav.faq': 'SSS',
    'nav.contact': 'İletişim',
    'nav.appointment': 'Randevu Al',
    'cta.explore': 'SAN Optik\'i Keşfedin',
    'cta.appointment': 'Randevu Al',
    'cta.whatsapp': 'Bize Yazın',
    'cta.call': 'Ara',
    'cta.directions': 'Yol Tarifi',
    'cta.details': 'Detaylı Bilgi',
    'cta.allBrands': 'Tüm Markalar',
    'cta.allServices': 'Tüm Hizmetler',
    'cta.readMore': 'Devamını Oku',
    'cta.send': 'Gönder',
    'cta.googleReviews': 'Google\'da Tüm Yorumları Gör',
    'section.services': 'Hizmetlerimiz',
    'section.brands': 'Markalarımız',
    'section.featuredBrands': 'Öne Çıkan Markalar',
    'section.howItWorks': 'Nasıl Çalışır?',
    'section.reviews': 'Müşteri Yorumları',
    'section.googleReviews': 'Google Yorumları',
    'reviews.viaGoogle': 'Google Maps üzerinden',
    'section.faq': 'Sık Sorulan Sorular',
    'section.gallery': 'Mağazamız',
    'section.campaign': 'Kampanyalar',
    'section.blog': 'Göz Sağlığı Blogu',
    'section.about': 'Hakkımızda',
    'section.contact': 'İletişim',
    'hero.subtitle': 'Dünyaca ünlü markalar ve uzman ekibimizle hizmetinizdeyiz.',
    'hero.tagline': 'Gözlüğün Sanatı, SAN Optik\'te Başlar',
    'quick.hours': 'Çalışma Saatleri',
    'quick.location': 'Konum',
    'quick.phone': 'Telefon',
    'campaign.title': 'Yaz Koleksiyonu 2026',
    'campaign.desc': 'Seçili güneş gözlüğü modellerinde özel fırsatlar. Mağazamızı ziyaret edin!',
    'campaign.cta': 'Kampanyayı İncele',
    'appointment.title': 'Randevu Al',
    'appointment.name': 'Ad Soyad',
    'appointment.phone': 'Telefon',
    'appointment.date': 'Tercih Edilen Tarih',
    'appointment.time': 'Tercih Edilen Saat',
    'appointment.service': 'Hizmet',
    'appointment.note': 'Not (isteğe bağlı)',
    'appointment.success': 'Randevu talebiniz WhatsApp üzerinden iletilecek.',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.contactUs': 'Bizimle İletişime Geçin',
    'breadcrumb.home': 'Ana Sayfa',
    'lang.switch': 'EN',
    'stats.brands': 'Marka',
    'stats.experience': 'Yıl Tecrübe',
    'stats.customers': 'Mutlu Müşteri',
    'store.visit': 'Mağazamızı Ziyaret Edin',
    'store.desc': 'Modern teknolojiyle donatılmış mağazamızda sizi ağırlamaktan mutluluk duyarız.',
    'privacy.title': 'Gizlilik Politikası',
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.brands': 'Brands',
    'nav.store': 'Our Store',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.appointment': 'Book Appointment',
    'cta.explore': 'Explore SAN Optik',
    'cta.appointment': 'Book Appointment',
    'cta.whatsapp': 'Message Us',
    'cta.call': 'Call',
    'cta.directions': 'Directions',
    'cta.details': 'Learn More',
    'cta.allBrands': 'All Brands',
    'cta.allServices': 'All Services',
    'cta.readMore': 'Read More',
    'cta.send': 'Send',
    'cta.googleReviews': 'See All Reviews on Google',
    'section.services': 'Our Services',
    'section.brands': 'Our Brands',
    'section.featuredBrands': 'Featured Brands',
    'section.howItWorks': 'How It Works',
    'section.reviews': 'Customer Reviews',
    'section.googleReviews': 'Google Reviews',
    'reviews.viaGoogle': 'From Google Maps',
    'section.faq': 'Frequently Asked Questions',
    'section.gallery': 'Our Store',
    'section.campaign': 'Campaigns',
    'section.blog': 'Eye Health Blog',
    'section.about': 'About Us',
    'section.contact': 'Contact',
    'hero.subtitle': 'World-famous brands and our expert team at your service.',
    'hero.tagline': 'The Art of Eyewear Begins at SAN Optik',
    'quick.hours': 'Opening Hours',
    'quick.location': 'Location',
    'quick.phone': 'Phone',
    'campaign.title': 'Summer Collection 2026',
    'campaign.desc': 'Special offers on selected sunglasses. Visit our store!',
    'campaign.cta': 'View Campaign',
    'appointment.title': 'Book Appointment',
    'appointment.name': 'Full Name',
    'appointment.phone': 'Phone',
    'appointment.date': 'Preferred Date',
    'appointment.time': 'Preferred Time',
    'appointment.service': 'Service',
    'appointment.note': 'Note (optional)',
    'appointment.success': 'Your appointment request will be sent via WhatsApp.',
    'footer.privacy': 'Privacy Policy',
    'footer.rights': 'All rights reserved.',
    'footer.contactUs': 'Contact Us',
    'breadcrumb.home': 'Home',
    'lang.switch': 'TR',
    'stats.brands': 'Brands',
    'stats.experience': 'Years Experience',
    'stats.customers': 'Happy Customers',
    'store.visit': 'Visit Our Store',
    'store.desc': 'We are happy to welcome you at our store equipped with modern technology.',
    'privacy.title': 'Privacy Policy',
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('tr');

  const t = useCallback(
    (key) => translations[lang][key] || key,
    [lang]
  );

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'tr' ? 'en' : 'tr'));
  }, []);

  const isEn = lang === 'en';

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang, isEn }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
