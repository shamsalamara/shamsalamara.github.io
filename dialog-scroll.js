(() => {
  let saved;
  window.SA_DIALOG_SCROLL = {
    lock() {
      if (saved) return;
      const body = document.body;
      saved = { x: window.scrollX, y: window.scrollY, style: body.getAttribute('style') };
      body.style.position = 'fixed';
      body.style.top = `-${saved.y}px`;
      body.style.left = `-${saved.x}px`;
      body.style.width = '100%';
      body.style.overflow = 'hidden';
    },
    unlock(opener) {
      if (!saved) return;
      const previous = saved;
      saved = null;
      if (previous.style === null) document.body.removeAttribute('style');
      else document.body.setAttribute('style', previous.style);
      window.scrollTo({ left: previous.x, top: previous.y, behavior: 'instant' });
      if (opener?.isConnected) opener.focus({ preventScroll: true });
    }
  };
})();
