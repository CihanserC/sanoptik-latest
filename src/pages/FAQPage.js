import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import FAQ from '../components/FAQ';

const FAQPage = () => {
  const { t, isEn } = useLanguage();
  usePageTitle(
    isEn ? 'FAQ' : 'Sık Sorulan Sorular',
    isEn ? 'Frequently asked questions about SAN Optik services.' : 'SAN Optik hizmetleri hakkında sık sorulan sorular.'
  );

  return (
    <>
      <Breadcrumb items={[{ label: t('nav.faq') }]} />
      <PageHero title={t('section.faq')} />
      <FAQ showTitle={false} />
    </>
  );
};

export default FAQPage;
