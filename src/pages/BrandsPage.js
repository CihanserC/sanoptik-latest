import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import BrandsGrid from '../components/BrandsGrid';
import animationVideo1 from '../assets/animations/animation-1.mp4';

const BrandsPage = () => {
  const { t, isEn } = useLanguage();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  usePageTitle(
    isEn ? 'Brands' : 'Markalar',
    isEn ? '27+ world-famous eyewear brands at SAN Optik, Izmir.' : 'SAN Optik\'te 27+ dünyaca ünlü gözlük markası.'
  );

  return (
    <>
      <Breadcrumb items={[{ label: t('nav.brands') }]} />
      <PageHero
        title={t('section.brands')}
        subtitle={isEn ? 'Original products from world-renowned brands.' : 'Dünyaca ünlü markaların orijinal ürünleri.'}
      />
      <div className="bg-emerald-500 py-12 px-4 sm:px-6 lg:px-20">
        <BrandsGrid showTitle={false} />
      </div>
      {!prefersReducedMotion && (
        <section className="relative bg-white w-full" aria-hidden="true">
          <video autoPlay loop muted playsInline className="w-full h-auto object-contain">
            <source src={animationVideo1} type="video/mp4" />
          </video>
        </section>
      )}
    </>
  );
};

export default BrandsPage;
