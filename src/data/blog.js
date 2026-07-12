export const blogPosts = [
  {
    slug: 'bilgisayar-basinda-lens-onerileri',
    title: 'Bilgisayar Başında Çalışanlar İçin Lens Önerileri',
    titleEn: 'Lens Recommendations for Computer Users',
    excerpt: 'Dijital ekranlarda göz yorgunluğunu azaltmak için mavi ışık filtresi ve doğru lens seçimi hakkında bilmeniz gerekenler.',
    excerptEn: 'What you need to know about blue light filters and lens selection to reduce digital eye strain.',
    date: '2025-12-01',
    readTime: '4 dk',
    content: `Günümüzde çoğumuz günde 6-8 saat bilgisayar ve telefon ekranına bakıyoruz. Bu durum göz kuruluğu, baş ağrısı ve bulanık görme gibi sorunlara yol açabilir.

**Mavi Işık Filtresi Nedir?**
Dijital ekranlardan yayılan mavi ışık, gözlerinizi yorar ve uyku düzeninizi bozabilir. Mavi ışık filtresi kaplamalı lensler bu zararlı ışığı %30-40 oranında engeller.

**Önerilerimiz:**
- 20-20-20 kuralını uygulayın: Her 20 dakikada 20 saniye 6 metre uzağa bakın
- Ekran parlaklığını ortam ışığına uygun ayarlayın
- Yapay gözyaşı damlası kullanmayı düşünün
- Düzenli göz muayenesi yaptırın

SAN Optik'te bilgisayar kullanıcılarına özel lens seçeneklerimizi inceleyebilirsiniz.`,
    contentEn: `Most of us look at screens 6-8 hours a day. This can cause dry eyes, headaches and blurred vision. Blue light filter lenses block 30-40% of harmful light. Visit SAN Optik for computer-user lens options.`,
  },
  {
    slug: 'cocuklarda-goz-muayenesi',
    title: 'Çocuklarda Göz Muayenesi Ne Zaman Yapılmalı?',
    titleEn: 'When Should Children Have Eye Exams?',
    excerpt: 'Çocuklarda görme sorunlarının erken teşhisi neden önemli? Hangi yaşlarda muayene yaptırılmalı?',
    excerptEn: 'Why early detection matters and at what ages children should be examined.',
    date: '2025-11-15',
    readTime: '5 dk',
    content: `Çocuklarda görme sorunları okul başarısını ve sosyal gelişimi doğrudan etkileyebilir. Erken teşhis kritik öneme sahiptir.

**Önerilen Muayene Zamanları:**
- 6 aylık: İlk göz kontrolü
- 3 yaş: Görme keskinliği testi
- Okul öncesi (5-6 yaş): Kapsamlı muayene
- Her yıl: Okul çağında düzenli kontrol

**Dikkat Edilmesi Gereken Belirtiler:**
- Kitaba çok yakın bakma
- Sık göz kırpma veya ovma
- Baş ağrısı şikayeti
- Tek gözü kapatarak bakma

SAN Optik'te çocuklara özel gözlük koleksiyonlarımız ve sabırlı ekibimizle hizmetinizdeyiz.`,
    contentEn: `Vision problems in children affect school performance. Recommended exams at 6 months, 3 years, pre-school and annually. Watch for signs like sitting too close to books. We have kids collections at SAN Optik.`,
  },
  {
    slug: 'gunes-gozlugunde-uv-koruma',
    title: 'Güneş Gözlüğünde UV Koruma Nedir?',
    titleEn: 'What is UV Protection in Sunglasses?',
    excerpt: 'UV400 koruma, polarize lens ve numaralı güneş gözlüğü seçerken dikkat etmeniz gerekenler.',
    excerptEn: 'UV400 protection, polarized lenses and what to look for when choosing sunglasses.',
    date: '2025-10-20',
    readTime: '3 dk',
    content: `Güneş gözlüğü sadece bir moda aksesuarı değil, göz sağlığınız için gerekli bir koruma aracıdır.

**UV400 Koruma:**
UV400 etiketi, lensin UVA ve UVB ışınlarının %99'unu engellediği anlamına gelir. Ucuz ve kalitesiz gözlükler bu korumayı sağlamayabilir.

**Polarize Lens:**
Yansımaları azaltarak özellikle sürüş ve deniz kenarında net görüş sağlar. Balıkçılık ve outdoor sporları için idealdir.

**Numaralı Güneş Gözlüğü:**
Gözlük kullanıyorsanız numaralı güneş gözlüğü lensleri ile hem net görüp hem güneşten korunabilirsiniz.

SAN Optik'te tüm güneş gözlüklerimiz orijinal ve UV korumalıdır.`,
    contentEn: `Sunglasses protect eye health. UV400 blocks 99% of UVA/UVB. Polarized lenses reduce glare. Prescription sunglasses available at SAN Optik.`,
  },
  {
    slug: 'yuz-tipine-gore-cerceve-secimi',
    title: 'Yüz Tipine Göre Çerçeve Seçimi Rehberi',
    titleEn: 'Frame Selection Guide by Face Shape',
    excerpt: 'Yuvarlak, oval, kare ve kalp yüz tiplerine en uygun gözlük çerçeveleri hangileri?',
    excerptEn: 'Best frame shapes for round, oval, square and heart face types.',
    date: '2025-09-10',
    readTime: '4 dk',
    content: `Doğru çerçeve seçimi yüzünüzü dengeler ve tarzınızı tamamlar.

**Yuvarlak Yüz:** Köşeli ve dikdörtgen çerçeveler yüzü uzatır ve denge sağlar.
**Oval Yüz:** Çoğu çerçeve modeli uyumludur — en şanslı yüz tipi!
**Kare Yüz:** Yuvarlak ve oval çerçeveler keskin hatları yumuşatır.
**Kalp Yüz:** Alt kısmı geniş çerçeveler alın bölgesini dengeler.

Uzman optisyenlerimiz mağazamızda yüz analizinizi yaparak size en uygun modelleri önerir. Randevu almak için bizi arayın.`,
    contentEn: `Round faces suit angular frames; oval faces suit most styles; square faces suit round frames; heart faces suit wider-bottom frames. Our opticians offer face analysis in store.`,
  },
];

export const getBlogPostBySlug = (slug) => blogPosts.find((p) => p.slug === slug);
