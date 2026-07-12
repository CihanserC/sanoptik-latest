import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Info } from 'lucide-react';
import { motion } from 'framer-motion';
import animationVideo2 from '../assets/animations/animation-2.mp4';
import animationVideo3 from '../assets/animations/animation-3.mp4';
import glassesImage from '../assets/Glasses2.png';
import { useLanguage } from '../context/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';
import QuickInfoBar from '../components/QuickInfoBar';
import ServicesGrid from '../components/ServicesGrid';
import BrandsGrid from '../components/BrandsGrid';
import HowItWorks from '../components/HowItWorks';
import ReviewsSection from '../components/ReviewsSection';
import GalleryGrid from '../components/GalleryGrid';
import BlogPreview from '../components/BlogPreview';
import FAQ from '../components/FAQ';

const HomePage = () => {
  const videoRef = useRef(null);
  const { t, isEn } = useLanguage();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  usePageTitle(
    null,
    isEn
      ? 'SAN Optik - Eyewear store in Bayraklı, Izmir. World-famous brands, expert team.'
      : 'SAN Optik - İzmir Bayraklı gözlük ve lens mağazası. Dünyaca ünlü markalar, uzman ekip.'
  );

  useEffect(() => {
    if (videoRef.current && !prefersReducedMotion) {
      videoRef.current.playbackRate = 0.5;
    }
  }, [prefersReducedMotion]);

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen overflow-hidden font-sans bg-emerald-950">
        {!prefersReducedMotion ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            aria-label="SAN Optik tanıtım videosu"
          >
            <source src={animationVideo3} type="video/mp4" />
          </video>
        ) : (
          <img src={glassesImage} alt="" className="absolute inset-0 w-full h-full object-cover z-0" aria-hidden="true" />
        )}
        <div className="absolute inset-0 bg-emerald-950/40 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-sans text-5xl md:text-7xl font-bold tracking-tight"
          >
            SAN OPTİK
          </motion.h1>
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-lg md:text-xl max-w-2xl"
          >
            {t('hero.subtitle')}
          </motion.p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              to="/hizmetler"
              className="px-10 py-5 bg-gradient-to-r from-emerald-400 to-emerald-600 border border-white/20 rounded-full text-white text-xl font-medium shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105 transition-transform"
            >
              {t('cta.explore')}
            </Link>
            <Link
              to="/randevu"
              className="px-10 py-5 bg-white/10 backdrop-blur border border-white/30 rounded-full text-white text-xl font-medium hover:bg-white/20 transition-colors"
            >
              {t('cta.appointment')}
            </Link>
          </div>
        </div>
      </section>

      <QuickInfoBar />

      {/* Intro */}
      <section className="relative min-h-[60vh] bg-white">
        <div className="absolute inset-0 z-0">
          <img src={glassesImage} alt="Gözlük koleksiyonu" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {t('hero.tagline')}
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              {isEn
                ? 'SAN Optik combines quality eyewear with style, offering a perfect shopping experience. With modern technology and our expert team, we help you make the right choice for your eye health.'
                : 'San optik, kaliteli gözlükleri şıklıkla buluştururken her müşterisine mükemmel bir alışveriş deneyimi sunmayı amaçlar. Modern teknolojilerle donatılmış mağazamızda uzman ekibimiz eşliğinde en doğru seçimi yapmanıza yardımcı oluyoruz.'}
            </p>
            <Link to="/hakkimizda" className="inline-flex items-center gap-2 text-emerald-300 font-semibold hover:text-white transition-colors">
              <Info className="w-4 h-4" />
              {t('cta.details')}
            </Link>
          </div>
        </div>
      </section>

      {!prefersReducedMotion && (
        <section className="relative bg-white w-full" aria-hidden="true">
          <video autoPlay loop muted playsInline className="w-full h-auto object-contain">
            <source src={animationVideo2} type="video/mp4" />
          </video>
        </section>
      )}

      <ServicesGrid limit={6} />
      <div className="bg-emerald-500 py-12 px-4 sm:px-6 lg:px-20">
        <BrandsGrid featuredOnly showTitle />
      </div>
      <HowItWorks />
      <ReviewsSection />
      <GalleryGrid limit={4} />
      <BlogPreview limit={3} />
      <FAQ limit={4} />
    </>
  );
};

export default HomePage;
