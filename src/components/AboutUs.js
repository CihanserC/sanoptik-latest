import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImage from '../assets/about-us.jpg';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-emerald-50">
      <div className="relative min-h-screen flex flex-col md:flex-row">
        {/* Image Container - Left Side */}
        <div className="md:w-1/2 h-[500px] md:h-screen relative">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        {/* Content Container - Right Side */}
        <div className="md:w-1/2 p-8 md:p-16 flex items-center">
          <div
            className="bg-white rounded-3xl shadow-lg p-8 max-w-2xl mx-auto"
            data-aos="fade-left"
          >
            <h2 className="text-3xl font-bold text-emerald-600 mb-6">Hakkımızda</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              SAN Optik olarak, müşterilerimize en kaliteli göz sağlığı çözümlerini sunmayı hedefliyoruz.
              Uzun yıllara dayanan tecrübemiz ve profesyonel ekibimizle, her müşterimize özel hizmet sunuyoruz.
            </p>

            <h3 className="text-2xl font-semibold text-emerald-700 mb-4">
              Gözlükte Güven, Şıklıkta Öncü
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Dünya'nın önde gelen markalarıyla çalışarak, en son teknoloji ve modayı sizlerle buluşturuyoruz.
              Göz sağlığınız ve görsel konforunuz bizim önceliğimizdir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
