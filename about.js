const aboutContent = {
  en: {
    title: 'ABOUT SHAMS AL AMARA',
    paragraphs: [
      '“Shams” means sun in Arabic, a source of life. “Al Amara” refers to a building or mansion. Together, our name evokes the light that falls on architecture and brings it to life. It also recalls the historic Shams Al Amara building in Tehran, honouring Iran’s architectural heritage.',
      'Shams Al Amara Architecture Studio began in Iran in 2013, working primarily in southern cities and islands. Since 2022, our studio has been based in Dubai. We work across the UAE and the wider Middle East, including Oman, Qatar and Saudi Arabia.',
      'Alongside contemporary projects, we draw on the social, cultural and architectural foundations shared across the region. Our practice combines creative and practical design with a close understanding of local identity, climate and the valuable traditions of vernacular architecture.',
      'We seek fresh ways to carry the region’s architectural heritage into contemporary life, combining knowledge shaped over centuries with today’s needs and technologies. Client satisfaction, thoughtful collaboration and delivering the right service within a reasonable time guide every project.'
    ]
  },
  fa: {
    title: 'درباره شمس‌العماره',
    paragraphs: [
      '«شمس» در زبان عربی به معنای خورشید، سرچشمه زندگی، است و «العماره» به بنا اشاره دارد. نام شمس‌العماره یادآور نوری است که بر بنا می‌تابد و به آن روح و زندگی می‌بخشد. این نام همچنین یادآور بنای تاریخی شمس‌العماره در تهران و ادای احترام به میراث ارزشمند معماری ایران است.',
      'دفتر معماری شمس‌العماره فعالیت خود را در سال ۱۳۹۲ در ایران آغاز کرد و ابتدا در شهرها و جزایر جنوبی کشور پروژه‌هایی را پیش برد. این استودیو از سال ۱۴۰۱ به‌طور رسمی در دبی مستقر است و برای گسترش فعالیت خود در امارات و کشورهای منطقه، از جمله عمان، قطر و عربستان سعودی تلاش می‌کند.',
      'ما در کنار طراحی پروژه‌های معاصر، به اشتراکات فرهنگی و معماری کشورهای حوزه خلیج فارس و میراث تمدنی خاورمیانه توجه داریم. تمرکز ما بر طراحی خلاقانه و کاربردی، هویت بستر و بازآفرینی عناصر ارزشمند معماری بومی است.',
      'می‌کوشیم با نگاهی تازه به میراث معماری منطقه، تجربه تاریخی آن را با نیازها و فناوری‌های امروز پیوند دهیم. جلب رضایت کارفرما، همکاری نزدیک و ارائه خدمات مطلوب در زمانی منطقی، از اصول کار ماست.'
    ]
  },
  ar: {
    title: 'عن شمس العمارة',
    paragraphs: [
      'تعني «شمس» مصدر النور والحياة، وتشير «العمارة» إلى البناء. ويحمل اسم شمس العمارة صورة الضوء حين يلامس المبنى ويمنحه الحياة. كما يستحضر مبنى شمس العمارة التاريخي في طهران، تقديراً للتراث المعماري الإيراني.',
      'بدأ استوديو شمس العمارة عمله في إيران عام ٢٠١٣، ونفذ مشروعات في المدن والجزر الجنوبية. ومنذ عام ٢٠٢٢ يتخذ من دبي مقراً له، ويعمل على توسيع نشاطه في الإمارات ودول المنطقة، ومنها عُمان وقطر والمملكة العربية السعودية.',
      'إلى جانب المشروعات المعاصرة، نستمد رؤيتنا من القواسم الثقافية والمعمارية المشتركة في الخليج العربي ومن إرث الشرق الأوسط الحضاري. نركز على التصميم المبدع والعملي، وهوية المكان، وإحياء العناصر القيّمة في العمارة المحلية.',
      'نسعى إلى قراءة جديدة لتراث المنطقة المعماري، تجمع خبرة قرون من العمران مع احتياجات اليوم وتقنياته. ويقود عملنا رضا العملاء والتعاون الوثيق وتقديم خدمات ملائمة ضمن إطار زمني معقول.'
    ]
  }
};

function applyAboutLanguage() {
  const I = window.SA_I18N;
  const content = aboutContent[I.lang];
  document.title = `${content.title} — Shams Al Amara`;
  document.querySelector('.detail-back').childNodes[0].nodeValue = `${I.common.back} `;
  document.querySelector('#about-page-kicker').textContent = I.main.aboutEyebrow;
  document.querySelector('#about-page-title').textContent = content.title;
  document.querySelector('#about-page-text').replaceChildren(...content.paragraphs.map(value => { const p = document.createElement('p'); p.textContent = value; return p; }));
  document.querySelector('#about-page-work').textContent = I.common.explore;
}

applyAboutLanguage();
document.addEventListener('sa:languagechange', applyAboutLanguage);
