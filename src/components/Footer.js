import React from 'react';
import { Link } from 'react-router-dom';
import { SITE } from '../data/site';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, isEn } = useLanguage();

  return (
    <footer className="bg-emerald-900">
      <div className="text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">{t('section.contact')}</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/5">
              <h3 className="text-xl font-semibold mb-4">{t('footer.contactUs')}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span role="img" aria-label="location">📍</span>
                  <span className="text-sm">{SITE.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span role="img" aria-label="phone">📞</span>
                  <a href={`tel:${SITE.phoneRaw}`} className="text-sm hover:text-emerald-200 transition-colors">
                    {SITE.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span role="img" aria-label="clock">🕒</span>
                  <span className="text-sm">{isEn ? SITE.hoursEn : SITE.hours}</span>
                </div>
                <a
                  href={SITE.instagram}
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
                <Link
                  to="/randevu"
                  className="inline-block mt-2 px-5 py-2 bg-emerald-600 rounded-full text-sm font-semibold hover:bg-emerald-500 transition-colors"
                >
                  {t('nav.appointment')}
                </Link>
              </div>
            </div>

            <div className="md:w-3/5 h-[300px]">
              <iframe
                title="San Optik Konum Haritası"
                src={SITE.mapsEmbed}
                className="w-full h-full rounded-lg shadow-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="text-xs text-white">
            &copy; {currentYear} SAN Optik. {t('footer.rights')}
          </span>
          <Link to="/gizlilik" className="text-xs text-white hover:text-emerald-200 transition-colors">
            {t('footer.privacy')}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
