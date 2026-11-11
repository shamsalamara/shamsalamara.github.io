(() => {
  const copy = {
    en: {
      archive: ['PROJECTS LIST', 'SHAMS AL AMARA / PROJECT ARCHIVE', 'Our projects, from the latest work to the earliest studies.'],
      procedure: ['OUR DESIGN PROCEDURE', 'SHAMS AL AMARA / OUR PROCESS', 'Three phases. Twelve steps. A clear path from the first meeting to project hand-over.'],
      phases: ['Contract', 'Design', 'Execution'], phase: 'Phase', step: 'Step', home: 'Back to home ↗', years: 'Project years',
      steps: ['Meeting with client', 'Site visit', 'Contract', 'Pre-payment', 'Proposal & concept design', '2D design', '3D design', 'Rendering', 'Approvals & work permit', 'Execution & construction', 'Supervision', 'Project hand-over']
    },
    fa: {
      archive: ['فهرست پروژه‌ها', 'شمس‌العماره / آرشیو پروژه‌ها', 'پروژه‌های ما، از تازه‌ترین کارها تا نخستین مطالعات.'],
      procedure: ['روند طراحی ما', 'شمس‌العماره / فرایند همکاری', 'سه بخش و دوازده گام؛ مسیری روشن از نخستین جلسه تا تحویل پروژه.'],
      phases: ['قرارداد', 'طراحی', 'اجرا'], phase: 'بخش', step: 'گام', home: 'بازگشت به خانه ↗', years: 'سال پروژه‌ها',
      steps: ['جلسه با کارفرما', 'بازدید از سایت', 'قرارداد', 'پیش‌پرداخت', 'پیشنهاد و طراحی مفهومی', 'طراحی دوبعدی', 'طراحی سه‌بعدی', 'رندرینگ', 'تأییدیه‌ها و مجوز کار', 'اجرا و ساخت', 'نظارت', 'تحویل پروژه']
    },
    ar: {
      archive: ['قائمة المشاريع', 'شمس العمارة / أرشيف المشاريع', 'مشاريعنا، من أحدث الأعمال إلى أولى الدراسات.'],
      procedure: ['منهجية التصميم لدينا', 'شمس العمارة / مسار العمل', 'ثلاث مراحل واثنتا عشرة خطوة؛ مسار واضح من الاجتماع الأول إلى تسليم المشروع.'],
      phases: ['التعاقد', 'التصميم', 'التنفيذ'], phase: 'المرحلة', step: 'الخطوة', home: 'العودة إلى الرئيسية ↗', years: 'سنوات المشاريع',
      steps: ['الاجتماع مع العميل', 'زيارة الموقع', 'العقد', 'الدفعة المقدمة', 'المقترح والتصميم المفاهيمي', 'التصميم ثنائي الأبعاد', 'التصميم ثلاثي الأبعاد', 'الإظهار المعماري', 'الموافقات وتصريح العمل', 'التنفيذ والبناء', 'الإشراف', 'تسليم المشروع']
    }
  };
  function render() {
    const I = window.SA_I18N;
    const text = copy[I.lang];
    const isArchive = document.body.dataset.studioPage === 'projects-list';
    const [title, kicker, intro] = text[isArchive ? 'archive' : 'procedure'];
    document.title = `${title} — Shams Al Amara`;
    document.querySelector('#studio-page-title').textContent = title;
    document.querySelector('#studio-page-kicker').textContent = kicker;
    document.querySelector('#studio-page-intro').textContent = intro;
    document.querySelector('.detail-back').childNodes[0].nodeValue = `${I.common.back} `;
    document.querySelector('#studio-page-home').textContent = text.home;
    document.querySelector('.archive-years')?.setAttribute('aria-label', text.years);
    document.querySelectorAll('[data-phase-title],[data-phase-link]').forEach(el => {
      el.textContent = text.phases[Number(el.dataset.phaseTitle ?? el.dataset.phaseLink)];
    });
    document.querySelectorAll('[data-phase-kicker]').forEach(el => { el.textContent = `${text.phase} ${Number(el.dataset.phaseKicker) + 1} / 3`; });
    document.querySelectorAll('[data-step-label]').forEach(el => { el.textContent = `${text.step} ${Number(el.dataset.stepLabel) + 1}`; });
    document.querySelectorAll('[data-step-title]').forEach(el => { el.textContent = text.steps[Number(el.dataset.stepTitle)]; });
    document.querySelectorAll('.procedure-overview > span').forEach(el => { el.textContent = I.rtl ? '←' : '→'; });
  }
  render();
  document.addEventListener('sa:languagechange', render);
})();
