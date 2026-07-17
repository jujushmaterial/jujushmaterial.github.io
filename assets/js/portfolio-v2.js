(() => {
  const projects = [
    {
      image: 'https://jujushmaterial.github.io/TCAD-Dual-Metal-Gate-MOSFET-Feasibility-Study/figures/actual/scaling/lg_0p028_gate_cap_removed.png',
      link: 'https://jujushmaterial.github.io/TCAD-Dual-Metal-Gate-MOSFET-Feasibility-Study/',
      title: 'TCAD Dual-Metal-Gate MOSFET Feasibility Study',
      technologies: ['Sentaurus', 'SProcess', 'SDevice', 'SVisual'],
      description: '2D planar nMOS TCAD test vehicle에서 source 측 low-work-function gate와 drain 측 high-work-function gate를 분리해 Work-Function Split의 물리적 영향을 검증한 프로젝트입니다.',
      categories: ['featured', 'tcad']
    },
    {
      image: 'https://jujushmaterial.github.io/TCAD-pMOS-process-optimization/figures/overview/pmos_final_structure.png',
      link: 'https://jujushmaterial.github.io/TCAD-pMOS-process-optimization/',
      title: 'TCAD pMOS Process Optimization',
      technologies: ['Sentaurus', 'SProcess', 'SDevice', 'SVisual'],
      description: '기존 SimpleMOS nMOS 예제를 pMOS 공정으로 변환하고 LDD, Source/Drain, RTA, Spacer 조건을 최적화한 TCAD 프로젝트입니다.',
      categories: ['featured', 'tcad']
    },
    {
      image: 'https://jujushmaterial.github.io/vivado-traffic-signal-controller/images/simulation_full.png',
      link: 'https://jujushmaterial.github.io/vivado-traffic-signal-controller/',
      title: 'Vivado Verilog Traffic Signal Controller',
      technologies: ['Vivado', 'Verilog', 'FSM'],
      description: 'Verilog와 Vivado를 이용해 Emergency Mode, Country Road Green Time Limit, Night OFF Mode를 구현하고 behavioral simulation으로 검증한 프로젝트입니다.',
      categories: ['featured', 'digital']
    },
    {
      image: 'https://img.youtube.com/vi/6UpYdEnMlKQ/hqdefault.jpg',
      link: 'https://github.com/jujushmaterial/logic-to-layout-tutor-portfolio',
      title: 'Logic-to-Layout AI Tutor',
      technologies: ['HTML', 'CSS', 'JavaScript', 'OpenAI API'],
      description: 'Truth Table, Gate Circuit, CMOS Schematic, Layout으로 이어지는 디지털 논리 학습 과정을 하나의 인터랙티브 웹앱으로 구현한 프로젝트입니다.',
      categories: ['featured', 'digital', 'aiweb']
    }
  ];

  const container = document.querySelector('.projects-wrapper');
  const filterButtons = document.querySelectorAll('[data-filter]');

  const projectCard = (project) => `
    <div class="wrapper">
      <a class="project-card-link" href="${project.link}" aria-label="${project.title} 프로젝트 페이지 열기">
        <div class="card radius">
          <div class="card__image">
            <img src="${project.image}" alt="${project.title} representative image" loading="lazy">
          </div>
          <div class="card__content card__padding">
            <article class="card__article">
              <h2>${project.title}</h2>
              <p class="paragraph-text-normal">${project.description}</p>
            </article>
            <div class="card__meta">
              ${project.technologies.map((tech) => `<span class="project-technology paragraph-text-normal">${tech}</span>`).join('')}
            </div>
          </div>
        </div>
      </a>
    </div>`;

  const renderProjects = (filter = 'featured') => {
    filterButtons.forEach((button) => button.classList.toggle('white-button-hover', button.dataset.filter === filter));
    const visible = filter === 'all' ? projects : projects.filter((project) => project.categories.includes(filter));
    container.style.opacity = '0';
    window.setTimeout(() => {
      container.innerHTML = visible.map(projectCard).join('');
      container.style.opacity = '1';
    }, 120);
  };

  filterButtons.forEach((button) => button.addEventListener('click', () => renderProjects(button.dataset.filter)));
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  container.style.transition = 'opacity .18s ease';
  renderProjects('featured');
})();
