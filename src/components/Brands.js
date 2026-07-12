import React from 'react';
import animationVideo1 from '../assets/animations/animation-1.mp4';

// Tüm görselleri dinamik olarak içeri al
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

// Assets klasöründen markaları içe aktar
const brandImages = importAll(require.context('../assets/Brands', false, /\.(png|jpe?g|svg|PNG)$/));

// Marka isimleri (resim dosyaları birebir aynı isimde olmalı, uzantılar da dahil)
const brandNames = [
  'Guess',
  'Rayban',
  'Vogue',
  'Furla',
  'Osse',
  'Mustang',
  'Hawk',
  'BenX',
  'Tom Ford',
  'Police',
  'Lacoste',
  'Fisher Price',
  'Versace',
  'Burberry',
  'Caretta',
  'Goldberry',
  'Miu Miu',
  'Prada',
  'Dolce Gabbana',
  'Persol',
  'Oakley',
  'Humphreys',
  'Titanflex',
  'Fineline',
  'Eschbah',
  'Rococo',
  'Just Cavalli'
];

const findBrandImage = (name) => {
  const normalizedName = name.toLowerCase();
  const match = Object.entries(brandImages).find(([filename]) => {
    const baseName = filename.replace(/\.(png|jpe?g|svg)$/i, '');
    return baseName.toLowerCase() === normalizedName;
  });
  return match ? match[1] : `https://via.placeholder.com/100x60?text=${name}`;
};

const brands = brandNames.map((name) => ({
  name,
  image: findBrandImage(name),
}));

const Brands = () => {
  return (
    <>
      <section className="bg-emerald-500 py-12 px-4 sm:px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          Markalarımız
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden relative h-40 transition transform hover:scale-105 hover:shadow-xl"
            >
              <div className="h-full p-4 flex items-center justify-center">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-auto h-auto max-w-full max-h-full object-contain"
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-emerald-200 bg-opacity-90 py-2 px-3">
                <span className="text-emerald-900 font-semibold text-sm block text-center">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
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
          <source src={animationVideo1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </>
  );
};

export default Brands;
