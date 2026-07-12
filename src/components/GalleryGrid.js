import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Store } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const importAll = (r) => {
  const images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

const galleryImages = importAll(require.context('../assets/Gallery', false, /\.(png|jpe?g)$/));

const galleryItems = Object.entries(galleryImages).map(([filename, src], i) => ({
  id: i + 1,
  src,
  alt: `SAN Optik mağaza görseli ${i + 1}`,
}));

const GalleryGrid = ({ limit, showTitle = true }) => {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = limit ? galleryItems.slice(0, limit) : galleryItems;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReducedMotion || items.length <= 1) return undefined;

    const timer = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % items.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [items.length, prefersReducedMotion]);

  if (items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <section className={showTitle ? 'py-16 bg-white' : ''} id="magaza">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <>
            <h2 className="text-3xl font-bold text-center text-emerald-800 mb-4">
              {t('section.gallery')}
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              {t('store.desc')}
            </p>
          </>
        )}

        <div className="relative aspect-[16/10] md:aspect-[21/9] rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
          <AnimatePresence mode="wait">
            <motion.button
              key={currentItem.id}
              type="button"
              initial={prefersReducedMotion ? false : { opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, x: -60 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              onClick={() => setLightbox(currentItem)}
              className="absolute inset-0 w-full h-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset"
              aria-label={currentItem.alt}
            >
              <img
                src={currentItem.src}
                alt={currentItem.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.button>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Görsel ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex ? 'border-emerald-500 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img src={item.src} alt="" className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>

        {limit && (
          <div className="text-center mt-10">
            <Link
              to="/magazamiz"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors font-medium"
            >
              <Store className="w-4 h-4" />
              {t('store.visit')}
            </Link>
          </div>
        )}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Görsel önizleme"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white hover:text-emerald-300 p-2"
            aria-label="Kapat"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GalleryGrid;
