const $ = selector => document.querySelector(selector);
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const I = window.SA_I18N;
history.scrollRestoration = 'manual';
if (location.hash) history.replaceState(null, '', location.pathname + location.search);
window.addEventListener('pageshow', () => window.scrollTo({top:0,behavior:'instant'}), {once:true});
let sourceData;

const setMultiline = (element, value) => {
  if (element) element.innerHTML = value.split('\n').join('<br>');
};

const originalHeroSlides = [...document.querySelectorAll('.hero-slide')];
originalHeroSlides[1]?.setAttribute('data-mobile-title-position', 'raised');
originalHeroSlides[2]?.setAttribute('data-mobile-title-position', 'raised');
const heroSlides = [0, 1, 4, 5, 2, 3, 6].map(index => originalHeroSlides[index]).filter(Boolean);
heroSlides.forEach(slide => slide.parentElement.append(slide));
const heroMeta = $('#hero-meta');
const heroSurface = $('.hero-image');
let heroIndex = 0;
let heroTarget = 0;
let heroRequest = 0;
let heroInView = true;
let heroTimer;
let heroMetaTimer;
let heroTitleTimer;
let heroCleanupTimer;
let touchStartX = 0;
let touchStartY = 0;
let suppressHeroClick = false;
const heroImageReady = new WeakMap();

const isGccProject = project => /,\s*(UAE|Qatar|Oman)$/i.test(project.location);
const priorityProjectSort = (a, b) => Number(isGccProject(b)) - Number(isGccProject(a)) || Number(b.year) - Number(a.year) || a.name.localeCompare(b.name);

function updateHeroPresentation() {
  heroSurface?.toggleAttribute('data-hero-title-position', heroSlides[heroIndex]?.dataset.mobileTitlePosition === 'raised');
}

function updateHeroMeta(animate = false) {
  if (!heroMeta) return;
  const update = () => {
    heroMeta.querySelector('.hero-project-name').textContent = I.main.heroNames[heroIndex];
    heroMeta.querySelector('.hero-project-location').textContent = I.main.heroLocations[heroIndex];
    heroMeta.classList.remove('is-changing');
  };
  if (!animate) return update();
  heroMeta.classList.add('is-changing');
  clearTimeout(heroMetaTimer);
  heroMetaTimer = setTimeout(update, 220);
}

function loadHeroImage(index) {
  const image = heroSlides[index]?.querySelector('img');
  if (!image) return Promise.resolve(false);
  const source = image.closest('picture').querySelector('source[data-srcset]');
  if (source) {
    source.srcset = source.dataset.srcset;
    delete source.dataset.srcset;
  }
  if (image.dataset.src) {
    image.src = image.dataset.src;
    delete image.dataset.src;
  }
  const key = `${image.src}|${image.closest('picture').querySelector('source')?.srcset}|${matchMedia('(max-width:650px)').matches}`;
  const cached = heroImageReady.get(image);
  if (cached?.key === key) return cached.promise;
  if (image.complete && !image.naturalWidth) image.src = image.src;
  const promise = image.decode().then(() => true).catch(() => {
    if (image.complete) return image.naturalWidth > 0;
    return new Promise(resolve => {
      image.addEventListener('load', () => resolve(true), { once: true });
      image.addEventListener('error', () => resolve(false), { once: true });
    });
  }).then(ready => {
    if (!ready) heroImageReady.delete(image);
    return ready;
  });
  heroImageReady.set(image, { key, promise });
  return promise;
}

