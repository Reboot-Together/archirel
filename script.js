const projects = {
  albumtag: {
    title: 'AlbumTag', category: '01 / PRODUCT CONCEPT', relation: 'Memory × Media',
    summary: '사진 파일을 보관하는 일을 넘어, 사진에 담긴 사람과 장소, 기억을 다시 찾는 도구를 구상합니다.',
    status: '현재 단계: 제품 구상 · 아래 내용은 개발 방향이며, 제공 중인 기능이 아닙니다.',
    sections: [['Problem', '사진은 쌓이지만, 기억은 폴더와 촬영 날짜만으로 정리되지 않습니다. 누구와 어디에서 보냈던 순간인지가 사진을 찾는 더 자연스러운 단서일 수 있습니다.'], ['Relations', '사진 ↔ 기억 ↔ 사람 ↔ 장소. 하나의 사진에 여러 맥락을 연결하고, 같은 맥락에 속한 사진을 함께 탐색합니다.'], ['Structure', '태그와 관계를 중심으로 사진을 조직하고, 사용자가 기억하는 단서에서 원하는 장면으로 이어지는 흐름을 설계하려 합니다.'], ['Next', '사진을 추가하고 맥락을 붙인 뒤 다시 찾는 핵심 흐름부터 검증할 계획입니다.']]
  },
  calendar: {
    title: 'Calendar-it', category: '02 / PRODUCT CONCEPT', relation: 'Event × Time',
    summary: '일정을 날짜 위에 놓는 것을 넘어, 사건과 프로젝트가 이어지는 맥락을 볼 수 있는 일정 도구를 구상합니다.',
    status: '현재 단계: 제품 구상 · 카드의 달력은 화면 콘셉트입니다.',
    sections: [['Problem', '일정이 개별 항목으로 흩어지면, 어떤 프로젝트의 일부인지와 앞뒤 작업의 흐름을 한눈에 파악하기 어렵습니다.'], ['Relations', '사건 ↔ 시간 ↔ 프로젝트 ↔ 사람. 같은 프로젝트에 속하는 일과 서로 영향을 주는 일정을 함께 바라봅니다.'], ['Structure', '달력의 익숙한 탐색 방식에 프로젝트의 맥락을 더해, 시간과 작업의 흐름을 함께 읽을 수 있는 구조를 탐구합니다.'], ['Next', '일정을 만들고 프로젝트에 연결하는 기본 흐름을 먼저 검증하려 합니다.']]
  },
  asterism: {
    title: 'Asterism', category: '03 / PRODUCT CONCEPT', relation: 'Knowledge × Knowledge',
    summary: '개별 노트를 별처럼, 지식 사이의 관계를 성좌처럼 탐색하는 개인 지식관리 도구를 구상합니다.',
    status: '현재 단계: 제품 구상 · 카드의 그래프는 개념을 설명하는 예시입니다.',
    sections: [['Problem', '노트를 많이 남겨도 서로 어떤 관련이 있는지 찾지 못하면, 저장한 지식을 새로운 생각으로 이어가기 어렵습니다.'], ['Relations', '노트 ↔ 노트 ↔ 태그 ↔ 문서. 지식의 연결을 따라가며 별개로 보였던 생각 사이에서 새로운 맥락을 발견합니다.'], ['Structure', '노트와 연결 관계를 그래프로 표현합니다. 별과 성좌의 시각언어는 Asterism 고유의 탐색 경험에 사용합니다.'], ['Next', '노트 작성, 노트 간 연결, 연결된 노트 탐색을 중심으로 첫 사용 흐름을 검증하려 합니다.']]
  },
  syntax: {
    title: 'Space Syntax Revisited', category: '04 / COMPUTATIONAL DESIGN', relation: 'Space × Movement × Graph',
    summary: '과거 Grasshopper로 구현했던 Space Syntax를 Python과 웹 기반의 분석 도구로 다시 탐구하려는 프로젝트입니다.',
    status: '현재 단계: 재구현 구상 · 과거 Grasshopper 구현 경험을 바탕으로 합니다.',
    sections: [['Problem', '평면의 형태만으로는 공간 사이의 연결과 이동의 특성을 충분히 설명하기 어렵습니다. 공간을 관계의 구조로 읽는 방법을 탐구합니다.'], ['Relations', '공간을 노드로, 연결을 엣지로 다룹니다. 공간의 연결성, 깊이, 통합도 등을 통해 평면을 다른 관점으로 읽습니다.'], ['Structure', '평면 입력 → 공간 노드화 → 인접 그래프 생성 → 지표 계산 → 그래프와 히트맵 시각화의 흐름을 구상합니다.'], ['Next', '작은 평면 예제에서 그래프와 지표를 검증한 뒤, 인터랙티브 웹 도구로 확장할 계획입니다. 현재 시안의 도식은 분석 결과가 아닙니다.']]
  },
  shipyard: {
    title: 'Shipyard Scheduling', category: '05 / DATA & PRODUCTION', relation: 'Process × Space × Time',
    summary: '조선 블록 처리기간과 스케줄링 프로젝트 경험을 바탕으로, 생산 공정을 관계의 관점에서 정리합니다.',
    status: '현재 단계: 기존 프로젝트 정리 예정 · 실제 결과와 역할은 자료 확인 후 추가합니다.',
    sections: [['Problem', '생산 일정은 작업 시간뿐 아니라 선행작업, 작업 공간, 설비와 자재 등 여러 조건의 영향을 받습니다.'], ['Relations', '작업 ↔ 선행작업 ↔ 시간 ↔ 공간 ↔ 자원. 개별 작업을 넘어 공정 전체의 흐름과 제약을 바라봅니다.'], ['Structure', '관계 파악 → 데이터화 → 분석과 예측 → 계획 검토의 흐름으로 기존 작업을 정리하려 합니다.'], ['Next', '사용 데이터, 본인 역할, 분석 방법과 실제 결과를 확인해 상세 사례로 작성할 예정입니다. 카드의 일정 도식은 설명용 예시이며 실측 데이터가 아닙니다.']]
  }
};

