import React from 'react';
import glassesImage from '../assets/Glasses2.png';
import animationVideo2 from '../assets/animations/animation-2.mp4';

const HomeSection = () => {
  return (
    <div className="relative">
      {/* Main Section with Background */}
      <section className="relative min-h-screen bg-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={glassesImage}
            alt="Gözlük görseli"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Gözlüğün Sanatı, Sanoptik'te Başlar
            </h1>
            <div className="space-y-6 text-white">
              <p className="text-lg leading-relaxed">
                Sanoptik, kaliteli gözlükleri şıklıkla buluştururken her müşterisine mükemmel bir alışveriş deneyimi sunmayı amaçlar.
                Göz sağlığınızı ön planda tutan optik çözümlerimiz, hem günlük kullanım hem de özel ihtiyaçlara yönelik geniş ürün yelpazemizle hizmetinizde.
              </p>
              <h2 className="text-2xl font-semibold text-emerald-400">
                Gözlükte Güven, Şıklıkta Öncü
              </h2>
              <p className="text-lg leading-relaxed">
                Yurt içi ve yurt dışından özenle seçtiğimiz markalarla, her zevke ve ihtiyaca uygun modelleri Sanoptik güvencesiyle sunuyoruz.
                Sadece bir gözlük değil, size özel bir deneyim yaşatmayı hedefliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Video Section */}
      <section className="relative bg-white w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-contain shadow-2xl"
        >
          <source src={animationVideo2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </div>
  );
};

export default HomeSection;
