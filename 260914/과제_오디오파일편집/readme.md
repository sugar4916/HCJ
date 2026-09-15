# 🎵 Smart Audio Studio (웹 오디오 편집 & 포맷 변환기)

웹 브라우저에서 서버 업로드 없이 오디오 파일(MP3, WAV, OGG, AAC, FLAC 등)의 파형 시각화, 구간 자르기(Trim), 볼륨 조절 및 포맷 변환을 손쉽게 수행하는 Web Audio API 기반 오디오 편집 스튜디오입니다.

---

## ✨ 주요 기능 (Key Features)

- **100% 클라이언트 사이드 오디오 처리**:
  - 외부 서버로 음원 파일을 업로드하지 않고 브라우저 내 Web Audio API를 활용하여 음원을 디코딩/편집하므로 개인 음원이나 보안 오디오 데이터도 안전하게 작업 가능합니다.
- **실시간 Canvas 파형(Waveform) 시각화**:
  - 음원 데이터의 첫 번째 채널을 디코딩하여 직관적인 오디오 파형 그래프로 시각화합니다.
- **구간 자르기 (Trim) & 볼륨 (Gain) 조절**:
  - 시작 시각과 종료 시각(초)을 정밀하게 지정하여 원하는 구간만 잘라내기.
  - 0%부터 최대 200%까지 볼륨 게인(Gain) 조절 지원.
- **편집 구간 실시간 미리듣기 (Preview)**:
  - 지정된 Trim 구간과 볼륨이 적용된 음원을 즉시 재생/정지하여 미리듣기 가능.
- **다양한 오디오 포맷 지원**:
  - MP3, WAV, OGG, AAC, FLAC 등 오디오 포맷 입력 지원.
  - 타겟 포맷(WAV/MP3 등) 선택 후 원클릭 내보내기(Export) 및 자동 다운로드.
- **드래그 앤 드롭 & 인터랙티브 UI**:
  - 편리한 파일 드래그 앤 드롭 업로드 지원.
  - 마우스 커서 위치에 반응하는 파스텔 그라데이션 배경 효과.
  - Pretendard 웹 폰트 및 FontAwesome 6 아이콘 적용.

---

## 🛠 기술 스택 (Tech Stack)

| 구분 | 기술 / 라이브러리 |
| :--- | :--- |
| **Frontend** | HTML5 Canvas, CSS3, JavaScript (Vanilla JS ES6+) |
| **Audio Engine** | Web Audio API (`AudioContext`, `decodeAudioData`, `GainNode`) |
| **Typography** | Pretendard Web Font |
| **Icons** | FontAwesome 6 (CDN) |
| **Styling** | Dynamic Radial Gradient, Glassmorphism, Flexbox Grid Layout |

---

## 📁 파일 구조 (File Structure)

```text
.
├── audio.html      # 메인 오디오 편집 웹 애플리케이션 파일 (HTML/CSS/JS)
├── logo.png        # 상단 헤더 로고 (없을 경우 NANALAB 텍스트 자동 대체)
└── README.md       # 프로젝트 설명 문서
