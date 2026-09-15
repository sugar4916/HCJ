# 🎬 Video to GIF 변환기 (Video to GIF Converter)

웹 브라우저에서 서버 업로드 없이 동영상(MP4, WebM, MOV 등)을 즉시 애니메이션 GIF 파일로 변환해 주는 Web 기반 도구입니다.

---

## ✨ 주요 기능 (Key Features)

- **100% 클라이언트 사이드 변환**: 서버에 비디오를 업로드하지 않고 웹 브라우저 내부에서 안전하고 빠르게 GIF를 생성합니다.
- **다양한 비디오 포맷 지원**: MP4, WebM, MOV 등 다양한 동영상 포맷 지원.
- **드래그 앤 드롭 지원**: 비디오 파일을 드래그 앤 드롭하거나 버튼을 클릭하여 여러 비디오를 손쉽게 추가.
- **최적화된 20 FPS 고속 처리**: 빠른 변환 속도와 자연스러운 움직임을 위해 최대 20 FPS(초당 20프레임)로 GIF 생성.
- **실시간 진행률 & 프리뷰**:
  - 동영상 비디오 프레임 기반 자동 썸네일 생성
  - 변환 진행 상태(%) 실시간 프로그레스 바 시각화
  - 변환 완료 후 최종 GIF 실시간 미리보기 제공 및 다운로드 버튼 활성화
- **인터랙티브 UI & 반응형 디자인**:
  - 마우스 커서 위치에 반응하는 다이내믹 파스텔 그라데이션 배경
  - Pretendard 폰트 및 FontAwesome 6 아이콘 적용

---

## 🛠 기술 스택 (Tech Stack)

| 구분 | 기술 / 라이브러리 |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla JS ES6+) |
| **GIF Engine** | [gifshot](https://github.com/yahoo/gifshot) (v0.3.2) |
| **Typography** | Pretendard Web Font |
| **Icons** | FontAwesome 6 (CDN) |
| **Styling** | CSS Variables, Dynamic Radial Gradients, Flexbox Layout |

---

## 📁 파일 구조 (File Structure)

```text
.
├── gifvideo.html   # 메인 애플리케이션 파일 (HTML/CSS/JS)
├── logo.png        # 상단 헤더 로고 (없을 경우 NANALAB 텍스트 자동 대체)
└── README.md       # 프로젝트 설명 문서
