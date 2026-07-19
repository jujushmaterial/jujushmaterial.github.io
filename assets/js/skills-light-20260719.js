(() => {
  'use strict';

  const summaries = {
    'Semiconductor Devices': 'MOSFET · Short-Channel Effects · Leakage Current · Device Physics',
    'Semiconductor Processes': 'Doping · Oxidation · Annealing · Process Integration',
    'Materials Engineering': 'Thin Films · Crystal Structure · Materials Characterization',
    'Sentaurus TCAD': 'Workbench · SProcess · SDevice · SVisual',
    'Python': 'Data Processing · Automation · Visualization',
    'Vivado / Verilog': 'RTL Design · Finite-State Machines · Behavioral Simulation',
    'HTML / CSS / JavaScript': 'Portfolio Websites · Interactive Web Applications',
    'AI-Assisted Development': 'Requirement Design · Code Review · Iterative Development'
  };

  const skillRows = document.querySelectorAll('.skills-list .skill-row');

  skillRows.forEach((row) => {
    const title = row.querySelector('.skill-row__title');
    if (!title || row.querySelector('.skill-row__summary')) return;

    const summary = document.createElement('p');
    summary.className = 'skill-row__summary';
    summary.textContent = summaries[title.textContent.trim()] || 'Related knowledge and portfolio experience';
    title.insertAdjacentElement('afterend', summary);
  });
})();
