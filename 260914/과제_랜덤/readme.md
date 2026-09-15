# 🔮 Marble Drop Lottery Studio (구슬 드롭 장애물 추첨기)

HTML5 Canvas 기반의 물리 엔진을 탑재한 시각적 구슬 드롭 추첨 도구입니다. 참가자들의 이름이 적힌 구슬들이 장애물 핀을 통과해 하단에 떨어지며, **가장 마지막에 도달하는 사람**이 최종 당첨되는 흥미진진한 반전 추첨 방식을 제공합니다.

---

## ✨ 주요 기능 (Key Features)

- **캔버스(Canvas) 기반 물리 엔진 구현**:
  - 중력, 공기 저항 및 마찰력, 좌우 벽 충돌 구현
  - 삼각함수 기반의 장애물 핀(Pin) 충돌 및 바운스(Bounce) 반발력 연산
- **반전의 당첨 규칙**:
  - 가장 먼저 떨어진 사람이 탈락/도달 순으로 기록되고, **가장 마지막까지 남아서 도달한 구슬**이 최종 승리자(당첨자)가 됩니다.
- **실시간 골인 현황 리더보드**:
  - 구슬이 바닥에 도착하는 순서를 실시간으로 추적하여 리더보드 영역에 표기.
- **당첨 축하 팝업 모달**:
  - 최종 당첨자 결정 시 왕관 애니메이션과 함께 화려한 축하 모달 노출.
- **다이나믹 UI & 디자인**:
  - 마우스 커서 위치에 반응하는 파스텔 그라데이션 배경 효과
  - 알록달록한 고대비 컬러 구슬 및 다크 스타일 Canvas 디자인
  - Pretendard 폰트 및 FontAwesome 6 아이콘 적용

---

## 🕹 게임 및 추첨 규칙

1. 참가자 명단 입력란에 추첨할 사람들의 이름을 줄바꿈으로 입력합니다.
2. **[구슬 발사 & 추첨 시작!]** 버튼을 누르면 참가자 수만큼의 구슬이 상단에서 떨어진 후 장애물 핀에 튀기며 내려옵니다.
3. 바닥에 도달하는 순서대로 리더보드에 이름이 채워집니다.
4. **가장 마지막으로 골인한 1인**이 최종 당첨자로 선정되어 결과 창에 표시됩니다.

---

## 🛠 기술 스택 (Tech Stack)

| 구분 | 기술 / 라이브러리 |
| :--- | :--- |
| **Frontend** | HTML5 Canvas, CSS3, JavaScript (Vanilla JS ES6+) |
| **Physics** | Custom 2D Canvas Physics Engine (Gravity, Collision, Bounce) |
| **Typography** | Pretendard Web Font |
| **Icons** | FontAwesome 6 (CDN) |
| **Styling** | Dynamic Radial Gradient, CSS Keyframes, Backdrop Blur |

---

## 📁 파일 구조 (File Structure)

```text
.
├── random.html     # 메인 추첨 애플리케이션 (HTML/CSS/JS 및 Canvas 게임 엔진)
├── logo.png        # 상단 헤더 로고 (없을 경우 NANALAB 텍스트 자동 대체)
└── README.md       # 프로젝트 설명 문서
