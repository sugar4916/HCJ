# 💒 Mobile Wedding Invitation (모바일 청첩장)

모바일 화면에 최적화된 우아하고 정성스러운 디자인의 웹 기반 모바일 청첩장 페이지입니다.

---

## ✨ 주요 기능 (Key Features)

- **모바일 최적화 레이아웃**:
  - 스마트폰 화면(최대 너비 480px)에 최적화되어 깔끔하고 보기 편한 카드형 디자인 제공.
- **메인 히어로 세션**:
  - 대표 커플 사진, 신랑·신부 이름 및 예식 일시 안내.
- **초대 인사말 & 혼주 정보**:
  - 감성적인 초대 문구 및 양가 부모님과 신랑·신부의 관계 명시.
- **실시간 D-Day 카운트다운 타이머**:
  - 결혼식 일시까지 남은 시간(일, 시, 분, 초)을 실시간으로 계산하여 표시.
- **감성적 갤러리 (Gallery)**:
  - 신랑, 신부, 웨딩 스냅 화보(함께 사진 3장)를 감각적으로 배치한 이미지 그리드 레이아웃.
  - 이미지 로드 실패 시 대체 이미지(Placeholder) 자동 처리.
- **예식장 정보 & 원클릭 연락하기**:
  - 예식장 명칭, 상세 주소 및 대표 전화번호 안내.
  - 모바일에서 클릭 시 바로 통화로 연결되는 **신랑 연락하기 / 신부 연락하기** 버튼 제공.

---

## 🛠 기술 스택 (Tech Stack)

| 구분 | 기술 / 라이브러리 |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla JS ES6+) |
| **Typography** | Google Fonts (`Noto Serif KR`, `Montserrat`) |
| **Icons** | FontAwesome 6 (CDN) |
| **Styling** | Mobile-First Flexbox/Grid Layout, Real-time Countdown Script |

---

## 📁 파일 구조 (File Structure)

```text
.
├── wedding.html      # 메인 모바일 청첩장 웹 페이지 (HTML/CSS/JS)
├── pictures/         # 갤러리 및 커버 사진 폴더
│   ├── 신랑.png
│   ├── 신부.png
│   ├── 함께1.png
│   ├── 함께2.png
│   └── 함께3.png
└── README.md         # 프로젝트 설명 문서
