import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import animationVideo4 from '../assets/animations/animation-4.mp4';
import { Heart, Award, Users, ThumbsUp } from 'lucide-react'; // Import icons

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white">
      <div className="relative min-h-screen flex flex-col md:flex-row">
        {/* Video Container - Left Side */}
        <div className="md:w-1/2 h-[500px] md:h-screen relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source src={animationVideo4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Container - Right Side */}
        <div className="md:w-1/2 p-8 md:p-16">
          <div
            className="bg-white rounded-3xl shadow-lg p-8 max-w-2xl mx-auto mt-0"
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
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Dünya'nın önde gelen markalarıyla çalışarak, en son teknoloji ve modayı sizlerle buluşturuyoruz.
              Göz sağlığınız ve görsel konforunuz bizim önceliğimizdir.
            </p>

            {/* Icons Section */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-emerald-800 mb-2">SAĞLIĞINIZ ÖNEMLİ</h4>
                <p className="text-sm text-gray-600">
                  Yaptığımız işin ciddiyetinin farkındayız. Sağlığınızı düşünüyoruz.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-emerald-800 mb-2">ORİJİNAL ÜRÜN</h4>
                <p className="text-sm text-gray-600">
                  Dünyaca ünlü markalarla çalışıyoruz. Orijinal olmayan ürün satmıyoruz.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-emerald-800 mb-2">MÜŞTERİ MEMNUNİYETİ</h4>
                <p className="text-sm text-gray-600">
                  Tecrübemizle müşterilerimizi iyi tanıyor, memnuniyeti ön planda tutuyoruz.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
                  <ThumbsUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-emerald-800 mb-2">İYİ GÖRÜN</h4>
                <p className="text-sm text-gray-600">
                  Kaliteye uygun fiyatlarla sahip olun. Hem iyi görün hem de iyi görün!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
