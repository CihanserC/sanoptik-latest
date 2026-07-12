import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import ServicesGrid from '../components/ServicesGrid';

const ServicesPage = () => {
  const { t, isEn } = useLanguage();
  usePageTitle(
    isEn ? 'Services' : 'Hizmetler',
    isEn ? 'Eye exam, prescription glasses, sunglasses and more at SAN Optik.' : 'Göz muayenesi, numaralı gözlük, güneş gözlüğü ve daha fazlası SAN Optik\'te.'
  );

  return (
    <>
      <Breadcrumb items={[{ label: t('nav.services') }]} />
      <PageHero title={t('section.services')} subtitle={isEn ? 'Professional eyewear services for every need.' : 'Her ihtiyaca yönelik profesyonel optik hizmetler.'} />
      <ServicesGrid showTitle={false} />
    </>
  );
};

export default ServicesPage;
