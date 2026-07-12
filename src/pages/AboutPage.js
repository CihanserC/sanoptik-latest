import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import animationVideo4 from '../assets/animations/animation-4.mp4';
import { Heart, Award, Users, ThumbsUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';

const AboutPage = () => {
  const { t, isEn } = useLanguage();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  usePageTitle(
    isEn ? 'About Us' : 'Hakkımızda',
    isEn ? 'Learn about SAN Optik - your trusted eyewear store in Izmir.' : 'SAN Optik hakkında - İzmir\'in güvenilir optik mağazası.'
  );

  useEffect(() => {
    if (!prefersReducedMotion) AOS.init({ duration: 1000 });
  }, [prefersReducedMotion]);

  const values = [
    { icon: Heart, title: isEn ? 'YOUR HEALTH MATTERS' : 'SAĞLIĞINIZ ÖNEMLİ', desc: isEn ? 'We take our work seriously and care about your health.' : 'Yaptığımız işin ciddiyetinin farkındayız. Sağlığınızı düşünüyoruz.' },
    { icon: Award, title: isEn ? 'ORIGINAL PRODUCTS' : 'ORJİNAL ÜRÜN', desc: isEn ? 'We work with world-famous brands. No counterfeit products.' : 'Dünyaca ünlü markalarla çalışıyoruz. Orijinal olmayan ürün satmıyoruz.' },
    { icon: Users, title: isEn ? 'CUSTOMER SATISFACTION' : 'MÜŞTERİ MEMNUNİYETİ', desc: isEn ? 'We know our customers well and prioritize satisfaction.' : 'Tecrübemizle müşterilerimizi iyi tanıyor, memnuniyeti ön planda tutuyoruz.' },
    { icon: ThumbsUp, title: isEn ? 'LOOK GOOD' : 'İYİ GÖRÜN', desc: isEn ? 'Quality at fair prices. Look good and see well!' : 'Kaliteye uygun fiyatlarla sahip olun. Hem iyi görün hem de iyi görün!' },
  ];

  return (
    <>
      <Breadcrumb items={[{ label: t('nav.about') }]} />
      <PageHero title={t('section.about')} />
      <section className="bg-white">
        <div className="relative min-h-screen flex flex-col md:flex-row">
          <div className="md:w-1/2 h-[400px] md:h-auto relative">
            {!prefersReducedMotion ? (
              <video autoPlay loop muted playsInline className="w-full h-full object-cover" aria-label="SAN Optik mağaza videosu">
                <source src={animationVideo4} type="video/mp4" />
              </video>
            ) : (
              <div className="w-full h-full bg-emerald-800" />
            )}
          </div>
          <div className="md:w-1/2 p-8 md:p-16">
            <div className="bg-white rounded-3xl shadow-lg p-8 max-w-2xl mx-auto" data-aos="fade-left">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {isEn
                  ? 'At SAN Optik, we aim to provide our customers with the highest quality eye health solutions. With years of experience and our professional team, we offer personalized service to every customer.'
                  : 'SAN Optik olarak, müşterilerimize en kaliteli göz sağlığı çözümlerini sunmayı hedefliyoruz. Uzun yıllara dayanan tecrübemiz ve profesyonel ekibimizle, her müşterimize özel hizmet sunuyoruz.'}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {isEn
                  ? 'Working with the world\'s leading brands, we bring you the latest technology and fashion. Your eye health and visual comfort are our priority.'
                  : 'Dünya\'nın önde gelen markalarıyla çalışarak, en son teknoloji ve modayı sizlerle buluşturuyoruz. Göz sağlığınız ve görsel konforunuz bizim önceliğimizdir.'}
              </p>
              <div className="grid grid-cols-2 gap-8">
                {values.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-sm font-semibold text-emerald-800 mb-2">{item.title}</h4>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