async function showHero(index) {
  heroTarget = (index + heroSlides.length) % heroSlides.length;
  const target = heroTarget;
  const request = ++heroRequest;
  clearTimeout(heroTimer);
  const ready = await loadHeroImage(target);
  if (request !== heroRequest) return;
  if (!ready) { heroTarget = heroIndex; startHero(target + 1); return; }
  if (target === heroIndex) { startHero(); return; }
  const previous = heroIndex;
  heroIndex = target;
  heroSlides.forEach((slide, itemIndex) => {
    slide.classList.toggle('is-leaving', itemIndex === previous);
    slide.classList.toggle('is-active', itemIndex === target);
  });
  clearTimeout(heroCleanupTimer);
  heroCleanupTimer = setTimeout(() => heroSlides.forEach(slide => slide.classList.remove('is-leaving')), 750);
  const title = $('.hero-overlay h1');
  title.classList.add('is-changing');
  heroMeta?.classList.add('is-changing');
  clearTimeout(heroTitleTimer);
  heroTitleTimer = setTimeout(() => {
    title.textContent = I.main.heroTitles[heroIndex];
    updateHeroPresentation();
    updateHeroMeta();
    title.classList.remove('is-changing');
  }, reduced.matches ? 0 : 160);
  loadHeroImage((heroIndex + 1) % heroSlides.length);
  startHero();
}

updateHeroPresentation();

function startHero(next = heroIndex + 1) {
  clearTimeout(heroTimer);
  if (reduced.matches || document.hidden || !heroInView || document.body.classList.contains('menu-open') || heroSlides.length < 2) return;
  heroTimer = setTimeout(() => showHero(next), 5500);
}

heroSurface?.addEventListener('pointerdown', event => { touchStartX = event.clientX; touchStartY = event.clientY; });
heroSurface?.addEventListener('dragstart', event => event.preventDefault());
heroSurface?.setAttribute('tabindex', '0');
heroSurface?.addEventListener('keydown', event => {
  if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  event.preventDefault();
  showHero(heroTarget + (event.key === 'ArrowRight' ? 1 : -1));
});
heroSurface?.addEventListener('pointerup', event => {
  const delta = event.clientX - touchStartX;
  if (Math.abs(delta) <= 45 || Math.abs(event.clientY - touchStartY) > Math.abs(delta)) return;
  suppressHeroClick = true;
  showHero(heroTarget + (delta < 0 ? 1 : -1));
  setTimeout(() => { suppressHeroClick = false; }, 320);
});
heroSlides.forEach(slide => slide.addEventListener('click', event => {
  if (suppressHeroClick) { event.preventDefault(); event.stopPropagation(); }
}, true));
document.addEventListener('visibilitychange', () => startHero());
if ('IntersectionObserver' in window && heroSurface) {
  new IntersectionObserver(([entry]) => { heroInView = entry.isIntersecting; startHero(); }, { threshold: 0 }).observe(heroSurface);
}
loadHeroImage(0).then(() => { loadHeroImage(1); startHero(); });

const menu = $('.menu-toggle');
const navigation = $('#navigation');
function setMenu(open) {
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? I.common.menuClose : I.common.menuOpen);
  navigation.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  startHero();
}
menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });

$('#year').textContent = new Date().getFullYear();
const ceoNavigationLink = navigation.querySelector('a[href="#ceo"]');
if (ceoNavigationLink) ceoNavigationLink.href = 'ceo.html';

const teamProfiles = {
  core: [
    ['abolfazl','assets/profile-abolfazl-jafarpour-v2.jpg'],
    ['negin','assets/profile-negin-raoufi-v2.webp'],
    ['sina','assets/profile-sina-pakand.webp']
  ],
  collaborators: [
    ['mahshad','assets/profile-mahshad-rouzbahani.webp'],
    ['sara','assets/profile-sara-eyvaznezhad.webp'],
    ['lina','assets/profile-lina-el-hajj.jpg'],
    ['saleh','assets/profile-saleh-ansari.webp'],
    ['nizar','assets/profile-nizar-jabbar.webp'],
    ['sam','assets/profile-sam-akhzari.webp']
  ]
};

function buildTeamProfiles() {
  const createCard = ([id, image], collaborator = false) => {
    const card = document.createElement('article');
    card.className = collaborator ? 'collaborator' : 'member';
    card.dataset.profile = id;
    card.innerHTML = `<div class="portrait-empty"><img src="${image}" alt="" width="900" height="1125" loading="lazy" decoding="async"></div><h4></h4><p class="profile-role"></p><p class="profile-education"></p>`;
    return card;
  };
  $('.core-roster').replaceChildren(...teamProfiles.core.map(profile => createCard(profile)));
  $('.collaborator-roster').replaceChildren(...teamProfiles.collaborators.map(profile => createCard(profile, true)));
}

