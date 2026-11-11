const serviceConfig = {
  architecture: { icon: 'assets/service-architecture.webp', anchor: 'architecture' },
  interior: { icon: 'assets/service-interior.webp', anchor: 'interior' },
  urban: { icon: 'assets/service-urban.webp', anchor: 'urban' },
  landscape: { icon: 'assets/service-landscape-v2.webp', anchor: 'landscape' },
  renovation: { icon: 'assets/service-renovation.webp', anchor: 'interior' },
  consultation: { icon: 'assets/service-consultation.webp', anchor: 'architecture' }
};

const key = new URLSearchParams(location.search).get('service') || 'architecture';
const config = serviceConfig[key] || serviceConfig.architecture;
const $ = selector => document.querySelector(selector);

function applyServiceLanguage() {
  const I = window.SA_I18N;
  const [title, kicker, paragraphs] = I.service(key) || I.service('architecture');
  document.title = `${title} — Shams Al Amara`;
  $('.detail-back').childNodes[0].nodeValue = `${I.common.back} `;
  $('.service-detail-visual .eyebrow').textContent = I.common.designPractice;
  $('#service-kicker').textContent = kicker;
  $('#service-title').textContent = title;
  $('#service-description').innerHTML = paragraphs.map(text => `<p>${text}</p>`).join('');
  $('#service-projects').textContent = I.common.explore;
  $('#service-projects').href = `projects.html?category=${config.anchor}`;
}

$('#service-icon').src = config.icon;
applyServiceLanguage();
document.addEventListener('sa:languagechange', applyServiceLanguage);
