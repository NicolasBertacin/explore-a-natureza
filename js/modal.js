function initModal() {
  const modal = document.getElementById('natureModal');
  const modalImg = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const closeBtn = document.getElementById('closeModalBtn');
  const scrollImages = document.querySelectorAll('.scroll-item img');

  if (!modal) return;

  scrollImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      if (modalImg) modalImg.src = img.src;
      if (modalTitle) modalTitle.textContent = img.alt || 'Explore a Natureza';
      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}
