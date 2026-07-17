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
  const isLogicProjectLink = (link) => {
    const title = link.querySelector('h2')?.textContent?.trim() || '';
    const label = link.textContent?.trim() || '';
    const href = link.getAttribute('href') || '';
    return (
      title.includes('Logic-to-Layout') ||
      label === 'Logic-to-Layout' ||
      href.includes('logic-to-layout-tutor')
    );
  };

  const normalizeProjectLinks = () => {
    document.querySelectorAll('.project-card-link, .related-pill').forEach((link) => {
      if (isLogicProjectLink(link)) link.href = logicProjectUrl;
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

  document.addEventListener('click', (event) => {
    const link = event.target.closest('.project-card-link, .related-pill');
    if (!link || !isLogicProjectLink(link)) return;
    event.preventDefault();
    window.location.assign(logicProjectUrl);
  }, true);

  requestAnimationFrame(() => {
    allButton?.click();
    normalizeStatusCards();
    normalizeProjectLinks();
  });
})();