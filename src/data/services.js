import { Eye, Glasses, Sun, Layers, ScanFace, Wrench } from 'lucide-react';

export const services = [
  {
    slug: 'goz-muayenesi',
    icon: Eye,
    title: 'Göz Muayenesi',
    titleEn: 'Eye Examination',
    short: 'Uzman optisyenlerimizle detaylı göz muayenesi ve reçete hazırlama.',
    shortEn: 'Detailed eye examination and prescription preparation with our expert opticians.',
    description:
      'Mağazamızda son teknoloji ölçüm cihazlarıyla göz muayenesi yapıyoruz. Uzman optisyenlerimiz, görme kusurlarınızı tespit ederek size en uygun lens ve çerçeve önerilerini sunar. Muayene sürecimiz yaklaşık 20-30 dakika sürer ve sonuçlar anında değerlendirilir.',
    descriptionEn:
      'We perform eye examinations with state-of-the-art measurement devices. Our expert opticians detect vision problems and recommend the most suitable lenses and frames.',
    features: ['Otomatik refraktometre ölçümü', 'Göz içi basınç kontrolü', 'Detaylı reçete hazırlama', 'Ücretsiz danışmanlık'],
    featuresEn: ['Automatic refractometer measurement', 'Intraocular pressure check', 'Detailed prescription', 'Free consultation'],
  },
  {
    slug: 'numarali-gozluk',
    icon: Glasses,
    title: 'Numaralı Gözlük',
    titleEn: 'Prescription Glasses',
    short: 'Yüz tipinize ve tarzınıza uygun numaralı gözlük çözümleri.',
    shortEn: 'Prescription glasses tailored to your face shape and style.',
    description:
      'Geniş çerçeve koleksiyonumuzdan yüz hatlarınıza en uygun modeli seçmenize yardımcı oluyoruz. Tek odaklı, progresif ve bifokal lens seçenekleriyle görme konforunuzu maksimuma çıkarıyoruz.',
    descriptionEn:
      'We help you choose the best frame for your face from our wide collection. Single vision, progressive and bifocal lens options maximize your visual comfort.',
    features: ['Yüz analizi ve çerçeve önerisi', 'Anti-refle kaplama', 'İnce lens seçenekleri', 'Hızlı teslimat'],
    featuresEn: ['Face analysis and frame recommendation', 'Anti-reflective coating', 'Thin lens options', 'Fast delivery'],
  },
  {
    slug: 'gunes-gozlugu',
    icon: Sun,
    title: 'Güneş Gözlüğü',
    titleEn: 'Sunglasses',
    short: 'UV korumalı, polarize ve numaralı güneş gözlüğü seçenekleri.',
    shortEn: 'UV-protected, polarized and prescription sunglasses.',
    description:
      'Dünyaca ünlü markaların güneş gözlüğü koleksiyonlarını mağazamızda bulabilirsiniz. UV400 koruma, polarize lens ve numaralı güneş gözlüğü seçenekleriyle gözlerinizi güneşin zararlı etkilerinden koruyoruz.',
    descriptionEn:
      'Find sunglasses collections from world-famous brands. UV400 protection, polarized lenses and prescription sunglasses protect your eyes from harmful sun rays.',
    features: ['UV400 koruma', 'Polarize lens', 'Numaralı güneş gözlüğü', 'Premium markalar'],
    featuresEn: ['UV400 protection', 'Polarized lenses', 'Prescription sunglasses', 'Premium brands'],
  },
  {
    slug: 'lens-cesitleri',
    icon: Layers,
    title: 'Lens Çeşitleri',
    titleEn: 'Lens Types',
    short: 'Progresif, mavi ışık filtresi, fotochromik ve daha fazlası.',
    shortEn: 'Progressive, blue light filter, photochromic and more.',
    description:
      'Günlük ihtiyaçlarınıza uygun lens teknolojileri sunuyoruz. Bilgisayar başında çalışanlar için mavi ışık filtresi, yaşlılık kaynaklı yakın görme sorunları için progresif lensler ve güneş ışığına duyarlı fotochromik lensler mevcuttur.',
    descriptionEn:
      'We offer lens technologies for your daily needs including blue light filters, progressive lenses and photochromic lenses.',
    features: ['Progresif lens', 'Mavi ışık filtresi', 'Fotochromik lens', 'Anti-refle kaplama'],
    featuresEn: ['Progressive lenses', 'Blue light filter', 'Photochromic lenses', 'Anti-reflective coating'],
  },
  {
    slug: 'cerceve-secimi',
    icon: ScanFace,
    title: 'Çerçeve Seçimi',
    titleEn: 'Frame Selection',
    short: 'Yüz tipinize ve yaşam tarzınıza özel çerçeve danışmanlığı.',
    shortEn: 'Personalized frame consultation for your face and lifestyle.',
    description:
      'Deneyimli ekibimiz, yüz şeklinize, cilt tonunuza ve yaşam tarzınıza göre en uygun çerçeveyi bulmanızda size rehberlik eder. Klasikten moderne, sportiften elegant modellere kadar geniş bir yelpaze sunuyoruz.',
    descriptionEn:
      'Our experienced team guides you to find the perfect frame based on your face shape, skin tone and lifestyle.',
    features: ['Yüz tipi analizi', 'Stil danışmanlığı', '27+ marka seçeneği', 'Çocuk koleksiyonları'],
    featuresEn: ['Face shape analysis', 'Style consultation', '27+ brand options', 'Kids collections'],
  },
  {
    slug: 'tamir-ayar',
    icon: Wrench,
    title: 'Tamir & Ayar',
    titleEn: 'Repair & Adjustment',
    short: 'Gözlük tamiri, vida değişimi ve profesyonel ayar hizmetleri.',
    shortEn: 'Glasses repair, screw replacement and professional adjustments.',
    description:
      'Satın aldığınız gözlüklerin bakım ve onarımını ücretsiz olarak yapıyoruz. Vida değişimi, burunluk ayarı, sap düzeltme ve ultrasonik temizlik hizmetlerimizle gözlüklerinizin ömrünü uzatıyoruz.',
    descriptionEn:
      'We provide free maintenance and repair for glasses purchased from us including screw replacement, nose pad adjustment and ultrasonic cleaning.',
    features: ['Ücretsiz ayar', 'Vida ve burunluk değişimi', 'Ultrasonik temizlik', 'Hızlı servis'],
    featuresEn: ['Free adjustments', 'Screw and nose pad replacement', 'Ultrasonic cleaning', 'Quick service'],
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);

export const howItWorksSteps = [
  { step: 1, title: 'Randevu Alın veya Mağazaya Gelin', titleEn: 'Book or Visit', desc: 'Online randevu alın veya doğrudan mağazamıza uğrayın.', descEn: 'Book online or visit our store directly.' },
  { step: 2, title: 'Göz Muayenesi', titleEn: 'Eye Exam', desc: 'Uzman optisyenlerimiz detaylı muayene yapar.', descEn: 'Our experts perform a detailed examination.' },
  { step: 3, title: 'Çerçeve & Lens Seçimi', titleEn: 'Frame & Lens', desc: 'Size özel çerçeve ve lens kombinasyonu belirlenir.', descEn: 'Your personalized frame and lens combination is chosen.' },
  { step: 4, title: 'Teslimat', titleEn: 'Delivery', desc: 'Gözlüğünüz 3-7 iş günü içinde hazır olur.', descEn: 'Your glasses are ready within 3-7 business days.' },
  { step: 5, title: 'Ücretsiz Ayar', titleEn: 'Free Adjustment', desc: 'Satış sonrası bakım ve ayar hizmetimiz devam eder.', descEn: 'After-sales care and adjustment service continues.' },
];
