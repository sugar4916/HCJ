# 📱 Smart QR (스마트 QR코드 생성기)

웹 브라우저에서 원하는 URL을 입력하여 고화질 QR코드를 즉시 생성하고, 클릭 한 번으로 간편하게 JPG 이미지로 다운로드할 수 있는 경량 웹 애플리케이션입니다.

---

## ✨ 주요 기능 (Key Features)

- **원클릭 실시간 QR코드 생성**:
  - URL 입력 후 확인 버튼이나 엔터(Enter)키 입력 시 즉시 높은 오류 복구율(Error Correction Level H)의 QR코드가 생성됩니다.
- **원클릭 JPG 이미지 다운로드**:
  - 생성된 QR코드 카드를 클릭하면 넉넉한 여백과 흰색 배경이 적용된 `Smart_QR.jpg` 고화질 이미지 파일로 자동 다운로드됩니다.
- **100% 클라이언트 사이드 처리**:
  - 입력한 URL 정보가 외부 서버로 전달되지 않고 브라우저 내부에서 자바스크립트로 직접 QR코드를 생성하여 안전합니다.
- **인터랙티브 UI & 애니메이션**:
  - 마우스 커서의 위치를 실시간으로 추적하여 은은하게 변화하는 파스텔 그라데이션 인터랙티브 배경
  - 글래스모피즘(Glassmorphism) 카드 디자인 및 부드러운 스프링 애니메이션 효과 적용
  - Pretendard 웹 폰트 및 FontAwesome 6 아이콘 탑재

---

## 🛠 기술 스택 (Tech Stack)

| 구분 | 기술 / 라이브러리 |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla JS ES6+) |
| **QR Engine** | [qrcodejs](https://github.com/davidshimjs/qrcodejs) (v1.0.0) |
| **Typography** | Pretendard Web Font |
| **Icons** | FontAwesome 6 (CDN) |
| **Styling** | Dynamic Radial Gradient, Glassmorphism, CSS Variables |

---

## 📁 파일 구조 (File Structure)

```text
.
├── smart-qr.html   # 메인 QR코드 생성기 애플리케이션 파일 (HTML/CSS/JS 및 qrcodejs)
└── README.md       # 프로젝트 설명 문서
