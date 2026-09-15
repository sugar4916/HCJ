# 🖥️ Smart Away Screen (스마트 부재중 안내 화면)

자리 비움, 회의, 식사, 외근, 연차 등의 사유로 모니터를 자리를 비움 상태로 전환할 때, 복귀 예정 시간 및 메시지를 깔끔하고 직관적으로 표시해 주는 웹 기반 스마트 부재중 스크린 서비스입니다.

---

## ✨ 주요 기능 (Key Features)

- **맞춤형 부재중 일정 설정**:
  - **일정 명 입력**: 회의 중, 식사 중, 외근, 연차, 휴가 등 자유로운 제목 설정
  - **복귀 예정 시간 지정**: 복귀 연/월/일/시/분 설정 기능
  - **안내 메시지 입력**: 비상 연락처, 전달할 메시지 등 세부 내용 작성
- **실시간 복귀 카운트다운 & 시계 표기**:
  - 복귀 시각까지 남은 시간을 시:분:초 단위로 실시간 카운트다운
  - 복귀 예정 시각을 직관적인 타이머 카드 형태로 표기
- **전체 화면 전용 풀스크린 모드**:
  - [부재중 화면 시작하기] 클릭 시 화면 전체가 시각적으로 수려한 부재중 안내 화면으로 전환
  - 마우스 클릭 또는 아무 키 입력(ESC 등) 시 바로 설정 화면으로 복귀
- **감성적이고 모던한 UI 디자인**:
  - 커서 이동에 반응하는 다이내믹 그래디언트 배경
  - 글래스모피즘(Glassmorphism) 스타일 카드 디자인
  - Pretendard 웹 폰트 및 FontAwesome 6 아이콘 탑재

---

## 🛠 기술 스택 (Tech Stack)

| 구분 | 기술 / 라이브러리 |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla JS ES6+) |
| **Typography** | Pretendard Web Font |
| **Icons** | FontAwesome 6 (CDN) |
| **Styling** | Glassmorphism, CSS Dynamic Gradients, Keyframe Animations |

---

## 📁 파일 구조 (File Structure)

```text
.
├── seat.html       # 메인 부재중 스크린 애플리케이션 파일 (HTML/CSS/JS)
├── logo.png        # 상단 헤더 로고 (없을 경우 NANALAB 텍스트 자동 대체)
└── README.md       # 프로젝트 설명 문서
