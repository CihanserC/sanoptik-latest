import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';
import { SITE } from '../data/site';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import AppointmentForm from '../components/AppointmentForm';
import GoogleReviews from '../components/GoogleReviews';

const ContactPage = () => {
  const { t, isEn } = useLanguage();
  usePageTitle(
    isEn ? 'Contact' : 'İletişim',
    isEn ? 'Contact SAN Optik in Bayraklı, Izmir.' : 'İzmir Bayraklı SAN Optik iletişim bilgileri.'
  );

  return (
    <>
      <Breadcrumb items={[{ label: t('nav.contact') }]} />
      <PageHero title={t('section.contact')} subtitle={SITE.address} />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">{t('footer.contactUs')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-700">
              <p><strong>{isEn ? 'Address' : 'Adres'}:</strong> {SITE.address}</p>
              <p>
                <strong>{isEn ? 'Phone' : 'Telefon'}:</strong>{' '}
                <a href={`tel:${SITE.phoneRaw}`} className="text-emerald-600 hover:underline">{SITE.phone}</a>
              </p>
              <p><strong>{isEn ? 'Hours' : 'Çalışma Saatleri'}:</strong> {isEn ? SITE.hoursEn : SITE.hours}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 lg:items-stretch">
            <div className="hidden lg:block" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-emerald-800">{t('appointment.title')}</h2>

            <div className="min-h-[420px] lg:min-h-0 h-full rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="San Optik Konum"
                src={SITE.mapsEmbed}
                className="w-full h-full min-h-[420px] lg:min-h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <AppointmentForm />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GoogleReviews limit={3} variant="light" />
        </div>
      </section>
    </>
  );
};

export default ContactPage;
