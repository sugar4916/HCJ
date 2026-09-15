# 📄 DOCX Document Analyzer (DOCX 문서 정밀 분석기)

웹 브라우저에서 서버 업로드 없이 Microsoft Word (`.docx`) 문서의 글자 수, 단어 수, 공백 개수 및 포함된 이미지 수까지 실시간으로 파악해 주는 웹 기반 문서 정밀 분석 도구입니다.

---

## ✨ 주요 기능 (Key Features)

- **100% 클라이언트 사이드 파싱**:
  - 외부 서버로 문서를 업로드하지 않고 브라우저 내에서 `Mammoth.js` 엔진으로 해석하므로 기밀 문서 및 개인정보가 포함된 워드 파일도 안전하게 분석할 수 있습니다.
- **드래그 앤 드롭 지원**:
  - 편리한 파일 드래그 앤 드롭 또는 버튼 선택으로 `.docx` 문서를 빠르게 업로드할 수 있습니다.
- **4가지 핵심 메트릭 정밀 측정**:
  - **글자 수 (Characters)**: 공백 포함 전체 글자 수 및 공백 제외 글자 수 산출
  - **단어 수 (Words)**: 띄어쓰기 및 어절 기준 단어 수 측정
  - **공백 개수 (Spaces)**: 스페이스바, 탭, 줄바꿈(엔터)이 포함된 공백 개수 집계
  - **이미지 개수 (Images)**: 본문에 포함된 그림 및 그래픽 개체 수 자동 카운트
- **파일 메타정보 표시**:
  - 분석 대상 파일의 이름과 용량(Bytes, KB, MB)을 실시간 제공
- **인터랙티브 UI & 반응형 디자인**:
  - 마우스 커서 위치에 실시간 반응하는 파스텔 그라데이션 배경 인터랙션
  - Pretendard 웹 폰트 및 FontAwesome 6 아이콘 탑재

---

## 🛠 기술 스택 (Tech Stack)

| 구분 | 기술 / 라이브러리 |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla JS ES6+) |
| **DOCX Parser** | [Mammoth.js](https://github.com/mwilliamson/mammoth.js) (v1.6.0) |
| **Typography** | Pretendard Web Font |
| **Icons** | FontAwesome 6 (CDN) |
| **Styling** | Dynamic Radial Gradient, Glassmorphism, Flexbox Grid Layout |

---

## 📁 파일 구조 (File Structure)

```text
.
├── paridocx.html   # 메인 애플리케이션 파일 (HTML/CSS/JS 및 Mammoth.js)
├── logo.png        # 상단 헤더 로고 (없을 경우 NANALAB 텍스트 자동 대체)
└── README.md       # 프로젝트 설명 문서
