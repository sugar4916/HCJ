# 🎨 Smart GIF Studio (무료 GIF 편집기)

웹 브라우저에서 서버 업로드 없이 안전하고 빠르게 GIF 파일의 크기 조절, 프레임 편집, 변환, 최적화 등을 수행할 수 있는 올인원 Web 기반 GIF 편집 도구입니다.

---

## ✨ 주요 기능 (Key Features)

- **100% 클라이언트 사이드 개인정보 보호**: 외부 서버로 데이터를 전송하지 않고 사용자의 웹 브라우저 내에서 모든 작업이 처리되어 데이터 유출 걱정 없이 안전하게 사용할 수 있습니다.
- **GIF 메타데이터 분석 및 원본 프리뷰**: GIF 파일 업로드 시 해상도, 프레임 수, 총 재생 시간, FPS, 파일 크기를 실시간으로 계산 및 표기합니다.
- **9가지 올인원 GIF 편집 툴 제공**:
  1. **Resize (크기 조절)**: 비율 고정(Aspect Lock) 지원 및 가로/세로 해상도 정밀 변경
  2. **Crop (자르기)**: 원하는 특정 영역만 자르기
  3. **Downsizing (용량 축소)**: 파일 용량을 줄이는 압축 옵션
  4. **Convert (포맷 변환)**: GIF를 MP4, WebM 동영상 또는 PNG, JPG 이미지로 변환
  5. **Rotate (회전 및 반전)**: 90°, 180°, 270° 회전 및 좌우/상하 반전
  6. **Optimize (최적화)**: Light, Balanced, Aggressive 단계별 용량 최적화
  7. **Reverse (역재생)**: 모든 프레임 순서를 반대로 뒤집어 거꾸로 재생
  8. **Speed (속도 조절)**: 0.5x, 1.0x, 1.5x, 2.0x 배속 조절
  9. **Cut (구간 편집)**: 시작 프레임과 종료 프레임을 지정하여 원하는 구간 분할
- **실시간 비포/애프터 비교 및 다운로드**: 편집 원본과 결과물의 용량, 해상도를 한눈에 비교하고 클릭 한 번으로 다운로드.
- **인터랙티브 UI/UX 디자인**:
  - 마우스 커서 위치를 추적하는 파스텔 그라데이션 배경
  - 사이드 패널 접기/펴기(Toggle) 기능 지원
  - Pretendard 폰트 및 FontAwesome 6 아이콘 탑재

---

## 🛠 기술 스택 (Tech Stack)

| 구분 | 기술 / 라이브러리 |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla JS ES6+) |
| **GIF Parsing Engine** | [omggif](https://github.com/deanm/omggif) (v1.0.10) |
| **GIF Encoding Engine** | [gifshot](https://github.com/yahoo/gifshot) (v0.3.2) |
| **Typography** | Pretendard Web Font |
| **Icons** | FontAwesome 6 (CDN) |
| **Styling** | CSS Variables, Flexbox Layout, Glassmorphism |

---

## 📁 파일 구조 (File Structure)

```text
.
├── gifmake.html    # 메인 GIF 편집 웹 애플리케이션 파일 (HTML/CSS/JS)
├── logo.png        # 헤더 로고 이미지 (선택 사항, 없으면 NANALAB 텍스트 표시)
└── README.md       # 프로젝트 설명 문서
