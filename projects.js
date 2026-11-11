const categoryIds = {
  architecture: ["hayat", "mataam-kish-restaurant", "lulu", "chandal", "taleqan", "beyt-al-atr", "chabahar", "amiri", "kish", "kish-turtle-monitoring-site"],
  interior: ["villa-ras", "dhaid", "bath", "medore", "cafe", "majlis-house", "marina-office", "jumeirah-villa", "villa-persia", "villa-morocco", "dashtestan-judiciary", "madinat-jumeirah-living-lamma-4"],
  urban: ["kish-touristic-path", "bushehr"],
  landscape: ["mashe-mosque-landscape"]
};

const isGccProject = project => /,\s*(UAE|Qatar|Oman)$/i.test(project.location);
const priorityProjectSort = (a, b) => Number(isGccProject(b)) - Number(isGccProject(a)) || Number(b.year) - Number(a.year) || a.name.localeCompare(b.name);

const params = new URLSearchParams(location.search);
const key = categoryIds[params.get('category')] ? params.get('category') : 'architecture';
const requestedProject = params.get('project');
const $ = selector => document.querySelector(selector);
let sourceData;
let currentBase;
let current;
let slide = 0;
let opener;
const dialog = $('#project-dialog');

function showImage() {
  const image = $('#gallery-image');
  window.SA_GALLERY.show(image, current, slide);
  image.alt = `${current.name} — ${window.SA_I18N.common.projectView} ${slide + 1}`;
  $('#gallery-count').textContent = `${slide + 1} / ${current.gallery.length}`;
}

function openProject(project, button) {
  currentBase = project;
  current = window.SA_I18N.project(project);
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

function renderProjects() {
  if (!sourceData) return;
  const I = window.SA_I18N;
  const [title, intro] = I.category(key);
  document.title = `${title} — ${I.common.projects} — Shams Al Amara`;
  $('.detail-back').childNodes[0].nodeValue = `${I.common.back} `;
  $('.category-heading .eyebrow').textContent = I.common.selectedWork;
  $('#category-title').textContent = title;
  $('#category-intro').textContent = intro;
  $('#category-back').href = `service.html?service=${key}`;
  $('.close-dialog').setAttribute('aria-label', I.common.close);
  $('#gallery-prev').setAttribute('aria-label', I.common.previous);
  $('#gallery-next').setAttribute('aria-label', I.common.next);
  $('.project-description .text-link').textContent = I.common.discuss;
  $('.project-description .text-link').href = `https://wa.me/971507078480?text=${encodeURIComponent(I.common.whatsappMessage)}`;

  const lookup = Object.fromEntries(sourceData.projects.map(project => [project.id, project]));
  const container = $('#category-projects');
  container.replaceChildren();
  categoryIds[key].map(id => lookup[id]).filter(Boolean)
    .sort(priorityProjectSort).forEach(project => {
    const local = I.project(project);
    const button = document.createElement('button');
    button.className = 'category-card';
    button.setAttribute('aria-label', `${I.common.view} ${local.name}`);
    button.innerHTML = `<img src="${project.image}" alt="" width="1000" height="760" loading="lazy" decoding="async"><span class="category-card-plus">+</span><span class="category-card-copy"><strong>${local.name}</strong><small>${local.location} · ${local.year}</small></span>`;
    button.onclick = () => openProject(project, button);
    button.addEventListener('pointerenter', () => window.SA_GALLERY.warm(project), { once: true });
    button.addEventListener('focus', () => window.SA_GALLERY.warm(project), { once: true });
    button.addEventListener('pointerdown', () => window.SA_GALLERY.warm(project), { passive: true, once: true });
    container.append(button);
    if (project.id === requestedProject && !dialog.open) setTimeout(() => button.click(), 0);
  });

  if (dialog.open && currentBase) openProject(currentBase, opener);
}

$('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => window.SA_DIALOG_SCROLL.unlock(opener));
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
});
$('#gallery-prev').onclick = () => move(-1);
$('#gallery-next').onclick = () => move(1);
dialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
});

(window.SA_CONTENT ? Promise.resolve(window.SA_CONTENT) : fetch('./content.json?v=20261022', { cache: 'no-store' })
  .then(response => { if (!response.ok) throw Error(); return response.json(); }))
  .then(data => {
    const madinat = data.projects.find(project => project.id === 'madinat-jumeirah-living-lamma-4');
    if (madinat) madinat.year = '2026';
    sourceData = data;
    renderProjects();
  })
  .catch(() => { $('#category-projects').innerHTML = '<p>Projects could not load. Please return and try again.</p>'; });

renderProjects();
document.addEventListener('sa:languagechange', renderProjects);
