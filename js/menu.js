function initMenu(onSectionChange) {
  const container = document.getElementById('imageScrollContainer');
  const scrollItems = document.querySelectorAll('.scroll-item');
  if (!container || !scrollItems.length) return;

  let currentSection = '';

  function checkActiveItem() {
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.top + containerRect.height / 2;

    let closestItem = null;
    let minDistance = Infinity;

    scrollItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.top + rect.height / 2;
      const distance = Math.abs(containerCenter - itemCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestItem = item;
      }
    });

    if (closestItem) {
      const sectionKey = closestItem.getAttribute('data-section');
      if (sectionKey && sectionKey !== currentSection) {
        currentSection = sectionKey;
        onSectionChange(sectionKey);
      }
    }
  }

  container.addEventListener('scroll', checkActiveItem, { passive: true });

  container.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) > 5) {
      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;
      container.scrollBy({
        top: direction * container.clientHeight,
        behavior: 'smooth'
      });
    }
  }, { passive: false });

  checkActiveItem();
}