projects.weather = {
  title: 'Construction Weather', category: 'PROJECT / CONCEPT', relation: 'Process × Weather × Risk',
  summary: '날씨와 공정 사이의 관계를 연결해, 작업 조건과 현장 위험을 함께 이해하는 도구를 구상합니다.',
  status: '현재 단계: 프로젝트 구상 · 메인 화면은 방향을 표현하는 시안입니다.',
  sections: [['Problem', '날씨 변화는 현장의 작업 가능 여부와 일정, 안전에 영향을 줍니다.'], ['Relations', '날씨 ↔ 작업 조건 ↔ 공정 ↔ 위험. 흩어진 정보를 하나의 판단 맥락으로 연결하려 합니다.'], ['Next', '구체적인 대상 공정과 데이터를 정한 뒤, 날씨와 작업 조건을 함께 보는 화면부터 검증할 예정입니다.']]
};
projects.more = {
  title: 'More Relations', category: 'PROJECTS / EXPLORATIONS', relation: 'Space × Data × Software',
  summary: '건축, 수학, 데이터와 소프트웨어 사이에서 더 많은 관계를 탐험합니다.',
  status: '진행 방향: 기존 경험을 정리하고 새로운 프로젝트를 구상하고 있습니다.',
  sections: [['Space Syntax', '과거 Grasshopper로 구현했던 공간 그래프 분석을 Python과 웹으로 다시 탐구하려 합니다.'], ['Production', '공간의 연결성과 생산 공정의 선후행, 시간을 함께 다루는 Spatial Production Syntax를 구상합니다.'], ['Archive', '건축과 Computational Design, 교육과정의 데이터 분석 작업을 차례로 정리할 예정입니다.']]
};
projects.about = {
  title: 'Architecture of Relations', category: 'ABOUT ARCHIREL', relation: 'ARCHI + REL',
  summary: 'ARCHIREL은 건축적 사고방식으로 관계를 발견하고 조직하는 개인의 작업 허브입니다.',
  status: '건축 → Computational Design → 데이터와 소프트웨어',
  sections: [['Perspective', '건축에서 개별 객체뿐 아니라 그 사이의 공간과 동선을 설계했듯, 정보와 시간, 지식과 시스템 사이의 관계를 설계합니다.'], ['Background', '수학과 건축, Grasshopper 알고리즘 구현, 해양 경험을 거쳐 현재는 조선 생산관리와 데이터·디지털 기술의 연결을 탐구하고 있습니다.'], ['Direction', '작은 앱과 실제 프로젝트를 축적하며 ARCHIREL의 의미를 함께 만들어 갑니다.']]
};

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(expanded));
  navigation.classList.toggle('is-open', expanded);
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuToggle.focus();
  }
});
matchMedia('(min-width: 561px)').addEventListener('change', closeMenu);

const dialog = document.querySelector('#project-dialog');
const closeButton = dialog.querySelector('.dialog-close');
let previousFocus;
let savedOverflow;
document.querySelectorAll('[data-project]').forEach(card => {
  card.addEventListener('click', () => {
    const project = projects[card.dataset.project];
    if (!project) return;
    for (const field of ['title', 'category', 'relation', 'summary', 'status']) {
      document.querySelector(`#dialog-${field}`).textContent = project[field];
    }
    const sections = project.sections.map(([title, text]) => {
      const section = document.createElement('section');
      section.className = 'dialog-section';
      const heading = document.createElement('h3');
      heading.textContent = title;
      const paragraph = document.createElement('p');
      paragraph.textContent = text;
      section.append(heading, paragraph);
      return section;
    });
    document.querySelector('#dialog-sections').replaceChildren(...sections);
    previousFocus = card;
    savedOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    dialog.scrollTop = 0;
    closeButton.focus({ preventScroll: true });
  });
});
closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.style.overflow = savedOverflow || '';
  previousFocus?.focus({ preventScroll: true });
});

// The header follows the current section's light or dark surface.
const header = document.querySelector('.site-header');
const overview = document.querySelector('#overview');
const about = document.querySelector('#about');
function updateHeader() {
  const position = header.offsetHeight + 4;
  header.classList.toggle('on-light', overview.getBoundingClientRect().top <= position && about.getBoundingClientRect().top > position);
}
window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('resize', updateHeader);
updateHeader();

