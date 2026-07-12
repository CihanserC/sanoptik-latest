import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import animationVideo2 from '../assets/animations/animation-2.mp4';
import animationVideo3 from '../assets/animations/animation-3.mp4';
import glassesImage from '../assets/Glasses2.png';

const Home = () => {
  const videoRef = useRef(null);

  const handleClick = () => {
    const section2Element = document.getElementById('section2');
    if (section2Element) {
      section2Element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <>
      {/* Section 1 - Hero with Video */}
      <div className="relative w-full h-screen overflow-hidden font-sans bg-emerald-950">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={animationVideo3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-emerald-950/40 z-10" />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-wide"
          >
            SAN OPTİK
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-lg md:text-xl"
          >
            Dünyaca ünlü markalar ve uzman ekibimizle hizmetinizdeyiz.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="mt-12 px-10 py-5 relative from-emerald-400 to-emerald-600 
                     bg-gradient-to-r backdrop-blur-[2px] border border-white/20 
                     rounded-full text-white text-xl font-medium 
                     shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-4 
                     group overflow-hidden transform-gpu"
            onClick={handleClick}
          >
            <span className="relative z-20 group-hover:translate-x-[-4px] transition-transform will-change-transform">
              SAN Optik'i Keşfedin
            </span>
            <motion.div
              className="relative z-20 group-hover:translate-x-[4px] transition-transform will-change-transform"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.div>
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-emerald-600 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </div>
      </div>

      {/* Section 2 - Content with Background Image */}
        <div id="section2" className="relative">
          <section className="relative min-h-screen bg-white">
            <div className="absolute inset-0 z-0">
          <img src={glassesImage} alt="Gözlük görseli" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl"> {/* Increased max width */}
            <div className="space-y-6 text-white">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Gözlüğün Sanatı, SAN Optik'te Başlar
              </h1>
              <p className="text-lg leading-relaxed">
                SAN Optik, kaliteli gözlükleri şıklıkla buluştururken her müşterisine mükemmel bir alışveriş deneyimi sunmayı amaçlar. 
                Göz sağlığınızı ön planda tutan optik çözümlerimiz, hem günlük kullanım hem de özel ihtiyaçlara yönelik geniş ürün yelpazemizle hizmetinizde. 
                Modern teknolojilerle donatılmış mağazamızda, uzman ekibimiz eşliğinde göz sağlığınız için en doğru seçimi yapmanıza yardımcı oluyoruz. 
                Her biri özenle seçilmiş çerçevelerimiz ve kaliteli lenslerimizle, görme konforunuzu maksimum seviyeye çıkarmayı hedefliyoruz.
              </p>

              <h2 className="text-2xl font-semibold text-emerald-400">
                Gözlükte Güven, Şıklıkta Öncü
              </h2>
              <p className="text-lg leading-relaxed">
                Yurt içi ve yurt dışından özenle seçtiğimiz markalarla, her zevke ve ihtiyaca uygun modelleri SAN Optik güvencesiyle sunuyoruz. 
                Sadece bir gözlük değil, size özel bir deneyim yaşatmayı hedefliyoruz. 
                En son moda trendlerini yakından takip ederek, klasikten moderne, sportiften elegantta uzanan geniş bir yelpazede seçenekler sunuyoruz. 
                Deneyimli optisyenlerimiz, yüz hatlarınıza ve tarzınıza en uygun çerçeveyi bulmanızda size rehberlik ederken, 
                son teknoloji ölçüm cihazlarımızla göz sağlığınızı koruma altına alıyoruz. 
                Satış sonrası hizmetlerimiz ve profesyonel destek ekibimizle, memnuniyetinizi sürekli kılmak için çalışıyoruz.
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

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/905345679808"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.042 22l4.917-1.29A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.476 0-2.874-.377-4.08-1.045l-.292-.159-3.026.793.804-2.938-.177-.34A7.957 7.957 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.727-5.919c-.294-.147-1.735-.857-2.003-.954-.268-.097-.463-.145-.657.145-.194.29-.751.954-.921 1.15-.17.195-.34.22-.634.073-.294-.147-1.241-.457-2.363-1.456-.873-.778-1.462-1.739-1.632-2.033-.17-.294-.018-.453.128-.6.13-.13.294-.34.44-.51.147-.17.196-.292.294-.487.098-.195.049-.366-.024-.512-.073-.146-.657-1.583-.901-2.169-.244-.585-.487-.487-.657-.487-.17 0-.366-.024-.56-.024-.194 0-.51.073-.778.366-.268.293-1.022.954-1.022 2.325 0 1.371 1.022 2.742 1.168 2.937.146.195 2.026 3.079 4.91 4.318.685.293 1.22.469 1.635.603.687.219 1.314.19 1.803.115.55-.073 1.755-.706 2.003-1.389.248-.683.248-1.27.173-1.39-.073-.122-.27-.195-.563-.342z" />
        </svg>
        <span className="absolute right-16 bg-white text-green-600 px-4 py-2 rounded-lg font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Bize Yazın
        </span>
      </a>
    </>
  );
};

export default Home;