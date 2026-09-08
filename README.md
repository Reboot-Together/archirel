# ARCHIREL local prototype

Repository: https://github.com/Reboot-Together/archirel

첫 기준 버전은 `v0.1.0`입니다. 제공된 목업을 반영한 로컬 웹과 프로젝트 소개를 포함합니다.

HTML, CSS, JavaScript로 만든 로컬 시안입니다. 외부 라이브러리, CDN, API 없이 동작합니다. 제공된 목업의 Intro → Reveal → Overview → Products → Projects → About 순서와 시각 구성을 재현했습니다.

## 실행

이 폴더에서 다음 명령을 실행한 뒤 http://127.0.0.1:4173 을 엽니다.

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

종료는 서버를 실행한 터미널에서 `Ctrl+C`입니다. `index.html`을 직접 열어도 기본 화면과 인터랙션은 동작합니다.

## 수정할 곳

- `index.html`: 첫 화면, 작업 카드, About, 내비게이션
- `style.css`: 색상, 타이포그래피, 반응형 레이아웃, 애니메이션
- `script.js`: 프로젝트 상세 내용, 모바일 메뉴, 모달, 섹션별 헤더 색상, Canvas 배경
- `assets/reference.png`: 사용자가 제공한 원본 목업. SVG viewBox로 중앙 조형물과 카드 이미지 영역만 표시합니다. 이미지 파일 자체를 수정하지 않았습니다.

메인 카드의 문구는 원본 목업을 따르고, 상세 소개에는 구상·정리 예정 상태를 표시했습니다. 실제 URL, 본인 역할, 구현 결과를 확인한 후 카드와 상세 내용을 업데이트하면 됩니다. 현재 썸네일은 원본 목업의 작은 이미지 영역을 확대한 것이므로, 공개 버전에서는 개별 고해상도 에셋으로 교체할 수 있습니다.

외부 연락처나 존재를 확인하지 않은 링크는 넣지 않았습니다. 공개 배포는 하지 않은 로컬 프로토타입입니다.
