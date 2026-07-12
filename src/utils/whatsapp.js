import { SITE } from '../data/site';

export const buildWhatsAppUrl = (message) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE.phoneRaw}?text=${encoded}`;
};

export const buildQuickContactMessage = (isEn) => {
  if (isEn) {
    return 'Hello! I would like to get information about SAN Optik or book an appointment. Could you help me?';
  }
  return 'Merhabalar! SAN Optik hakkında bilgi almak veya randevu oluşturmak istiyorum. Yardımcı olabilir misiniz?';
};

export const buildQuickWhatsAppUrl = (isEn) =>
  buildWhatsAppUrl(buildQuickContactMessage(isEn));

export const buildAppointmentMessage = ({ name, phone, date, time, service, note }, isEn) => {
  if (isEn) {
    return `Hello SAN Optik, I would like to book an appointment.\n\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nService: ${service}${note ? `\nNote: ${note}` : ''}`;
  }
  return `Merhaba SAN Optik, randevu almak istiyorum.\n\nAd Soyad: ${name}\nTelefon: ${phone}\nTarih: ${date}\nSaat: ${time}\nHizmet: ${service}${note ? `\nNot: ${note}` : ''}`;
};