let currentBase;
let current;
let slide = 0;
let opener;
const dialog = $('#project-dialog');

function showImage() {
  const image = $('#gallery-image');
  window.SA_GALLERY.show(image, current, slide);
  image.alt = `${current.name} — ${I.common.projectView} ${slide + 1}`;
  $('#gallery-count').textContent = `${slide + 1} / ${current.gallery.length}`;
}

function openProject(project, button) {
  currentBase = project;
  current = I.project(project);
  slide = 0;
  opener = button;
  $('#dialog-title').textContent = current.name;
  $('#dialog-meta').textContent = `${current.location} · ${current.year}`;
  $('#dialog-description').textContent = current.description;
  showImage();
  if (!dialog.open) {
    window.SA_DIALOG_SCROLL.lock();
    dialog.showModal();
  }
}

function move(amount) {
  slide = (slide + amount + current.gallery.length) % current.gallery.length;
  showImage();
}

$('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
});
dialog.addEventListener('close', () => window.SA_DIALOG_SCROLL.unlock(opener));
$('#gallery-prev').onclick = () => move(-1);
$('#gallery-next').onclick = () => move(1);
dialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
});

const groupIds = {
  architecture: ["hayat", "mataam-kish-restaurant", "lulu", "chandal", "taleqan", "beyt-al-atr", "chabahar", "amiri", "kish", "kish-turtle-monitoring-site"],
  interior: ["villa-ras", "dhaid", "bath", "medore", "cafe", "majlis-house", "marina-office", "jumeirah-villa", "villa-persia", "villa-morocco", "dashtestan-judiciary", "madinat-jumeirah-living-lamma-4"],
  urban: ["kish-touristic-path", "bushehr"],
  landscape: ["mashe-mosque-landscape"]
};

function renderProjectRows() {
  if (!sourceData) return;
  const lookup = Object.fromEntries(sourceData.projects.map(project => [project.id, project]));
  const parent = $('#project-rows');
  parent.replaceChildren();

  Object.entries(groupIds).forEach(([id, ids], index) => {
    const [title, caption] = I.group(id);
    const row = document.createElement('div');
    row.className = 'project-row';
    row.id = id;
    row.innerHTML = `<div class="row-label"><h3>${title}</h3><p>${caption}</p><div class="row-controls"><button aria-label="${I.common.previous} — ${title}"><img src="assets/arrow-left.svg" alt=""></button><button aria-label="${I.common.next} — ${title}"><img src="assets/arrow-right.svg" alt=""></button></div></div><div class="cards" aria-label="${title}" tabindex="0"></div>`;
    const cards = row.querySelector('.cards');

    ids.map(projectId => lookup[projectId]).filter(Boolean)
      .sort(priorityProjectSort).forEach(project => {
      const local = I.project(project);
      const card = document.createElement('button');
      card.className = 'project-card';
      card.setAttribute('aria-label', `${I.common.view} ${local.name}`);
      card.innerHTML = `<img src="${project.image}" alt="" width="900" height="840" loading="lazy" decoding="async"><span class="card-open">+</span><span class="card-copy"><strong>${local.name}</strong><small>${local.location} · ${local.year}</small></span>`;
      card.onclick = () => openProject(project, card);
      card.addEventListener('pointerenter', () => window.SA_GALLERY.warm(project), { once: true });
      card.addEventListener('focus', () => window.SA_GALLERY.warm(project), { once: true });
      card.addEventListener('pointerdown', () => window.SA_GALLERY.warm(project), { passive: true, once: true });
      cards.append(card);
    });

    const [previous, next] = row.querySelectorAll('.row-controls button');
    const update = () => {
      previous.disabled = cards.scrollLeft < 5;
      next.disabled = cards.scrollLeft + cards.clientWidth >= cards.scrollWidth - 5;
    };
    previous.onclick = () => cards.scrollBy({ left: -(cards.firstElementChild.offsetWidth + 16), behavior: reduced.matches ? 'instant' : 'smooth' });
    next.onclick = () => cards.scrollBy({ left: cards.firstElementChild.offsetWidth + 16, behavior: reduced.matches ? 'instant' : 'smooth' });
    cards.addEventListener('scroll', update, { passive: true });
    new ResizeObserver(update).observe(cards);
    parent.append(row);
    update();
  });
}

