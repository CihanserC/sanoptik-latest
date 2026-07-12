import React from 'react';
import { SITE } from '../data/site';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { buildQuickWhatsAppUrl } from '../utils/whatsapp';

const StickyMobileCTA = () => {
  const { t, isEn } = useLanguage();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] safe-bottom">
      <div className="grid grid-cols-3 divide-x divide-gray-200">
        <a
          href={`tel:${SITE.phoneRaw}`}
          className="flex flex-col items-center justify-center py-3 text-emerald-700 hover:bg-emerald-50 transition-colors focus:outline-none focus:bg-emerald-50"
          aria-label={t('cta.call')}
        >
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">{t('cta.call')}</span>
        </a>
        <a
          href={buildQuickWhatsAppUrl(isEn)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 text-green-600 hover:bg-green-50 transition-colors focus:outline-none focus:bg-green-50"
          aria-label={t('cta.whatsapp')}
        >
          <MessageCircle className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
        <a
          href={SITE.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 text-emerald-700 hover:bg-emerald-50 transition-colors focus:outline-none focus:bg-emerald-50"
          aria-label={t('cta.directions')}
        >
          <MapPin className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">{t('cta.directions')}</span>
        </a>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
