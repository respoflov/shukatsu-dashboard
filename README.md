# 就活 Dashboard (PWA)

일본 신졸 취활용 개인 대시보드. 기업 판별 보드 / 주간 루프 / 인프라 체크리스트 / 브리핑용 텍스트 내보내기.

생성: 2026.07.10 (금) · 작성 모델: Claude Fable 5

## GitHub Pages 배포 (5분)

1. GitHub에서 새 저장소 생성 (예: `shukatsu-dashboard`, Public)
2. 이 폴더의 파일 5개를 모두 업로드
   (index.html / manifest.webmanifest / sw.js / icon-192.png / icon-512.png)
3. 저장소 Settings → Pages → Branch를 `main` / `(root)`로 지정 → Save
4. 1~2분 후 `https://<아이디>.github.io/shukatsu-dashboard/` 접속

## 홈 화면에 앱으로 추가

- iPhone: Safari로 위 URL 접속 → 공유 버튼 → "홈 화면에 추가"
- Mac(Safari): 파일 메뉴 → "Dock에 추가" / Chrome: 주소창 설치 아이콘
- Android(Chrome): 메뉴 → "앱 설치"

## 데이터 주의사항

- 데이터는 브라우저 localStorage에 저장 — **기기·브라우저별로 독립** (자동 동기화 없음)
- 기기 이동 시: [JSON 내보내기] → 다른 기기에서 [JSON 가져오기]
- 주 1회 [브리핑용 텍스트 복사] → Claude 채팅에 붙여넣으면 주간 브리핑 가능
- 처음 들어 있는 기업 목록은 예시 데이터입니다. 실제 목록은 앱에서 추가·수정하세요.

## 내용 갱신

기업 목록·체크리스트를 바꾸고 싶으면 index.html의 상단 `SEED` / `INFRA` / `WEEK` 배열을 수정하거나,
Claude에게 "대시보드에 ○○ 반영해서 index.html 다시 만들어줘"라고 요청하세요.
(sw.js의 CACHE 버전 문자열을 v2로 올리면 기존 설치에도 갱신이 반영됩니다)

## 라이선스

Copyright 2026 respoflov

이 저장소의 코드는 [Apache License 2.0](LICENSE)을 따릅니다. 앱이 사용하는 외부 폰트·라이브러리는 각자의 라이선스를 따릅니다.
