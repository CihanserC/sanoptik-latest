import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { services } from '../data/services';
import { buildAppointmentMessage, buildWhatsAppUrl } from '../utils/whatsapp';

const OPEN_HOUR = 9;
const CLOSE_HOUR = 19;
const MINUTE_INTERVALS = ['00', '30'];

const HOURS = Array.from({ length: CLOSE_HOUR - OPEN_HOUR + 1 }, (_, i) =>
  String(OPEN_HOUR + i).padStart(2, '0')
);

const getMinutesForHour = (hour) => (hour === '19' ? ['00', '30'] : MINUTE_INTERVALS);

const getTodayDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const ChevronLeft = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const TimeStepper = ({ value, onStep, ariaLabel }) => (
  <div className="flex items-center h-10 border border-gray-200 rounded-lg bg-white overflow-hidden">
    <button
      type="button"
      onClick={() => onStep(-1)}
      aria-label={`${ariaLabel} decrease`}
      className="h-full px-2 flex items-center justify-center text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
    >
      <ChevronLeft />
    </button>
    <span
      aria-live="polite"
      className="w-9 text-center text-base font-semibold text-emerald-700 tabular-nums select-none"
    >
      {value}
    </span>
    <button
      type="button"
      onClick={() => onStep(1)}
      aria-label={`${ariaLabel} increase`}
      className="h-full px-2 flex items-center justify-center text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
    >
      <ChevronRight />
    </button>
  </div>
);

const AppointmentForm = () => {
  const { t, isEn } = useLanguage();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: getTodayDate(),
    time: '09:00',
    service: '',
    note: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const defaultHour = String(OPEN_HOUR).padStart(2, '0');
  const [selectedHour = defaultHour, selectedMinute = '00'] = form.time
    ? form.time.split(':')
    : [defaultHour, '00'];

  const availableMinutes = getMinutesForHour(selectedHour);
  const resolvedMinute = availableMinutes.includes(selectedMinute) ? selectedMinute : availableMinutes[0];

  const handleHourChange = (hour) => {
    const minutes = getMinutesForHour(hour);
    const minute = minutes.includes(resolvedMinute) ? resolvedMinute : minutes[0];
    setForm({ ...form, time: `${hour}:${minute}` });
  };

  const handleHourStep = (direction) => {
    const hourIdx = HOURS.indexOf(selectedHour);
    const nextHourIdx = hourIdx + direction;
    if (nextHourIdx < 0 || nextHourIdx >= HOURS.length) return;
    handleHourChange(HOURS[nextHourIdx]);
  };

  const handleMinuteStep = (direction) => {
    const hourIdx = HOURS.indexOf(selectedHour);
    const minutes = getMinutesForHour(selectedHour);
    const minIdx = minutes.indexOf(resolvedMinute);
    const nextMinIdx = minIdx + direction;

    if (nextMinIdx >= minutes.length) {
      if (hourIdx < HOURS.length - 1) {
        const nextHour = HOURS[hourIdx + 1];
        const nextMinutes = getMinutesForHour(nextHour);
        setForm({ ...form, time: `${nextHour}:${nextMinutes[0]}` });
      }
      return;
    }

    if (nextMinIdx < 0) {
      if (hourIdx > 0) {
        const prevHour = HOURS[hourIdx - 1];
        const prevMinutes = getMinutesForHour(prevHour);
        setForm({ ...form, time: `${prevHour}:${prevMinutes[prevMinutes.length - 1]}` });
      }
      return;
    }

    setForm({ ...form, time: `${selectedHour}:${minutes[nextMinIdx]}` });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = buildAppointmentMessage(form, isEn);
    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-5 md:p-6 space-y-3.5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          {t('appointment.name')} *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          {t('appointment.phone')} *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:items-end">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            {t('appointment.date')} *
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            value={form.date}
            onChange={handleChange}
            className="w-full h-10 px-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
          />
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-1">
            {t('appointment.time')} *
          </span>
          <input type="hidden" name="time" value={form.time} required />
          <div className="flex items-center gap-1.5 h-10">
            <TimeStepper
              value={selectedHour}
              onStep={handleHourStep}
              ariaLabel={isEn ? 'Hour' : 'Saat'}
            />
            <span className="text-gray-500 font-semibold text-base select-none">:</span>
            <TimeStepper
              value={resolvedMinute}
              onStep={handleMinuteStep}
              ariaLabel={isEn ? 'Minute' : 'Dakika'}
            />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
          {t('appointment.service')} *
        </label>
        <select
          id="service"
          name="service"
          required
          value={form.service}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white"
        >
          <option value="">{isEn ? 'Select a service' : 'Hizmet seçin'}</option>
          {services.map((s) => (
            <option key={s.slug} value={isEn ? s.titleEn : s.title}>
              {isEn ? s.titleEn : s.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="note" className="block text-sm font-medium text-gray-700 mb-1">
          {t('appointment.note')}
        </label>
        <textarea
          id="note"
          name="note"
          rows={2}
          value={form.note}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none resize-none"
        />
      </div>
      <p className="text-xs text-gray-500">{t('appointment.success')}</p>
      <button
        type="submit"
        className="w-full py-2.5 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        {t('cta.send')}
      </button>
    </form>
  );
};

export default AppointmentForm;
