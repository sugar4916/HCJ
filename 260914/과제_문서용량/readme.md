# 🗜️ Smart Doc Compressor (스마트 문서 & 이미지 압축기)

웹 브라우저에서 서버 업로드 없이 안전하고 빠르게 PDF, 이미지(JPG, PNG, WEBP), Word, PPT 파일의 용량을 축소 및 압축해 주는 Web 기반 문서 압축 도구입니다.

---

## ✨ 주요 기능 (Key Features)

- **100% 클라이언트 사이드 압축**:
  - 외부 서버로 파일이 전달되지 않고 사용자의 웹 브라우저 내에서 직접 압축을 수행하여 보안 문서나 개인 정보가 담긴 파일도 안심하고 처리할 수 있습니다.
- **다양한 파일 포맷 지원**:
  - **PDF (`.pdf`)**: PDF.js와 jsPDF를 활용하여 각 페이지 캡처 후 이미지 최적화를 통한 실질적 파일 용량 축소
  - **이미지 (`.jpg`, `.jpeg`, `.png`, `.webp`)**: HTML5 Canvas 기반 해상도 가변 조절 및 JPEG 품질 최적화 압축
  - **문서 파일 (`.doc`, `.docx`, `.ppt`, `.pptx`)**: 파일 업로드 시 압축 프로세스 및 인터페이스 지원
- **실시간 압축 상태 및 감축률 표기**:
  - 프로그레스 바(Progress Bar)를 통한 실시간 진행률(%) 표기
  - 변환 완료 후 **'원본 용량 ➔ 압축 용량'** 및 **'절감 비율(% 감축)'** 배지 실시간 산출
- **드래그 앤 드롭 & 다중 파일 처리**:
  - 편리한 파일 드래그 앤 드롭 업로드 및 여러 파일의 동시 압축 지원
- **원클릭 다운로드**:
  - 압축 완료 후 `compressed_파일명` 형태로 원클릭 다운로드 지원
- **인터랙티브 UI & 반응형 디자인**:
  - 마우스 위치에 반응하는 가변 파스텔 그라데이션 배경 백드롭 효과
  - Pretendard 웹 폰트 및 FontAwesome 6 아이콘 탑재

---

## 🛠 기술 스택 (Tech Stack)

| 구분 | 기술 / 라이브러리 |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla JS ES6+) |
| **PDF Processing** | [PDF.js](https://mozilla.github.io/pdf.js/) (v3.11.174), [jsPDF](https://github.com/parallax/jsPDF) (v2.5.1) |
| **Image Compression** | HTML5 Canvas API (`toBlob` Quality Tuning) |
| **Typography** | Pretendard Web Font |
| **Icons** | FontAwesome 6 (CDN) |
| **Styling** | Dynamic Radial Gradient, Flexbox Layout |

---

## 📁 파일 구조 (File Structure)

```text
.
├── compression.html  # 메인 애플리케이션 파일 (HTML/CSS/JS)
├── logo.png          # 헤더 로고 (없을 경우 NANALAB 텍스트 자동 대체)
└── README.md         # 프로젝트 설명 문서
