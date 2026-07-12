import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, LayoutGrid } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { services } from '../data/services';

const ServicesGrid = ({ limit, showTitle = true }) => {
  const { t, isEn } = useLanguage();
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section className={showTitle ? 'py-16 bg-white' : ''} id="hizmetler">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <h2 className="text-3xl font-bold text-center text-emerald-800 mb-10">
            {t('section.services')}
          </h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                to={`/hizmetler/${service.slug}`}
                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
                  <Icon className="w-7 h-7 text-emerald-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {isEn ? service.titleEn : service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {isEn ? service.shortEn : service.short}
                </p>
                <span className="inline-flex items-center gap-1.5 text-emerald-600 font-medium text-sm group-hover:underline">
                  <Eye className="w-4 h-4" />
                  {t('cta.details')}
                </span>
              </Link>
            );
          })}
        </div>
        {limit && (
          <div className="text-center mt-10">
            <Link
              to="/hizmetler"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors font-medium"
            >
              <LayoutGrid className="w-4 h-4" />
              {t('cta.allServices')}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;
