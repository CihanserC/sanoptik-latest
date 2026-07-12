import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Breadcrumb = ({ items }) => {
  const { t } = useLanguage();

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center flex-wrap gap-1 text-sm text-gray-500">
          <li>
            <Link to="/" className="hover:text-emerald-600 transition-colors">
              {t('breadcrumb.home')}
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              <ChevronRight className="w-4 h-4 text-gray-300" aria-hidden="true" />
              {item.href ? (
                <Link to={item.href} className="hover:text-emerald-600 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-800 font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
