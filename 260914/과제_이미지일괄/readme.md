# 🖼️ Smart Image Resizer (스마트 이미지 리사이저 & 비율 편집기)

웹 브라우저에서 서버 업로드 없이 여러 장의 이미지 파일 비율을 1:1, 16:9, 9:16 등 다양한 규격으로 여백 생성(Padding) 또는 자르기(Crop) 방식으로 손쉽게 일괄 재조정해 주는 이미지 비율 편집 도구입니다.

---

## ✨ 주요 기능 (Key Features)

- **100% 클라이언트 사이드 이미지 처리**:
  - 이미지를 외부 서버로 전송하지 않고 사용자의 브라우저(HTML5 Canvas API) 내에서 처리되어 데이터 유출 우려 없이 안전하게 이용 가능합니다.
- **다양한 프리셋 & 커스텀 비율 지원**:
  - `1:1` (인스타그램, 정사각형)
  - `3:4` / `4:3` (기본 사진 비율)
  - `9:16` (쇼츠, 릴스, 스토리 전용)
  - `16:9` (유튜브 썸네일, 모니터)
  - **커스텀 비율**: 사용자가 원하는 가로:세로 비율 자유 설정
- **2가지 정밀 편집 방식**:
  - **Padding (여백 생성)**: 원본 이미지를 자르지 않고 전체 비율 유지 + 지정한 컬러 여백 채우기
  - **Crop (자르기)**: 원본 이미지를 지정한 비율에 맞춰 중앙 기준으로 자르기
- **컬러 피커 (Color Picker)**:
  - Padding 모드 선택 시 배경 여백 색상을 자유롭게 지정
- **대량 이미지 일괄 작업 & ZIP 다운로드**:
  - 다중 이미지 드래그 앤 드롭 지원
  - 개별 이미지 다운로드 및 `JSZip` 라이브러리를 활용한 원클릭 **ZIP 일괄 압축 다운로드**
- **인터랙티브 UI & 반응형 디자인**:
  - 마우스 커서 위치를 추적하는 파스텔 그라데이션 배경
  - Pretendard 웹 폰트 및 FontAwesome 6 아이콘 탑재

---

## 🛠 기술 스택 (Tech Stack)

| 구분 | 기술 / 라이브러리 |
| :--- | :--- |
| **Frontend** | HTML5 Canvas, CSS3, JavaScript (Vanilla JS ES6+) |
| **Archiving Library** | [JSZip](https://stuk.github.io/jszip/) (v3.10.1) |
| **Typography** | Pretendard Web Font |
| **Icons** | FontAwesome 6 (CDN) |
| **Styling** | Dynamic Radial Gradient, Glassmorphism, Flexbox Layout |

---

## 📁 파일 구조 (File Structure)

```text
.
├── image.html      # 메인 이미지 리사이저 애플리케이션 파일 (HTML/CSS/JS)
├── logo.png        # 상단 헤더 로고 (없을 경우 NANALAB 텍스트 자동 대체)
└── README.md       # 프로젝트 설명 문서
