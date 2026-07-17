(() => {
  const statusPolicy = (rawStatus) => {
    const normalized = (rawStatus || '').trim().toLowerCase();

    if (
      normalized.includes('in progress') ||
      normalized.includes('ongoing') ||
      normalized.includes('진행중') ||
      normalized.includes('진행 중')
    ) {
      return { label: 'In Progress', dotClass: 'status-dot--in-progress' };
    }

    if (
      normalized.includes('planned') ||
      normalized.includes('upcoming') ||
      normalized.includes('진행예정') ||
      normalized.includes('진행 예정')
    ) {
      return { label: 'Planned', dotClass: 'status-dot--neutral' };
    }

    return { label: 'Complete', dotClass: 'status-dot--completed' };
  };

  const normalizeStatusCards = () => {
    document.querySelectorAll('.status-value').forEach((statusElement) => {
      const dot = statusElement.querySelector('.status-dot');
      const rawStatus = statusElement.textContent.trim();
      const policy = statusPolicy(rawStatus);

      if (dot) {
        dot.classList.remove(
          'status-dot--completed',
          'status-dot--in-progress',
          'status-dot--neutral'
        );
        dot.classList.add(policy.dotClass);
      }

      [...statusElement.childNodes].forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) node.remove();
      });
      statusElement.append(` ${policy.label}`);
    });
  };

  const projectContainer = document.querySelector('.projects-wrapper');
  const allButton = document.querySelector('[data-filter="all"]');

  if (projectContainer) {
    const observer = new MutationObserver(normalizeStatusCards);
    observer.observe(projectContainer, { childList: true, subtree: true });
  }

  requestAnimationFrame(() => {
    allButton?.click();
    normalizeStatusCards();
  });
})();
