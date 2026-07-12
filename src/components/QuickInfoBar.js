import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { SITE } from '../data/site';
import { useLanguage } from '../context/LanguageContext';

const QuickInfoBar = () => {
  const { t, isEn } = useLanguage();

  return (
    <section className="bg-white text-gray-800 py-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <div>
              <p className="text-emerald-600 text-xs font-medium uppercase">{t('quick.location')}</p>
              <p className="text-sm text-gray-700">{SITE.address}</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <div>
              <p className="text-emerald-600 text-xs font-medium uppercase">{t('quick.hours')}</p>
              <p className="text-sm text-gray-700">{isEn ? SITE.hoursEn : SITE.hours}</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <div>
              <p className="text-emerald-600 text-xs font-medium uppercase">{t('quick.phone')}</p>
              <a href={`tel:${SITE.phoneRaw}`} className="text-sm text-gray-700 hover:text-emerald-600 transition-colors">
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickInfoBar;
