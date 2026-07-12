import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SITE } from '../data/site';

const StatCounters = () => {
  const { t } = useLanguage();

  const stats = [
    { value: SITE.stats.brands, label: t('stats.brands') },
    { value: SITE.stats.experience, label: t('stats.experience') },
    { value: SITE.stats.customers, label: t('stats.customers') },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-3xl sm:text-4xl font-bold text-emerald-600">{stat.value}</p>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatCounters;
