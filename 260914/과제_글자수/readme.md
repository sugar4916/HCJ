# 📝 Smart Text & Byte Counter (실시간 글자 수 & 바이트 계산기)

사용자가 입력하는 텍스트의 글자 수, 공백 제외 글자 수, 단어 수, 줄 수 및 바이트(Byte) 용량을 실시간으로 측정해 주는 웹 기반 스마트 텍스트 카운터입니다.

자기소개서 작성, 공공기관 및 기업 제출 서류, SNS 게시글 등 바이트 제한이나 글자 수 제한이 있는 문서를 작성할 때 유용하게 활용할 수 있습니다.

---

## ✨ 주요 기능 (Key Features)

- **실시간 대시보드 메트릭 측정**:
  - **용량 (Byte)**: 국내 채용/공공기관 기준(한글/특수문자 2 Bytes, 영문/숫자/공백 1 Byte, 줄바꿈 CRLF 2 Bytes) 실시간 계산
  - **공백 포함 글자 수**: 전체 문자 개수 산출
  - **공백 제외 글자 수**: 띄어쓰기와 줄바꿈을 제외한 순수 글자 수
  - **단어 수 / 줄 수**: 어절(단어) 단위 수 및 엔터(줄바꿈) 입력 줄 수 카운트
- **원클릭 편의 기능**:
  - **전체 지우기**: 입력창을 초기화하는 버튼
  - **복사하기**: 작성된 텍스트를 클립보드에 간편하게 복사
- **인터랙티브 UI & 반응형 디자인**:
  - 마우스 커서 움직임에 실시간 반응하는 파스텔 배경 백드롭 효과
  - Pretendard 웹 폰트 및 FontAwesome 6 아이콘 적용
  - 모바일, 태블릿, 데스크톱에 최적화된 반응형 레이아웃

---

## 📐 바이트(Byte) 계산 규칙

| 문자 유형 | 계산 기준 |
| :--- | :--- |
| **한글 / 특수문자** | `2 Bytes` |
| **영문 / 숫자 / 공백** | `1 Byte` |
| **줄바꿈 (Enter)** | `2 Bytes (CRLF)` |

---

## 🛠 기술 스택 (Tech Stack)

| 구분 | 기술 / 라이브러리 |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla JS ES6+) |
| **Typography** | Pretendard Web Font |
| **Icons** | FontAwesome 6 (CDN) |
| **Styling** | Dynamic Radial Gradient, Flexbox/Grid Layout |

---

## 📁 파일 구조 (File Structure)

```text
.
├── text.html       # 메인 애플리케이션 파일 (HTML/CSS/JS)
├── logo.png        # 상단 헤더 로고 (없을 경우 NANALAB 텍스트 자동 대체)
└── README.md       # 프로젝트 설명 문서
