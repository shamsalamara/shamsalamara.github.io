(() => {
  const cache = new Map();
  let requestId = 0;
  const source = (project, index) => window.innerWidth <= 700
    ? (project.galleryMobile?.[index] || project.gallery[index])
    : project.gallery[index];
  function load(src, priority = 'low') {
    if (cache.has(src)) {
      const entry = cache.get(src);
      if (priority === 'high') entry.image.fetchPriority = 'high';
      return entry.promise;
    }
    const image = new Image();
    image.decoding = 'async';
    image.fetchPriority = priority;
    const promise = new Promise((resolve, reject) => {
      image.onload = () => resolve(src);
      image.onerror = () => { cache.delete(src); reject(new Error('Image unavailable')); };
    });
    cache.set(src, { image, promise });
    image.src = src;
    return promise;
  }
  window.SA_GALLERY = {
    warm(project) { load(source(project, 0)).catch(() => {}); },
    show(image, project, index) {
      const id = ++requestId;
      if (image.dataset.project !== project.id) image.src = project.image;
      image.dataset.project = project.id;
      image.setAttribute('aria-busy', 'true');
      image.fetchPriority = 'high';
      load(source(project, index), 'high').then(src => {
        if (id !== requestId) return;
        image.src = src;
        image.setAttribute('aria-busy', 'false');
        if (project.gallery.length > 1) {
          load(source(project, (index + 1) % project.gallery.length)).catch(() => {});
        }
      }).catch(() => {
        if (id === requestId) image.setAttribute('aria-busy', 'false');
      });
    }
  };
})();
