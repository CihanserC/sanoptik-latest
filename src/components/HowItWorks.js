import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { howItWorksSteps } from '../data/services';

const HowItWorks = () => {
  const { t, isEn } = useLanguage();

  return (
    <section className="py-16 bg-emerald-50" id="nasil-calisir">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-emerald-800 mb-12">
          {t('section.howItWorks')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {howItWorksSteps.map((step) => (
            <div key={step.step} className="relative text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                {isEn ? step.titleEn : step.title}
              </h3>
              <p className="text-sm text-gray-600">
                {isEn ? step.descEn : step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
