# 🤖 Smart TextRank Document Summarizer (TextRank 문서 요약기)

웹 브라우저에서 서버 업로드 없이 PDF, Word(.docx), 텍스트(.txt) 파일의 내용을 분석하여 **TextRank 그래픽 알고리즘** 기반으로 핵심 문장을 자동으로 추출 및 요약해 주는 스마트 문서 요약 도구입니다.

---

## ✨ 주요 기능 (Key Features)

- **100% 클라이언트 사이드 문서 파싱**:
  - 문서를 외부 서버로 전송하지 않고 브라우저 내에서 직접 파싱(`PDF.js`, `Mammoth.js`)하므로 기밀 문서나 개인정보가 담긴 문서도 안전하게 요약할 수 있습니다.
- **TextRank 그래프 기반 요약 알고리즘**:
  - 문장 간 유사도 연산 및 PageRank 동적 파동 연산(Damping factor $d=0.85$, 30 Iterations)을 통해 문서 내에서 가장 중요한 핵심 문장들을 자동 도출합니다.
- **가변 문장 수 조절 (1~5문장)**:
  - 슬라이더 컨트롤을 이용해 원 문맥 흐름에 맞추어 원하는 요약 문장 개수를 실시간으로 조절할 수 있습니다.
- **문맥 보존 순서 재정렬**:
  - 알고리즘으로 선정된 상위 핵심 문장들을 원본 문서의 등장 순서대로 재배치하여 글의 자연스러운 흐름을 유지합니다.
- **다양한 파일 포맷 지원**:
  - **PDF (`.pdf`)**, **Word (`.docx`)**, **텍스트 (`.txt`)** 드래그 앤 드롭 업로드 지원.
- **원클릭 복사 & 재시도**:
  - 추출된 요약 문장을 클립보드로 손쉽게 복사 및 다른 문서 연속 요약 기능 지원.
- **인터랙티브 UI & 반응형 디자인**:
  - 마우스 커서 위치에 반응하는 파스텔 그라데이션 백드롭
  - Pretendard 웹 폰트 및 FontAwesome 6 아이콘 적용

---

## 🛠 기술 스택 (Tech Stack)

| 구분 | 기술 / 라이브러리 |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla JS ES6+) |
| **PDF Parsing** | [PDF.js](https://mozilla.github.io/pdf.js/) (v2.16.105) |
| **DOCX Parsing** | [Mammoth.js](https://github.com/mwilliamson/mammoth.js) (v1.6.0) |
| **Algorithm** | TextRank (Cosine Similarity + PageRank Network Iteration) |
| **Typography** | Pretendard Web Font |
| **Icons** | FontAwesome 6 (CDN) |
| **Styling** | Dynamic Radial Gradient, Flexbox Layout, Backdrop Blur |

---

## 📁 파일 구조 (File Structure)

```text
.
├── summary.html    # 메인 요약 애플리케이션 파일 (HTML/CSS/JS 및 TextRank 엔진)
├── logo.png        # 상단 헤더 로고 (없을 경우 NANALAB 텍스트 자동 대체)
└── README.md       # 프로젝트 설명 문서
