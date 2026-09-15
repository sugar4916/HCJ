# 📊 스마트 BMI & 목표 체중 계산기 (Smart BMI Calculator)

대한비만학회 기준에 맞춘 신체 질량 지수(BMI) 계산기입니다. 사용자 맞춤형 BMI 상태와 더불어 **90%(날씬 체중), 100%(표준 체중), 110%(상한 체중)** 에 대한 목표 체중 및 증감 조절량을 한눈에 직관적으로 확인할 수 있도록 설계되었습니다.

---

## ✨ 주요 기능 (Key Features)

- **성별 및 신체 수치 입력**: 성별 선택(남/여) 및 키(cm), 몸무게(kg) 입력 Form 제공
- **정밀 BMI 계산**: 입력된 키와 몸무게를 바탕으로 실시간 BMI 지수 산출
- **대한비만학회 기준 비만도 상태 분류**:
  - 저체중 (`< 18.5`)
  - 정상 체중 (`18.5 ~ 22.9`)
  - 비만 전단계 / 과체중 (`23.0 ~ 24.9`)
  - 1단계 비만 (`25.0 ~ 29.9`)
  - 2단계 비만 (`30.0 ~ 34.9`)
  - 3단계 고도비만 (`35.0 이상`)
- **시각화 프로그레스 바**: 현재 사용자의 BMI 지수 위치를 시각적인 포인터 바(Progress Bar)로 표기
- **단계별 목표 체중 및 체중 조절량 제시**:
  - **BMI 90% (날씬 체중)**: BMI `19.8` 기준 목표 체중 및 증감량
  - **BMI 100% (표준 체중)**: BMI `22.0` 기준 목표 체중 및 증감량
  - **BMI 110% (상한 체중)**: BMI `24.2` 기준 목표 체중 및 증감량
- **인터랙티브 UI & 반응형 디자인**:
  - 마우스 커서 이동에 따른 가변 다이내믹 배경 백드롭 효과
  - 모바일, 태블릿, 데스크톱 화면 크기에 최적화된 유연한 Layout

---

## 🛠 기술 스택 (Tech Stack)

| 구분 | 기술 / 라이브러리 |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla JS ES6+) |
| **Typography** | Pretendard Web Font |
| **Icons** | FontAwesome 6 (CDN) |
| **Styling** | CSS Variables, Flexbox/Grid Layout, CSS Keyframe Animations |

---

## 📐 BMI 및 목표 체중 산출 공식

1. **BMI 공식**: 
   $$\text{BMI} = \frac{\text{체중}(\text{kg})}{\left(\frac{\text{키}(\text{cm})}{100}\right)^2}$$

2. **목표 체중 산출 기준**:
   - **BMI 90% (날씬 기준)** = $19.8 \times \left(\frac{\text{키}}{100}\right)^2$
   - **BMI 100% (표준 기준)** = $22.0 \times \left(\frac{\text{키}}{100}\right)^2$
   - **BMI 110% (상한 기준)** = $24.2 \times \left(\frac{\text{키}}{100}\right)^2$

---

## 📁 파일 구조 (File Structure)

```text
.
├── bmi.html        # 메인 애플리케이션 파일 (HTML/CSS/JS 포함)
├── logo.png        # 상단 헤더 로고 이미지
└── README.md       # 프로젝트 설명 문서
