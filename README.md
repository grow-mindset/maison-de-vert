# Maison de Vert

식물 초보자의 첫 초록 생활을 돕는 가상 식물 라이프스타일 브랜드 웹사이트입니다.

## 공개 주소

- [Maison de Vert](https://grow-mindset.github.io/maison-de-vert/)
- [GitHub 저장소](https://github.com/grow-mindset/maison-de-vert)

## 주요 기능

- 데스크톱·태블릿·모바일 반응형 레이아웃
- 식물별 사진, 관리 난이도, 빛과 물주기 정보
- 모바일 메뉴의 열기·닫기와 `Esc` 키 닫기
- 본문 바로가기, 키보드 포커스, 움직임 줄이기 설정 지원
- 필수 항목·이메일 형식 검증을 포함한 상담 폼
- 검색과 공유를 위한 canonical, Open Graph, Twitter 메타데이터

## 기술

- HTML5
- CSS3: CSS 변수, Grid, Flexbox, 미디어 쿼리
- JavaScript: 모바일 메뉴와 상담 폼 입력 검증
- GitHub Pages

## 폴더 구조

```text
maison-de-vert/
├─ css/style.css
├─ images/
├─ js/main.js
├─ index.html
├─ robots.txt
├─ sitemap.xml
└─ IMAGE_CREDITS.md
```

## 로컬 확인

프로젝트 폴더에서 아래 명령을 실행한 뒤 `http://localhost:4173`으로 접속합니다.

```powershell
python -m http.server 4173
```

## 운영 전 확인 사항

- 문의 폼은 현재 입력 검증만 제공하며, 실제 상담 접수 서비스는 연결되어 있지 않습니다.
- 매장 주소·전화번호·운영 시간은 가상 정보입니다. 실제 공개 전 정확한 정보로 교체해야 합니다.
- 이미지의 원본과 라이선스 확인 위치는 [IMAGE_CREDITS.md](IMAGE_CREDITS.md)에 정리했습니다.