const startReelWhenLoaded = (reel, primaryCount) => {
  const images = [...reel.querySelectorAll('img')];
  Promise.all(images.slice(0, primaryCount).map(image => image.decode().catch(() => {}))).then(() => reel.classList.add('is-ready'));
};

function buildTeamGallery() {
  if ($('.team-gallery')) return;
  const teamSlideCount = 19;
  const teamGallery = document.createElement('div');
  teamGallery.className = 'team-gallery';
  teamGallery.setAttribute('aria-label', I.main.studioMoments);
  const teamTrack = document.createElement('div');
  teamTrack.className = 'team-gallery-track';
  for (let repeat = 0; repeat < 2; repeat++) Array.from({ length: teamSlideCount }, (_, index) => index + 1).forEach(number => {
    const image = document.createElement('img');
    image.src = `assets/team-slide-${String(number).padStart(2, '0')}.jpg`;
    image.dataset.slide = String(number);
    image.alt = repeat ? '' : `${I.main.studioImage} ${number}`;
    image.loading = !repeat && number <= 3 ? 'eager' : 'lazy';
    if (!repeat && number === 1) image.fetchPriority = 'high';
    image.decoding = 'async';
    image.width = 520;
    image.height = 376;
    if (repeat) image.setAttribute('aria-hidden', 'true');
    teamTrack.append(image);
  });
  teamGallery.append(teamTrack);
  $('.roster').before(teamGallery);
  startReelWhenLoaded(teamTrack, 1);
}

function buildLogoReel() {
  const track = $('#logo-track');
  if (!track || track.children.length) return;
  for (let repeat = 0; repeat < 2; repeat++) sourceData.logos.forEach(logo => {
    const image = document.createElement('img');
    image.src = logo.image;
    image.alt = repeat ? '' : logo.name;
    image.width = 140;
    image.height = 90;
    image.loading = repeat ? 'lazy' : 'eager';
    image.decoding = 'async';
    if (repeat) image.setAttribute('aria-hidden', 'true');
    track.append(image);
  });

  startReelWhenLoaded(track, sourceData.logos.length);
}

function buildInstagramReel() {
  const track = $('#instagram-posts');
  if (!track || track.children.length) return;
  const instagramPosts = ['DcZOjTpsk66','DaFSF37M4t7','Da7llYHML2q','DZhwyxSkmDp','DZkfxbcMfnf','DZc9T2XjBjZ','DZpoUzRDGF_','DZcBeSpM5mF','DZmLLsNDClC','DZVDJuujEf5'];
  for (let repeat = 0; repeat < 2; repeat++) {
    instagramPosts.forEach((code, index) => {
      const link = document.createElement('a');
      link.className = 'instagram-card';
      link.href = `https://www.instagram.com/shams.alamara.arch/${index === 7 ? 'reel' : 'p'}/${code}/`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      if (repeat) link.setAttribute('aria-hidden', 'true');
      const image = document.createElement('img');
      image.src = `assets/instagram-slide-${String(index + 1).padStart(2, '0')}.webp`;
      image.alt = repeat ? '' : `${I.main.studioImage} ${index + 1}`;
      image.loading = repeat ? 'lazy' : 'eager';
      image.decoding = 'async';
      image.width = 420;
      image.height = 420;
      link.append(image);
      track.append(link);
    });
    const more = document.createElement('a');
    more.className = 'instagram-card instagram-more';
    more.href = 'https://www.instagram.com/shams.alamara.arch/';
    more.target = '_blank';
    more.rel = 'noopener noreferrer';
    more.textContent = I.main.seeMore;
    if (repeat) more.setAttribute('aria-hidden', 'true');
    track.append(more);
  }

  startReelWhenLoaded(track, instagramPosts.length);
}

