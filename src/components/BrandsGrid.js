import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { brands, featuredBrandSlugs } from '../data/brands';

const BrandsGrid = ({ featuredOnly = false, showTitle = true }) => {
  const { t } = useLanguage();

  const displayBrands = featuredOnly
    ? brands.filter((b) => featuredBrandSlugs.includes(b.slug))
    : brands;

  return (
    <section className={showTitle ? 'bg-emerald-500 py-12 px-4 sm:px-6 lg:px-20' : ''} id="markalar">
      {showTitle && (
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          {featuredOnly ? t('section.featuredBrands') : t('section.brands')}
        </h2>
      )}

      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ${featuredOnly ? 'lg:grid-cols-4' : 'lg:grid-cols-5'} gap-6`}>
        {displayBrands.map((brand) => (
          <Link
            key={brand.slug}
            to={`/markalar/${brand.slug}`}
            className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col h-44 transition transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white"
          >
            <div className="flex-1 flex items-center justify-center px-2 pt-2 pb-1 min-h-0 overflow-hidden">
              {brand.image ? (
                <img
                  src={brand.image}
                  alt={`${brand.name} gözlük markası`}
                  className="w-full h-full object-contain"
                  style={{ transform: `scale(${brand.logoScale})` }}
                  loading="lazy"
                />
              ) : (
                <span className="text-emerald-800 font-bold">{brand.name}</span>
              )}
            </div>
            <div className="bg-emerald-200 bg-opacity-90 py-2 px-3 flex-shrink-0">
              <span className="text-emerald-900 font-semibold text-sm block text-center">
                {brand.name}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {featuredOnly && (
        <div className="text-center mt-10">
          <Link
            to="/markalar"
            className="inline-flex items-center px-6 py-3 bg-white text-emerald-700 rounded-full hover:bg-emerald-50 transition-colors font-medium"
          >
            {t('cta.allBrands')}
          </Link>
        </div>
      )}
    </section>
  );
};

export default BrandsGrid;
