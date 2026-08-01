(() => {
  'use strict';

  const experiences = [
    {
      image: 'https://jujushmaterial.github.io/2026-Summer-Annual-Conference-of-ISE/assets/images/ise-logo.png?v=20260718-1',
      imageClass: 'experience-card-image--ise',
      fallback: 'ISE',
      link: 'https://jujushmaterial.github.io/2026-Summer-Annual-Conference-of-ISE/',
      title: '2026 반도체공학회 하계종합학술대회',
      period: '2026.07.14–2026.07.17',
      status: 'Complete',
      role: 'Presenter',
      description: 'Dual-Metal Gate MOSFET 연구를 발표하고, 공정 구현과 계면 상태 분석에 관한 피드백을 받은 학회 참가 기록입니다.',
      categories: ['major']
    },
    {
      image: 'assets/images/experience/frame-logo.jpg?v=20260718-2',
      imageClass: '',
      fallback: 'FRAME',
      link: 'https://jujushmaterial.github.io/FRAME-Photo-Club-President-Experience/',
      title: 'FRAME 사진동아리 회장',
      period: '2026.07.01–Present',
      status: 'In Progress',
      role: 'President',
      description: '숭실대학교 중앙 사진동아리 FRAME의 2026학년도 2학기 회장 활동을 기록하고 있습니다.',
      categories: ['extracurricular']
    },
    {
      image: 'https://raw.githubusercontent.com/jujushmaterial/jujushmaterial.github.io/main/assets/images/experience/intelligent-robot-camp-card.jpg?v=20260802-2',
      imageClass: 'experience-card-image--camp',
      fallback: 'CAMP',
      link: 'https://jujushmaterial.github.io/2026-Intelligent-Robot-Creative-Convergence-Camp/',
      title: '2026 지능형 로봇 산업분야 컨소시엄 창의융합캠프',
      period: '2026.06.24–2026.06.26',
      status: 'Complete',
      role: 'Team Member',
      description: '장호원 현장조사와 주민 인터뷰를 바탕으로 문제를 재정의하고, 건설현장 안전 로봇 ‘철통이’ 콘셉트와 시뮬레이션을 제안해 은상·전체 3위를 수상한 팀 프로젝트입니다.',
      categories: ['extracurricular']
    }
  ];

  const container = document.querySelector('.experience-list');
  const filterButtons = document.querySelectorAll('[data-experience-filter]');
  if (!container) return;

  const statusType = (status) => {
    const normalized = status.toLowerCase();
    if (normalized.includes('in progress') || normalized.includes('ongoing') || normalized.includes('진행')) return 'in-progress';
    if (normalized.includes('planned') || normalized.includes('upcoming') || normalized.includes('예정')) return 'neutral';
    return 'completed';
  };

  const experienceCard = (experience) => `
    <div class="project-wrapper experience-wrapper">
      <a class="project-card-link experience-card-link" href="${experience.link}" aria-label="${experience.title} Experience 페이지 열기">
        <article class="card experience-project-card">
          <div class="card__image experience-card-image image-fallback ${experience.imageClass}" data-fallback="${experience.fallback}">
            <img src="${experience.image}" alt="${experience.title} 대표 이미지" loading="lazy" onerror="this.hidden=true;this.parentElement.classList.add('is-fallback')">
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
      container.innerHTML = '<div class="experience-filter-empty"><p>해당 분류에 공개된 Experience가 아직 없습니다.</p></div>';
      return;
    }

    container.innerHTML = visible.map(experienceCard).join('');
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => renderExperiences(button.dataset.experienceFilter));
  });

  renderExperiences('all');
})();