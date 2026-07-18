(() => {
  'use strict';

  const container = document.querySelector('.experience-list');
  if (!container) return;

  const experienceUrl = 'https://jujushmaterial.github.io/FRAME-Photo-Club-President-Experience/';
  const logoUrl = `${experienceUrl}assets/images/frame-logo.svg`;

  container.innerHTML = `
    <a class="experience-card experience-card--frame" href="${experienceUrl}" aria-label="FRAME Photo Club President Experience 페이지 열기">
      <div class="experience-card__visual">
        <img src="${logoUrl}" alt="FRAME photo club logo" loading="lazy">
      </div>
      <div class="experience-card__body">
        <p class="experience-card__eyebrow">ORGANIZATION MANAGEMENT · GOVERNANCE · PHOTO CLUB</p>
        <h2>FRAME Photo Club President</h2>
        <p class="experience-card__description">숭실대학교 중앙 사진동아리 FRAME의 회장으로서 회장직 인수인계, 운영체계 점검, 총회, 회칙 개정 및 주요 활동을 기록하고 있습니다.</p>
        <div class="experience-card__meta" aria-label="FRAME experience information">
          <div><span>Period</span><strong>2026.07.01–Present</strong></div>
          <div><span>Status</span><strong class="experience-status">In Progress</strong></div>
          <div><span>Role</span><strong>President</strong></div>
        </div>
        <span class="experience-card__more">Experience Timeline 보기</span>
      </div>
    </a>`;
})();
