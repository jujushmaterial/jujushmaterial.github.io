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

  const textLabel = (statusElement) => [...statusElement.childNodes]
    .filter((node) => node.nodeType === Node.TEXT_NODE)
    .map((node) => node.textContent)
    .join('')
    .trim();

  const normalizeStatusCards = () => {
    document.querySelectorAll('.status-value').forEach((statusElement) => {
      const dot = statusElement.querySelector('.status-dot');
      const policy = statusPolicy(statusElement.textContent);
      const alreadyNormalized =
        textLabel(statusElement) === policy.label &&
        dot?.classList.contains(policy.dotClass);

      if (alreadyNormalized) return;

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

  const logicProjectUrl = 'https://jujushmaterial.github.io/logic-to-layout-tutor-portfolio/';
  const normalizeProjectLinks = () => {
    document.querySelectorAll('.project-card-link').forEach((link) => {
      const title = link.querySelector('h2')?.textContent?.trim() || '';
      if (title.includes('Logic-to-Layout')) link.href = logicProjectUrl;
    });

    document.querySelectorAll('.related-pill').forEach((link) => {
      if (link.textContent.trim() === 'Logic-to-Layout') link.href = logicProjectUrl;
    });
  };

  const projectContainer = document.querySelector('.projects-wrapper');
  const allButton = document.querySelector('[data-filter="all"]');

  if (projectContainer) {
    const observer = new MutationObserver(() => {
      normalizeStatusCards();
      normalizeProjectLinks();
    });
    observer.observe(projectContainer, { childList: true, subtree: true });
  }

  requestAnimationFrame(() => {
    allButton?.click();
    normalizeStatusCards();
    normalizeProjectLinks();
  });
})();
