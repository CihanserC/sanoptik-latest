import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="bg-emerald-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">İletişim</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Contact Info */}
            <div className="md:w-2/5">
              <h3 className="text-xl font-semibold mb-4">Bizimle İletişime Geçin</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span role="img" aria-label="location">📍</span>
                  <span className="text-sm">Adalet, 1586/13. Sk. No:1C, 35530 Bayraklı/İzmir</span>
                </div>
                <div className="flex items-center gap-2">
                  <span role="img" aria-label="phone">📞</span>
                  <span className="text-sm">+90 534 567 98 08</span>
                </div>
                <div className="flex items-center gap-2">
                  <span role="img" aria-label="clock">🕒</span>
                  <span className="text-sm">Pazartesi - Cumartesi: 09:00 - 19:00</span>
                </div>
                <a
                  href="https://www.instagram.com/san_optikk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-emerald-200 transition-colors"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                    alt="Instagram"
                    className="w-5 h-5"
                  />
                  <span className="text-sm font-semibold">San Optik Instagram</span>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="md:w-3/5 h-[300px]">
              <iframe
                title="San Optik Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.812345!2d27.1775051!3d38.4526128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b96343fe815a13%3A0xd44ef6d86a199e22!2sSan%20Optik!5e0!3m2!1str!2str!4v1735848291234!5m2!1str!2str"
                className="w-full h-full rounded-lg shadow-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-emerald-800 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <span className="text-xs">&copy; {currentYear} SAN Optik. Tüm hakları saklıdır.</span>
          <span className="text-xs">Gizlilik Politikası</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;