import React from 'react';

const PageHero = ({ title, subtitle, compact }) => (
  <section
    className={`relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 text-white ${
      compact ? 'pt-24 pb-8' : 'pt-28 pb-10'
    }`}
  >
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white,transparent_50%)]" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
      {subtitle && <p className="text-lg text-emerald-100 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;
