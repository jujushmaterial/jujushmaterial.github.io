(() => {
  'use strict';

  const experiences = [
    {
      image: 'assets/images/experience/frame-logo.svg',
      link: 'https://jujushmaterial.github.io/FRAME-Photo-Club-President-Experience/',
      title: 'FRAME Photo Club President',
      period: '2026.07.01–Present',
      status: 'In Progress',
      role: 'President',
      description: '숭실대학교 중앙 사진동아리 FRAME의 회장으로서 회장직 인수인계, 운영체계 점검, 총회, 회칙 개정 및 주요 활동을 기록하고 있습니다.',
      categories: ['extracurricular']
    }
  ];

  const container = document.querySelector('.experience-list');
  const filterButtons = document.querySelectorAll('[data-experience-filter]');
  if (!container) return;

  const statusType = (status) => {
    const normalized = status.toLowerCase();
    if (normalized.includes('in progress') || normalized.includes('ongoing') || normalized.includes('진행')) {
      return 'in-progress';
    }
    if (normalized.includes('planned') || normalized.includes('upcoming') || normalized.includes('예정')) {
      return 'neutral';
    }
    return 'completed';
  };

  const experienceCard = (experience) => `
    <div class="project-wrapper experience-wrapper">
      <a class="project-card-link experience-card-link" href="${experience.link}" aria-label="${experience.title} Experience 페이지 열기">
        <article class="card experience-project-card">
          <div class="card__image experience-card-image">
            <img src="${experience.image}" alt="${experience.title} representative image" loading="lazy">
          </div>
          <div class="card__content">
            <div class="card__article">
              <h2>${experience.title}</h2>
              <p>${experience.description}</p>
            </div>
            <table class="project-info" aria-label="${experience.title} 기본 정보">
              <tbody>
                <tr><th>Period</th><td>${experience.period}</td></tr>
                <tr>
                  <th>Status</th>
                  <td>
                    <span class="status-value">
                      <span class="status-dot status-dot--${statusType(experience.status)}" aria-hidden="true"></span>
                      ${experience.status}
                    </span>
                  </td>
                </tr>
                <tr><th>Role</th><td>${experience.role}</td></tr>
              </tbody>
            </table>
          </div>
        </article>
      </a>
    </div>`;

  const renderExperiences = (filter = 'all') => {
    filterButtons.forEach((button) => {
      button.classList.toggle('is-active', button.dataset.experienceFilter === filter);
    });

    const visible = filter === 'all'
      ? experiences
      : experiences.filter((experience) => experience.categories.includes(filter));

    if (!visible.length) {
      container.innerHTML = `
        <div class="experience-filter-empty">
          <p>해당 분류에 공개된 Experience가 아직 없습니다.</p>
        </div>`;
      return;
    }

    container.innerHTML = visible.map(experienceCard).join('');
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => renderExperiences(button.dataset.experienceFilter));
  });

  renderExperiences('all');
})();