function buildWhenNear(target, builder, rootMargin = '700px 0px') {
  if (!target || !('IntersectionObserver' in window)) {
    builder();
    return;
  }
  const observer = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting)) return;
    observer.disconnect();
    builder();
    applyMainLanguage();
  }, { rootMargin });
  observer.observe(target);
}

function applyMainLanguage() {
  const text = I.main;
  document.title = `${text.studioName} — ${text.heroTitle}`;
  $('.skip').textContent = text.skip;
  $('.menu-label').textContent = text.menu;
  menu.setAttribute('aria-label', menu.getAttribute('aria-expanded') === 'true' ? I.common.menuClose : I.common.menuOpen);
  navigation.querySelectorAll('a[data-nav-index]').forEach(anchor => { anchor.textContent = text.nav[Number(anchor.dataset.navIndex)]; });
  navigation.querySelector('[href="projects-list.html"]').textContent = {en:'PROJECTS LIST',fa:'فهرست پروژه‌ها',ar:'قائمة المشاريع'}[I.lang];
  navigation.querySelector('[href="design-procedure.html"]').textContent = {en:'OUR DESIGN PROCEDURE',fa:'روند طراحی ما',ar:'منهجية التصميم لدينا'}[I.lang];
  document.querySelector('.menu-language')?.setAttribute('aria-label', I.common.language);
  $('.hero-overlay h1').textContent = text.heroTitles[heroIndex];

  const aboutHeading = $('.about-preview .section-heading');
  aboutHeading.querySelector('.eyebrow').textContent = text.aboutEyebrow;
  aboutHeading.querySelector('h2').textContent = text.aboutTitle;
  aboutHeading.querySelector('.about-summary').textContent = text.aboutSummary;
  aboutHeading.querySelector('.about-read-more').textContent = text.aboutMore;

  const servicesHeading = $('.services .section-heading');
  servicesHeading.querySelector('.eyebrow').textContent = text.servicesEyebrow;
  setMultiline(servicesHeading.querySelector('h2'), text.servicesTitle);
  servicesHeading.querySelector('p:last-child').textContent = text.servicesIntro;
  document.querySelectorAll('.service-grid > a').forEach(card => {
    const serviceKey = new URL(card.href).searchParams.get('service');
    const [title, description] = text.serviceCards[serviceKey];
    card.querySelector('h3').textContent = title;
    card.querySelector('p').textContent = description;
  });
  document.querySelector('.projects .section-heading .eyebrow').textContent = I.lang === 'en' ? 'SELECTED WORK' : (I.lang === 'fa' ? 'پروژه‌های منتخب' : 'أعمال مختارة');

  const teamHeading = $('.team .section-heading');
  teamHeading.querySelector('.eyebrow').textContent = text.teamEyebrow;
  setMultiline(teamHeading.querySelector('h2'), text.teamTitle);
  teamHeading.querySelector('p:last-child').textContent = text.teamIntro;
  $('.team-layout figcaption').textContent = text.archiveCaption;
  $('.team-copy > .eyebrow').textContent = text.studioName;
  setMultiline($('.team-copy h3'), text.teamHeading);
  $('.team-copy > p:not(.eyebrow)').textContent = text.teamBody;
  const directorParagraphs = document.querySelectorAll('.director p');
  $('.director h4').textContent = text.ceoName;
  directorParagraphs[0].textContent = text.ceoRole;
  directorParagraphs[1].textContent = text.ceoBio;
  let ceoProfileLink = $('.director .ceo-profile-link');
  if (!ceoProfileLink) {
    ceoProfileLink = document.createElement('a');
    ceoProfileLink.className = 'ceo-profile-link';
    ceoProfileLink.href = 'ceo.html';
    $('.director').append(ceoProfileLink);
  }
  ceoProfileLink.textContent = text.ceoMore;
  const rosterHeadings = document.querySelectorAll('.roster > h3');
  rosterHeadings[0].textContent = text.coreTeam;
  rosterHeadings[1].textContent = text.collaborators;
  document.querySelectorAll('[data-profile]').forEach(card => {
    const profile = text.teamProfiles[card.dataset.profile];
    if (!profile) return;
    card.querySelector('h4').textContent = profile[0];
    card.querySelector('.profile-role').textContent = profile[1];
    card.querySelector('.profile-education').textContent = profile[2];
    card.querySelector('img').alt = `${profile[0]} — ${profile[1]}`;
    card.setAttribute('aria-label', `${profile[0]} — ${profile[1]}`);
  });
  $('.partners-head .eyebrow').textContent = text.organisations;

  $('.contact-top .eyebrow').textContent = text.contactEyebrow;
  setMultiline($('.contact-top h2'), text.contactTitle);
  const contactItems = document.querySelectorAll('.contact-item');
  contactItems[0].querySelector('.eyebrow').textContent = text.dubai;
  contactItems[1].querySelector('.eyebrow').textContent = text.iran;
  contactItems[0].querySelector('.whatsapp-link').lastChild.nodeValue = text.callWhatsapp;
  contactItems[1].querySelector('.whatsapp-link').lastChild.nodeValue = text.callWhatsapp;
  contactItems[2].querySelector('.eyebrow').textContent = text.email;
  $('.instagram .eyebrow').textContent = text.instagramKicker;
  $('.instagram h3').textContent = text.followInstagram;
  document.querySelectorAll('.instagram-more').forEach(link => { link.textContent = text.seeMore; });
  $('.team-gallery')?.setAttribute('aria-label', text.studioMoments);
  document.querySelectorAll('.team-gallery img:not([aria-hidden]), .instagram-card img:not([aria-hidden])').forEach((image, index) => { image.alt = `${text.studioImage} ${index + 1}`; });

  const footer = $('#site-footer');
  footer.children[0].lastChild.nodeValue = ` ${text.footerStudio}`;
  footer.children[1].textContent = text.footerLocation;
  footer.children[2].textContent = text.backTop;
  $('.close-dialog').setAttribute('aria-label', I.common.close);
  $('#gallery-prev').setAttribute('aria-label', I.common.previous);
  $('#gallery-next').setAttribute('aria-label', I.common.next);
  $('.project-description .text-link').textContent = I.common.discuss;
  $('.project-description .text-link').href = `https://wa.me/971507078480?text=${encodeURIComponent(I.common.whatsappMessage)}`;

  heroSlides.forEach((heroSlide, index) => {
    heroSlide.setAttribute('aria-label', `${I.common.view} ${text.heroNames[index]}`);
  });
  updateHeroMeta();
  renderProjectRows();
  if (dialog.open && currentBase) openProject(currentBase, opener);
  if (!reduced.matches) initReveals();
}

