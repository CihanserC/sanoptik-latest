import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import AppointmentForm from '../components/AppointmentForm';

const AppointmentPage = () => {
  const { t, isEn } = useLanguage();
  usePageTitle(
    isEn ? 'Book Appointment' : 'Randevu Al',
    isEn ? 'Book an appointment at SAN Optik.' : 'SAN Optik\'te randevu alın.'
  );

  return (
    <>
      <Breadcrumb items={[{ label: t('appointment.title') }]} />
      <PageHero
        title={t('appointment.title')}
        subtitle={isEn ? 'Fill out the form and send your request via WhatsApp.' : 'Formu doldurun, talebinizi WhatsApp üzerinden iletin.'}
      />
      <section className="py-10 bg-gray-50">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
          <AppointmentForm />
        </div>
      </section>
    </>
  );
};

export default AppointmentPage;
