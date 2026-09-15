# 📝 Smart Lorem Ipsum Generator (더미 텍스트 생성기)

웹 디자인, UI/UX 시안 작업 및 퍼블리싱 시 필요한 임시 텍스트(Lorem Ipsum)를 원하는 글자 수에 맞추어 즉시 생성해 주는 스마트 더미 텍스트 생성 도구입니다.

---

## ✨ 주요 기능 (Key Features)

- **정밀한 글자 수 조절 (10자 ~ 5,000자)**:
  - 범위 슬라이더 또는 숫자 직접 입력 필드를 통한 미세한 글자 수 설정
- **원클릭 빠른 선택 (Preset Pills)**:
  - 자주 쓰이는 글자 수(`100자`, `300자`, `500자`, `1,000자`, `2,500자`) 단축 버튼 제공
- **실시간 메트릭 정보 집계**:
  - 생성된 더미 텍스트의 **글자 수**, **단어 수**, **문장 수**를 실시간 분석 및 대시보드 표기
- **편의 기능**:
  - **Copy Text**: 생성된 텍스트를 클립보드에 원클릭 복사
  - **Download .txt**: 지정한 글자 수 형태의 `.txt` 파일로 다운로드 (`lorem_ipsum_[글자수]chars.txt`)
- **인터랙티브 UI/UX 디자인**:
  - 마우스 커서 위치에 반응하는 가변 파스텔 그라데이션 배경 효과
  - Pretendard 웹 폰트 및 FontAwesome 6 아이콘 적용

---

## 🛠 기술 스택 (Tech Stack)

| 구분 | 기술 / 라이브러리 |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla JS ES6+) |
| **Typography** | Pretendard Web Font |
| **Icons** | FontAwesome 6 (CDN) |
| **Styling** | Dynamic Radial Gradient, CSS Glassmorphism, Flexbox Layout |

---

## 📁 파일 구조 (File Structure)

```text
.
├── LoremIpsum.html   # 메인 더미 텍스트 생성기 파일 (HTML/CSS/JS)
├── logo.png          # 상단 헤더 로고 (없을 경우 NANALAB 텍스트 자동 대체)
└── README.md         # 프로젝트 설명 문서
