import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Tags } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';
import { getBrandBySlug } from '../data/brands';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';

const collectionLabels = {
  optik: { tr: 'Optik Gözlük', en: 'Optical' },
  gunes: { tr: 'Güneş Gözlüğü', en: 'Sunglasses' },
  klasik: { tr: 'Klasik', en: 'Classic' },
  cocuk: { tr: 'Çocuk', en: 'Kids' },
  spor: { tr: 'Spor', en: 'Sport' },
};

const BrandDetailPage = () => {
  const { slug } = useParams();
  const brand = getBrandBySlug(slug);
  const { t, isEn } = useLanguage();

  usePageTitle(
    brand?.name ?? null,
    brand ? (isEn ? brand.descriptionEn : brand.description) : null
  );

  if (!brand) return <Navigate to="/markalar" replace />;

  return (
    <>
      <Breadcrumb
        items={[
          { label: t('nav.brands'), href: '/markalar' },
          { label: brand.name },
        ]}
      />
      <PageHero title={brand.name} subtitle={isEn ? brand.descriptionEn : brand.description} compact />
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {brand.image && (
              <div className="w-full md:w-64 h-48 bg-gray-50 rounded-2xl flex items-center justify-center p-4 border border-gray-100 flex-shrink-0 overflow-hidden">
                <img
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  className="w-full h-full object-contain"
                  style={{ transform: `scale(${brand.logoScale})` }}
                />
              </div>
            )}
            <div className="flex-1">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {isEn ? brand.descriptionEn : brand.description}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                <div className="bg-emerald-50 rounded-xl p-4">
                  <p className="text-emerald-600 font-medium mb-1">{isEn ? 'Origin' : 'Köken'}</p>
                  <p className="text-gray-800">{brand.origin}</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4">
                  <p className="text-emerald-600 font-medium mb-1">{isEn ? 'Category' : 'Kategori'}</p>
                  <p className="text-gray-800 capitalize">{brand.category}</p>
                </div>
              </div>
              <h2 className="text-lg font-semibold text-emerald-800 mb-3">
                {isEn ? 'Collections' : 'Koleksiyonlar'}
              </h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {brand.collections.map((col) => (
                  <span key={col} className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                    {isEn ? collectionLabels[col]?.en : collectionLabels[col]?.tr || col}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/randevu"
                  className="px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors text-center"
                >
                  {isEn ? `See ${brand.name} in Store` : `${brand.name} Mağazada Gör`}
                </Link>
                <Link
                  to="/markalar"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-emerald-600 text-emerald-700 rounded-full font-semibold hover:bg-emerald-50 transition-colors text-center"
                >
                  <Tags className="w-5 h-5" />
                  {t('cta.allBrands')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandDetailPage;
