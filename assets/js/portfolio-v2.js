(() => {
  const projects = [
    {
      image: 'https://jujushmaterial.github.io/TCAD-Dual-Metal-Gate-MOSFET-Feasibility-Study/figures/actual/scaling/lg_0p028_gate_cap_removed.png',
      link: 'https://jujushmaterial.github.io/TCAD-Dual-Metal-Gate-MOSFET-Feasibility-Study/',
      title: 'TCAD Dual-Metal-Gate MOSFET Feasibility Study',
      shortTitle: 'DMG MOSFET',
      period: '2026.03–2026.07',
      status: 'Conference Presented',
      tools: 'Sentaurus Workbench · SProcess · SDevice · SVisual',
      description: '2D planar nMOS TCAD test vehicle에서 source 측 low-work-function gate와 drain 측 high-work-function gate를 분리해 Work-Function Split의 물리적 영향을 검증한 프로젝트입니다.',
      categories: ['featured', 'tcad'],
      skills: ['Semiconductor Devices', 'Semiconductor Processes', 'Sentaurus TCAD']
    },
    {
      image: 'https://jujushmaterial.github.io/TCAD-pMOS-process-optimization/figures/overview/pmos_final_structure.png',
      link: 'https://jujushmaterial.github.io/TCAD-pMOS-process-optimization/',
      title: 'TCAD pMOS Process Optimization',
      shortTitle: 'pMOS Optimization',
      period: '2026.03–2026.06',
      status: 'Completed',
      tools: 'Sentaurus Workbench · SProcess · SDevice · SVisual',
      description: '기존 SimpleMOS nMOS 예제를 pMOS 공정으로 변환하고 LDD, Source/Drain, RTA, Spacer 조건을 최적화한 TCAD 프로젝트입니다.',
      categories: ['featured', 'tcad'],
      skills: ['Semiconductor Devices', 'Semiconductor Processes', 'Sentaurus TCAD']
    },
    {
      image: 'https://jujushmaterial.github.io/vivado-traffic-signal-controller/images/simulation_full.png',
      link: 'https://jujushmaterial.github.io/vivado-traffic-signal-controller/',
      title: 'Vivado Verilog Traffic Signal Controller',
      shortTitle: 'Traffic Signal',
      period: '2026.05',
      status: 'Completed',
      tools: 'Vivado 2025.2 · Verilog',
      description: 'Verilog와 Vivado를 이용해 Emergency Mode, Country Road Green Time Limit, Night OFF Mode를 구현하고 behavioral simulation으로 검증한 프로젝트입니다.',
      categories: ['featured', 'digital'],
      skills: ['Vivado / Verilog']
    },
    {
      image: 'https://img.youtube.com/vi/6UpYdEnMlKQ/hqdefault.jpg',
      link: 'https://github.com/jujushmaterial/logic-to-layout-tutor-portfolio',
      title: 'Logic-to-Layout AI Tutor',
      shortTitle: 'Logic-to-Layout',
      period: '2026.06–2026.07',
      status: 'Completed',
      tools: 'HTML · CSS · JavaScript · Vercel · Supabase · OpenAI API',
      description: 'Truth Table, Gate Circuit, CMOS Schematic, Layout으로 이어지는 디지털 논리 학습 과정을 하나의 인터랙티브 웹앱으로 구현한 프로젝트입니다.',
      categories: ['featured', 'digital', 'aiweb'],
      skills: ['HTML / CSS / JavaScript', 'AI-Assisted Development']
    }
  ];

  /*
   * 경험을 추가할 때 title, shortTitle, period, description, link, skills를 입력합니다.
   * project 또는 experience의 skills 값은 Skills 페이지에 자동으로 반영됩니다.
   */
  const experiences = [];

  const skills = [
    'Semiconductor Devices',
    'Semiconductor Processes',
    'Materials Engineering',
    'Sentaurus TCAD',
    'Python',
    'Vivado / Verilog',
    'HTML / CSS / JavaScript',
    'AI-Assisted Development'
  ];

  const statusType = (status) => {
    const normalized = status.toLowerCase();
    if (normalized.includes('in progress') || normalized.includes('ongoing') || normalized.includes('진행')) {
      return 'in-progress';
    }
    if (
      normalized.includes('completed') ||
      normalized.includes('complete') ||
      normalized.includes('conference presented') ||
      normalized.includes('완료')
    ) {
      return 'completed';
    }
    return 'neutral';
  };

  const projectContainer = document.querySelector('.projects-wrapper');
  const filterButtons = document.querySelectorAll('[data-filter]');

  const projectCard = (project) => `
    <div class="project-wrapper">
      <a class="project-card-link" href="${project.link}" aria-label="${project.title} 프로젝트 페이지 열기">
        <article class="card">
          <div class="card__image">
            <img src="${project.image}" alt="${project.title} representative image" loading="lazy">
          </div>
          <div class="card__content">
            <div class="card__article">
              <h2>${project.title}</h2>
              <p>${project.description}</p>
            </div>
            <table class="project-info" aria-label="${project.title} 기본 정보">
              <tbody>
                <tr><th>Period</th><td>${project.period}</td></tr>
                <tr>
                  <th>Status</th>
                  <td>
                    <span class="status-value">
                      <span class="status-dot status-dot--${statusType(project.status)}" aria-hidden="true"></span>
                      ${project.status}
                    </span>
                  </td>
                </tr>
                <tr><th>Tools</th><td>${project.tools}</td></tr>
              </tbody>
            </table>
          </div>
        </article>
      </a>
    </div>`;

  const renderProjects = (filter = 'featured') => {
    if (!projectContainer) return;
    filterButtons.forEach((button) => {
      button.classList.toggle('is-active', button.dataset.filter === filter);
    });
    const visible = filter === 'all'
      ? projects
      : projects.filter((project) => project.categories.includes(filter));
    projectContainer.innerHTML = visible.map(projectCard).join('');
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => renderProjects(button.dataset.filter));
  });
  renderProjects('featured');

  const skillList = document.querySelector('.skills-list');
  if (skillList) {
    skillList.innerHTML = skills.map((skill) => {
      const relatedProjects = projects
        .filter((project) => project.skills.includes(skill))
        .map((project) => `<a class="related-pill related-pill--project" href="${project.link}">${project.shortTitle}</a>`);
      const relatedExperiences = experiences
        .filter((experience) => experience.skills.includes(skill))
        .map((experience) => `<a class="related-pill related-pill--experience" href="${experience.link}">${experience.shortTitle}</a>`);
      const relatedItems = [...relatedProjects, ...relatedExperiences];

      return `
        <div class="skill-row${relatedItems.length ? '' : ' skill-row--empty'}">
          <div class="skill-row__title">${skill}</div>
          ${relatedItems.length ? `<div class="skill-related" aria-label="${skill} 관련 포트폴리오 항목">${relatedItems.join('')}</div>` : ''}
        </div>`;
    }).join('');
  }

  const experienceContainer = document.querySelector('.experience-list');
  if (experienceContainer) {
    if (!experiences.length) {
      experienceContainer.innerHTML = `
        <div class="empty-state">
          <h2>Experience</h2>
          <p>현재 공개한 경험 항목은 아직 추가하지 않았습니다.</p>
          <p>자료를 정리한 뒤 이 페이지에 하나씩 추가합니다.</p>
        </div>`;
    } else {
      experienceContainer.innerHTML = experiences.map((experience) => `
        <a class="experience-card" href="${experience.link}">
          <h2>${experience.title}</h2>
          <p>${experience.period}</p>
          <p>${experience.description}</p>
        </a>`).join('');
    }
  }
})();
