# 📄 PDF Merge Studio (PDF 문서 병합기)

웹 브라우저에서 서버 업로드 없이 여러 개의 PDF 문서를 하나로 안전하고 빠르게 병합(Merge)해 주는 클라이언트 사이드 Web 애플리케이션입니다.

---

## ✨ 주요 기능 (Key Features)

- **100% 클라이언트 사이드 병합 (`pdf-lib` 기반)**:
  - 문서를 외부 서버로 업로드하지 않고 브라우저 내에서 직접 병합하므로 민감한 개인정보 및 보안 문서도 안전하게 처리할 수 있습니다.
- **드래그 앤 드롭 & 다중 파일 업로드**:
  - 드래그 앤 드롭 또는 파일 선택 창을 통해 여러 개의 PDF 파일들을 한 번에 손쉽게 추가할 수 있습니다.
- **자유로운 페이지 순서 변경 및 삭제**:
  - 목록에서 위/아래 버튼을 눌러 병합될 PDF 파일의 순서를 직관적으로 조정할 수 있습니다.
  - 불필요한 PDF 파일은 삭제 버튼으로 간편하게 제거할 수 있습니다.
- **실시간 파일 정보 확인**:
  - 업로드된 각 PDF 파일의 용량(Bytes, KB, MB) 및 전체 병합 대상 파일 개수를 실시간 표기합니다.
- **원클릭 병합 및 자동 다운로드**:
  - 병합 버튼 클릭 시 순서대로 결합된 타임스탬프 기반 단일 PDF 파일 (`merged_document_[timestamp].pdf`)이 즉시 생성되어 자동으로 다운로드됩니다.
- **인터랙티브 UI/UX 디자인**:
  - 마우스 커서 위치에 반응하는 파스텔 그라데이션 배경 효과
  - Pretendard 웹 폰트 및 FontAwesome 6 아이콘 탑재
  - 반응형 카드 레이아웃 적용

---

## 🛠 기술 스택 (Tech Stack)

| 구분 | 기술 / 라이브러리 |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla JS ES6+) |
| **PDF Engine** | [pdf-lib](https://github.com/Hopding/pdf-lib) (v1.17.1) |
| **Typography** | Pretendard Web Font |
| **Icons** | FontAwesome 6 (CDN) |
| **Styling** | Dynamic Radial Gradient, Glassmorphism, Flexbox Layout |

---

## 📁 파일 구조 (File Structure)

```text
.
├── pdf.html        # 메인 웹 애플리케이션 파일 (HTML/CSS/JS 및 pdf-lib 포함)
├── logo.png        # 상단 헤더 로고 (없을 경우 NANALAB 텍스트 자동 대체)
└── README.md       # 프로젝트 설명 문서
