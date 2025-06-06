import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <span className="text-sm">&copy; {currentYear} SAN Optik. Tüm hakları saklıdır.</span>
        <span className="text-sm">
          Gizlilik Politikası
        </span>
      </div>
    </footer>
  );
};

export default Footer;