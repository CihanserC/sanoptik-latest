import React from 'react';
import { Link } from 'react-router-dom';
import { Sun } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CampaignBanner = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" id="kampanya">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Sun className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{t('campaign.title')}</h2>
              <p className="text-amber-100 mt-1">{t('campaign.desc')}</p>
            </div>
          </div>
          <Link
            to="/markalar"
            className="px-8 py-3 bg-white text-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-colors whitespace-nowrap"
          >
            {t('campaign.cta')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CampaignBanner;
