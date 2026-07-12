import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { faqItems } from '../data/faq';

const FAQ = ({ limit, showTitle = true }) => {
  const { t, isEn } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);
  const items = limit ? faqItems.slice(0, limit) : faqItems;

  return (
    <section className={showTitle ? 'py-16 bg-gray-50' : 'pt-12 pb-16 bg-white'} id="sss">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <h2 className="text-3xl font-bold text-center text-emerald-800 mb-10">
            {t('section.faq')}
          </h2>
        )}
        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-gray-800 hover:bg-emerald-50 transition-colors focus:outline-none focus:bg-emerald-50"
                  aria-expanded={isOpen}
                >
                  <span>{isEn ? item.questionEn : item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-600 flex-shrink-0 ml-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-gray-600 leading-relaxed">
                    {isEn ? item.answerEn : item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {limit && (
          <div className="text-center mt-8">
            <Link
              to="/sss"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors font-medium"
            >
              <HelpCircle className="w-4 h-4" />
              {t('section.faq')}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