// Fixed compositions follow the two opening frames of the supplied mockup.
const dots = [[.094,.32,1.5],[.302,.243,1.5],[.353,.347,2.2],[.635,.267,2],
  [.866,.394,1.5],[.795,.578,2.4],[.706,.637,1.5],[.908,.895,1.5],
  [.565,.949,1],[.086,.733,1.7],[.261,.71,2.2],[.118,.512,1.6],
  [.707,.226,.9],[.862,.722,.9],[.399,.642,.7]];
const nodes = [[.235,.322,4.1],[.588,.129,4.5],[.892,.42,4.9],[.766,.764,4.5],
  [.168,.697,5.3],[.182,.195,3],[.353,.276,2.5],[.937,.283,3.9],
  [.951,.627,2.4],[.202,.89,3.6],[.935,.906,3.5],[.028,.852,2.7],
  [.079,.237,2.7],[.036,.654,2.4],[.495,.026,2],[.557,.885,1.5]];
const edges = [[0,1],[1,2],[2,3],[3,4],[4,0],[0,5],[0,6],[1,6],[2,7],[2,8],
  [3,8],[3,10],[3,15],[4,9],[4,11],[4,13],[0,12],[1,14],[5,12],[9,15]];
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const scenes = [
  { canvas: document.querySelector('#intro-canvas'), points: dots, network: false, visible: true },
  { canvas: document.querySelector('#relation-canvas'), points: nodes, network: true, visible: false }
];
function resizeScene(scene) {
  const bounds = scene.canvas.getBoundingClientRect();
  scene.width = bounds.width;
  scene.height = bounds.height;
  const ratio = Math.min(devicePixelRatio || 1, 2);
  scene.canvas.width = Math.round(bounds.width * ratio);
  scene.canvas.height = Math.round(bounds.height * ratio);
  scene.context = scene.canvas.getContext('2d');
  scene.context?.setTransform(ratio, 0, 0, ratio, 0, 0);
}
function drawScene(scene, time = 0) {
  const ctx = scene.context;
  if (!ctx) return;
  const w = scene.width, h = scene.height;
  ctx.clearRect(0, 0, w, h);
  const scale = Math.min(w / 512, h / 364);
  const drift = reducedMotion.matches ? 0 : Math.sin(time / 9000) * 3;
  const points = scene.points.map(([x, y, radius], index) => [x * w + drift * Math.sin(index), y * h + drift * Math.cos(index), radius * Math.max(.8, scale)]);
  if (scene.network) {
    edges.forEach(([a, b], index) => {
      ctx.beginPath();
      ctx.moveTo(points[a][0], points[a][1]);
      ctx.lineTo(points[b][0], points[b][1]);
      ctx.strokeStyle = index < 5 ? 'rgba(180,191,200,.25)' : 'rgba(124,140,152,.09)';
      ctx.lineWidth = index < 5 ? .8 : 1.3;
      ctx.stroke();
    });
  }
  points.forEach(([x, y, radius], index) => {
    if (scene.network) {
      const glowRadius = radius * 4;
      const glow = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
      glow.addColorStop(0, index < 5 ? 'rgba(221,231,238,.8)' : 'rgba(154,175,190,.25)');
      glow.addColorStop(.22, index < 5 ? 'rgba(191,206,218,.35)' : 'rgba(154,175,190,.12)');
      glow.addColorStop(1, 'rgba(145,167,185,0)');
      ctx.fillStyle = glow;
      ctx.beginPath(); ctx.arc(x, y, glowRadius, 0, Math.PI * 2); ctx.fill();
    }
    ctx.fillStyle = scene.network ? (index < 5 ? 'rgba(213,222,229,.68)' : 'rgba(148,163,177,.12)') : 'rgba(226,230,234,.78)';
    ctx.beginPath(); ctx.arc(x, y, scene.network ? radius * .65 : radius * .7, 0, Math.PI * 2); ctx.fill();
  });
}
scenes.forEach(scene => { resizeScene(scene); drawScene(scene); });
new ResizeObserver(() => scenes.forEach(scene => { resizeScene(scene); drawScene(scene); })).observe(document.body);
let animationFrame = 0;
let lastFrame = 0;
function animate(time) {
  if (time - lastFrame > 40) {
    scenes.filter(scene => scene.visible).forEach(scene => drawScene(scene, time));
    lastFrame = time;
  }
  animationFrame = requestAnimationFrame(animate);
}
function updateAnimation() {
  cancelAnimationFrame(animationFrame);
  if (!document.hidden && !reducedMotion.matches && scenes.some(scene => scene.visible)) animationFrame = requestAnimationFrame(animate);
  else scenes.forEach(scene => drawScene(scene));
}
const sceneObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { scenes.find(scene => scene.canvas === entry.target).visible = entry.isIntersecting; });
  updateAnimation();
});
scenes.forEach(scene => sceneObserver.observe(scene.canvas));
document.addEventListener('visibilitychange', updateAnimation);
reducedMotion.addEventListener('change', updateAnimation);
