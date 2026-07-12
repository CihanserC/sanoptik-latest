import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';

const PrivacyPage = () => {
  const { t, isEn } = useLanguage();
  usePageTitle(isEn ? 'Privacy Policy' : 'Gizlilik Politikası');

  return (
    <>
      <Breadcrumb items={[{ label: t('privacy.title') }]} />
      <PageHero title={t('privacy.title')} compact />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 leading-relaxed space-y-6">
          {isEn ? (
            <>
              <p><strong>Last updated:</strong> July 2026</p>
              <p>SAN Optik ("we") respects your privacy. This policy explains how we collect and use personal data when you visit our website or contact us.</p>
              <h2 className="text-xl font-semibold text-emerald-800">Data We Collect</h2>
              <p>When you submit an appointment form or contact us via WhatsApp, we may collect your name, phone number, and appointment preferences.</p>
              <h2 className="text-xl font-semibold text-emerald-800">How We Use Data</h2>
              <p>Your data is used solely to respond to your requests, schedule appointments, and provide our optical services.</p>
              <h2 className="text-xl font-semibold text-emerald-800">Data Sharing</h2>
              <p>We do not sell or share your personal data with third parties except as required by law.</p>
              <h2 className="text-xl font-semibold text-emerald-800">Contact</h2>
              <p>For privacy-related questions, contact us at info@sanoptik.com or +90 534 567 98 08.</p>
            </>
          ) : (
            <>
              <p><strong>Son güncelleme:</strong> Temmuz 2026</p>
              <p>SAN Optik ("biz") gizliliğinize saygı duyar. Bu politika, web sitemizi ziyaret ettiğinizde veya bizimle iletişime geçtiğinizde kişisel verilerinizi nasıl topladığımızı ve kullandığımızı açıklar.</p>
              <h2 className="text-xl font-semibold text-emerald-800">Topladığımız Veriler</h2>
              <p>Randevu formu gönderdiğinizde veya WhatsApp üzerinden iletişime geçtiğinizde adınız, telefon numaranız ve randevu tercihleriniz toplanabilir.</p>
              <h2 className="text-xl font-semibold text-emerald-800">Verilerin Kullanımı</h2>
              <p>Verileriniz yalnızca taleplerinize yanıt vermek, randevu planlamak ve optik hizmetlerimizi sunmak için kullanılır.</p>
              <h2 className="text-xl font-semibold text-emerald-800">Veri Paylaşımı</h2>
              <p>Kişisel verilerinizi yasal zorunluluklar dışında üçüncü taraflarla satmıyor veya paylaşmıyoruz.</p>
              <h2 className="text-xl font-semibold text-emerald-800">İletişim</h2>
              <p>Gizlilikle ilgili sorularınız için info@sanoptik.com veya +90 534 567 98 08 numarasından bize ulaşabilirsiniz.</p>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