$('#pause-logos')?.remove();
let revealObserver;
function initReveals() {
  revealObserver ??= new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: .1, rootMargin: '0px 0px -5%' });
  document.querySelectorAll('.section-heading,.service-grid,.project-row,.team-layout,.roster,.partners-head,.partners,.contact-top,.contact-item,.instagram,.instagram-reel,.social-strip,footer').forEach(element => {
    if (element.classList.contains('scroll-reveal')) return;
    element.classList.add('scroll-reveal');
    revealObserver.observe(element);
  });
}

const buildTeamSection = () => {
  buildTeamProfiles();
  buildTeamGallery();
};
buildWhenNear($('.team'), buildTeamSection, '900px 0px');
applyMainLanguage();
document.addEventListener('sa:languagechange', applyMainLanguage);

(window.SA_CONTENT ? Promise.resolve(window.SA_CONTENT) : fetch('./content.json?v=20261022', { cache: 'no-store' })
  .then(response => { if (!response.ok) throw Error(); return response.json(); }))
  .then(data => {
    const madinat = data.projects.find(project => project.id === 'madinat-jumeirah-living-lamma-4');
    if (madinat) madinat.year = '2026';
    sourceData = data;
    renderProjectRows();
    // These sections are part of the page's core content. Build them as soon
    // as the shared data arrives so direct hash links and slow observers do
    // not leave an empty organisations or Instagram section.
    buildLogoReel();
    buildInstagramReel();
    applyMainLanguage();
    if (!reduced.matches) initReveals();
  })
  .catch(() => { $('#project-rows').textContent = I.main.portfolioError; });

if (!location.hash) window.scrollTo(0, 0);
