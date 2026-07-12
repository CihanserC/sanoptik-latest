const importAll = (r) => {
  const images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

const brandImages = importAll(
  require.context('../assets/Brands', false, /\.(png|jpe?g|svg|PNG|jpg)$/)
);

const getImage = (name) => {
  const normalized = name.toLowerCase();
  const match = Object.entries(brandImages).find(([filename]) => {
    const baseName = filename.replace(/\.(png|jpe?g|svg)$/i, '');
    return baseName.toLowerCase() === normalized;
  });
  return match ? match[1] : null;
};

const logoScaleMap = {
  BenX: 1.4,
  Burberry: 1.35,
  Caretta: 1.2,
  Eschbah: 1.25,
  Fineline: 1.25,
  'Fisher Price': 1.2,
  Hawk: 1.4,
  Humphreys: 1.45,
  'Just Cavalli': 1.25,
  Mustang: 1.3,
  Oakley: 1.4,
  Osse: 1.35,
  Persol: 1.2,
  Police: 1.4,
  Prada: 1.15,
  Rococo: 1.2,
};

const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

const brandMeta = [
  { name: 'Guess', category: 'fashion', origin: 'ABD', collections: ['optik', 'gunes'] },
  { name: 'Rayban', category: 'premium', origin: 'İtalya', collections: ['optik', 'gunes', 'klasik'] },
  { name: 'Vogue', category: 'fashion', origin: 'İtalya', collections: ['optik', 'gunes'] },
  { name: 'Furla', category: 'luxury', origin: 'İtalya', collections: ['optik', 'gunes'] },
  { name: 'Osse', category: 'everyday', origin: 'Türkiye', collections: ['optik', 'gunes'] },
  { name: 'Mustang', category: 'sport', origin: 'ABD', collections: ['gunes', 'optik'] },
  { name: 'Hawk', category: 'sport', origin: 'Türkiye', collections: ['gunes', 'optik'] },
  { name: 'BenX', category: 'everyday', origin: 'Türkiye', collections: ['optik', 'cocuk'] },
  { name: 'Tom Ford', category: 'luxury', origin: 'İtalya', collections: ['optik', 'gunes'] },
  { name: 'Police', category: 'fashion', origin: 'İtalya', collections: ['gunes', 'optik'] },
  { name: 'Lacoste', category: 'fashion', origin: 'Fransa', collections: ['gunes', 'optik'] },
  { name: 'Fisher Price', category: 'kids', origin: 'ABD', collections: ['cocuk'] },
  { name: 'Versace', category: 'luxury', origin: 'İtalya', collections: ['gunes', 'optik'] },
  { name: 'Burberry', category: 'luxury', origin: 'İngiltere', collections: ['gunes', 'optik'] },
  { name: 'Caretta', category: 'everyday', origin: 'Türkiye', collections: ['optik', 'gunes'] },
  { name: 'Goldberry', category: 'everyday', origin: 'Türkiye', collections: ['optik'] },
  { name: 'Miu Miu', category: 'luxury', origin: 'İtalya', collections: ['gunes', 'optik'] },
  { name: 'Prada', category: 'luxury', origin: 'İtalya', collections: ['gunes', 'optik'] },
  { name: 'Dolce Gabbana', category: 'luxury', origin: 'İtalya', collections: ['gunes', 'optik'] },
  { name: 'Persol', category: 'premium', origin: 'İtalya', collections: ['gunes', 'klasik'] },
  { name: 'Oakley', category: 'sport', origin: 'ABD', collections: ['gunes', 'spor'] },
  { name: 'Humphreys', category: 'everyday', origin: 'Almanya', collections: ['optik'] },
  { name: 'Titanflex', category: 'premium', origin: 'Almanya', collections: ['optik'] },
  { name: 'Fineline', category: 'everyday', origin: 'Almanya', collections: ['optik'] },
  { name: 'Eschbah', category: 'everyday', origin: 'Almanya', collections: ['optik'] },
  { name: 'Rococo', category: 'fashion', origin: 'Türkiye', collections: ['optik', 'gunes'] },
  { name: 'Just Cavalli', category: 'fashion', origin: 'İtalya', collections: ['gunes', 'optik'] },
];

export const brands = brandMeta.map((brand) => ({
  ...brand,
  slug: slugify(brand.name),
  image: getImage(brand.name),
  logoScale: logoScaleMap[brand.name] || 1.1,
  description:
    `${brand.name}, ${brand.origin} kökenli ${brand.category === 'luxury' ? 'lüks' : brand.category === 'sport' ? 'spor' : 'şık'} bir gözlük markasıdır. SAN Optik mağazamızda ${brand.collections.join(', ')} koleksiyonlarıyla hizmetinizdeyiz.`,
  descriptionEn:
    `${brand.name} is a ${brand.category} eyewear brand from ${brand.origin}. Available at SAN Optik with ${brand.collections.join(', ')} collections.`,
}));

export const getBrandBySlug = (slug) => brands.find((b) => b.slug === slug);

export const featuredBrandSlugs = ['rayban', 'prada', 'oakley', 'tom-ford', 'versace', 'guess', 'dolce-gabbana', 'miu-miu'];
