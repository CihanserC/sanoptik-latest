import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Check, LayoutGrid } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';
import { getServiceBySlug } from '../data/services';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const { t, isEn } = useLanguage();

  usePageTitle(
    service ? (isEn ? service.titleEn : service.title) : null,
    service ? (isEn ? service.shortEn : service.short) : null
  );

  if (!service) return <Navigate to="/hizmetler" replace />;

  const Icon = service.icon;

  return (
    <>
      <Breadcrumb
        items={[
          { label: t('nav.services'), href: '/hizmetler' },
          { label: isEn ? service.titleEn : service.title },
        ]}
      />
      <PageHero title={isEn ? service.titleEn : service.title} subtitle={isEn ? service.shortEn : service.short} compact />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center">
              <Icon className="w-8 h-8 text-emerald-700" />
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {isEn ? service.descriptionEn : service.description}
          </p>
          <h2 className="text-xl font-semibold text-emerald-800 mb-4">
            {isEn ? 'Features' : 'Özellikler'}
          </h2>
          <ul className="space-y-3 mb-10">
            {(isEn ? service.featuresEn : service.features).map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/randevu"
              className="px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors text-center"
            >
              {t('cta.appointment')}
            </Link>
            <Link
              to="/hizmetler"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-emerald-600 text-emerald-700 rounded-full font-semibold hover:bg-emerald-50 transition-colors text-center"
            >
              <LayoutGrid className="w-5 h-5" />
              {t('cta.allServices')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
