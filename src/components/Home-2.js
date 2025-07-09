import React from 'react';
import glassesImage from '../assets/Glasses2.png';
import animationVideo2 from '../assets/animations/animation-2.mp4';

const HomeSection = () => {
  return (
    <div className="relative">
      {/* Writings Section */}
      <section className="relative bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center rounded-2xl shadow-md">
          <h1 className="text-3xl sm:text-4xl font-bold text-emerald-700 mb-6 text-left w-full">
            Hakkımızda
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-8 w-full">
            SAN Optik olarak, müşterilerimize en kaliteli göz sağlığı çözümlerini sunmayı hedefliyoruz.
            Uzun yıllara dayanan tecrübemiz ve profesyonel ekibimizle, her müşterimize özel hizmet sunuyoruz.
          </p>
          <h2 className="text-2xl font-semibold text-emerald-600 mb-4 w-full">
            Gözlükte Güven, Şıklıkta Öncü
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-10 w-full">
            Dünya'nın önde gelen markalarıyla çalışarak, en son teknoloji ve modayı sizlerle buluşturuyoruz.
            Göz sağlığınız ve görsel konforunuz bizim önceliğimizdir.
          </p>
          {/* Example features row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mt-4">
            <div className="flex flex-col items-center">
              <div className="bg-emerald-800 text-white rounded-lg p-4 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z" />
                </svg>
              </div>
              <span className="font-bold text-emerald-800 mb-1">SAĞLIĞINIZ ÖNEMLİ</span>
              <span className="text-gray-600 text-center text-sm">Yaptığımız işin ciddiyetinin farkındayız. Sağlığınızı düşünüyoruz.</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-emerald-800 text-white rounded-lg p-4 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a5 5 0 00-10 0v2a5 5 0 0010 0zM12 17v2m0 0h-2m2 0h2" />
                </svg>
              </div>
              <span className="font-bold text-emerald-800 mb-1">ORJİNAL ÜRÜN</span>
              <span className="text-gray-600 text-center text-sm">Dünyaca ünlü markalarla çalışıyoruz. Orijinal olmayan ürün satmıyoruz.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative bg-white flex justify-center py-10">
        <img
          src={glassesImage}
          alt="Gözlük görseli"
          className="w-full max-w-3xl h-auto object-contain rounded-xl shadow-lg"
        />
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
