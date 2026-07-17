(() => {
  const projects = [
    {
      image: 'https://jujushmaterial.github.io/TCAD-Dual-Metal-Gate-MOSFET-Feasibility-Study/figures/actual/scaling/lg_0p10_gate_cap_removed.png',
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
      image: 'https://jujushmaterial.github.io/TCAD-pMOS-process-optimization/figures/overview/pmos_process_flow_13_steps.png',
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
      image: 'data:image/webp;base64,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',
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
