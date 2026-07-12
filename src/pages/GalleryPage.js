import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import GalleryGrid from '../components/GalleryGrid';

const GalleryPage = () => {
  const { t, isEn } = useLanguage();
  usePageTitle(
    isEn ? 'Our Store' : 'Mağazamız',
    isEn ? 'Visit SAN Optik store in Bayraklı, Izmir.' : 'İzmir Bayraklı SAN Optik mağazamızı ziyaret edin.'
  );

  return (
    <>
      <Breadcrumb items={[{ label: t('nav.store') }]} />
      <PageHero title={t('section.gallery')} subtitle={t('store.desc')} />
      <GalleryGrid showTitle={false} />
    </>
  );
};

export default GalleryPage;
