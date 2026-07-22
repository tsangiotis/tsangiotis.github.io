(() => {
  const box = document.querySelector('.lightbox');
  const items = [...document.querySelectorAll('.gallery__item')];
  if (!box || !items.length) return;

  const img = box.querySelector('.lightbox__img');
  const counter = box.querySelector('.lightbox__counter');
  let idx = 0;

  const show = (i) => {
    idx = (i + items.length) % items.length;
    img.src = items[idx].href;
    img.alt = items[idx].querySelector('img').alt;
    counter.textContent = `${idx + 1} / ${items.length}`;
  };

  items.forEach((a, i) =>
    a.addEventListener('click', (e) => {
      e.preventDefault();
      show(i);
      box.showModal();
    })
  );
  box.querySelector('.lightbox__close').addEventListener('click', () => box.close());
  box.querySelector('.lightbox__nav--prev').addEventListener('click', () => show(idx - 1));
  box.querySelector('.lightbox__nav--next').addEventListener('click', () => show(idx + 1));
  box.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') show(idx + 1);
    if (e.key === 'ArrowLeft') show(idx - 1);
  });
  box.addEventListener('click', (e) => {
    if (e.target === box) box.close();
  });
})();
