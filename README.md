# D'velop 2026 — 우리의 다음 도전

성과공유회 참가자가 도전을 작성하고 서로 응원하는 디지털 메모 패드입니다.

- `index.html`: 참가자용 화면
- `memopad.html`: 행사장 대형 화면
- `Code.gs`: Google Sheets에 데이터를 저장하는 Apps Script 코드

## 현재 상태

프런트엔드는 미리보기 모드입니다. 각 브라우저에만 저장되며, 여러 기기 간 공유되지 않습니다. 실제 행사 전에 Google Apps Script를 별도로 배포하고 두 HTML 파일의 `APPS_SCRIPT_URL`을 설정해야 합니다.

## GitHub Pages

저장소 Settings → Pages → Deploy from a branch → main → /(root) → Save로 정적 화면을 게시할 수 있습니다.

실제 저장 기능 설정과 한계는 `HANDOFF.md`를 참고하세요.
