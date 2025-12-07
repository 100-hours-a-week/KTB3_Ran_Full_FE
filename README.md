
# 🚀 Community Platform 
## Vanilla SPA → React Migration Project

이 프로젝트는 Vanilla JavaScript로 직접 구현한 SPA 아키텍처(VDOM 버전)에서 시작하여,
React 19 + Router v7 + TanStack Query + FSD 구조(React 버전)로 확장한
**두 단계의 기술적 성장 프로젝트**입니다.

🎉 목표

* 프론트엔드 렌더링 구조를 **근본부터 이해하고 직접 구현**해보고
* 그 구조를 **실제 서비스 가능한 현대적 React 아키텍처로 재구성**하는 것이었습니다.

두 버전 모두 같은 커뮤니티 기능(CRUD, 댓글, 좋아요, 인증,)을 구현하며
**아키텍처적 접근 방식**을 바꿔가며 성장한 프로젝트입니다.

---

## 📚 Version Overview

프로젝트는 아래 두 가지 버전으로 구성되어 있습니다.

---

### 🔵 **VDOM Version (Custom SPA + Virtual DOM Engine)**

Vanilla JavaScript만으로 만든 SPA 버전으로,

- 직접 설계한 **Virtual DOM + Diff Engine**
- 전역 상태 시스템 및 Effect Tracking
- Custom Hash Router
- **쿠키 기반 인증 (session cookie 자동 전송 방식)**

등을 포함해 **React 같은 렌더링 사이클을 직접 구현한 학습형 버전**입니다.

> **[VDOM Version README 보러가기](./vdom-version/vdom-version-readme.md)**

---

### 🟣 **React Version (React 19 + FSD Architecture)**

VDOM 버전에서 얻은 인사이트를 기반으로
실제 서비스 설계를 가능한 수준까지 확장한 **React 리팩토링 버전**입니다.

- React 19 + Vite (rolldown)
- React Router v7(Data Router)
- TanStack Query (전체 데이터 계층)
- **커서 기반 무한 스크롤 (useInfiniteQuery + IntersectionObserver)**
- **토큰 기반 인증 (sessionStorage 저장 + Refresh Flow)**
- FSD 구조
- Container–Presenter / Compound Component / Custom Hook
- 디자인 토큰 (Color/Spacing/Typography)

> **[React Version README 보러가기](./reactJSX-version/mogi-logi/reactJSX-version-readme.md)**

---

# ⭐ Current Stable Version

### **React Version (react-version/)**

현재 메인 개발은 React 버전에서 이루어져있습니다.

---

# 🎯 Project Goals 
### What this project aims to show

이 프로젝트의 핵심 목표는 단순한 CRUD가 아니다.
아래 4가지 목표를 중심으로 설계되었다.

### 1) **브라우저 렌더링 구조를 근본부터 이해하기**

- React 없이 **VDOM, diff, state, effect**를 직접 구현하면서
프론트엔드 프레임워크가 내부에서 어떻게 작동하는지 구조적으로 이해함.

### 2) **직접 만든 구조를 현대적 React 아키텍처로 자연스럽게 확장**

- VDOM 버전의 설계 철학
→ React FSD 아키텍처로 옮기며,
“왜 이렇게 분리하는가?”를 코드 레벨에서 체득함.

### 3) **유지보수 가능한 대규모 구조 경험**

- React 버전에서 FSD, Barrel Pattern(index.js), Container–Presenter 등을 도입하여
대규모 프로젝트에서도 유지보수가 가능한 구조를 구성함.

### 4) **사용자 경험(UX) + 개발 경험(DX) 향상시키기**

* 디자인 토큰
* 전역 Toast
* Layout 시스템
* 무한 스크롤 + 스크롤 복원


---

# 🧩 Shared Features (공통 구현 기능)

두 버전 모두 다음 기능을 포함합니다:

* 게시글 CRUD
* 댓글 CRUD
* 좋아요 토글
* 인증(Login/Signup)
* sessionStorage 기반 세션 유지
* 액션 모달
* 토스트 메시지
* 디자인 토큰 기반 UI

하지만 **구현 방식은 VDOM 버전과 React 버전이 완전히 다르기 때문에**,
각 버전 README에서 자세히 설명합니다.

---

# 🛠️ Development Journey

### **Phase 1 — VDOM + SPA Architecture (Learning Phase)**

프레임워크에 의존하지 않고,
렌더링 엔진 + 라우터 + 상태 관리 + 이벤트 시스템을
**완전 자체 제작**하며 프론트엔드의 근본을 학습.

→ 이 단계에서 React의 핵심 구조를 직접 구현해봄.

---

### **Phase 2 — React 19 + FSD Migration (Practical Phase)**

학습한 내용을 실제 서비스 아키텍처로 재구성.

* FSD 구조 정착
* React Query 도입
* Data Router 기반 네비게이션
* Container–Presenter 및 Compound Component
* Barrel Pattern(index.js)로 도메인 API 구성
* UI/로직 분리 및 상위 책임 재배치

→ 이 단계에서 **실전 개발에서 사용되는 구조적 패턴**을 구축.

---

# 🧭 Repository Structure

```
/
├── vdom-version        # Vanilla JavaScript + Custom VDOM 버전
├── react-version       # React 19 + Router 7 + FSD 버전
└── README.md           # (현재 파일) 프로젝트 전체 설명 & 버전 안내
```

---

# 🎉 Thanks for reading!

프론트엔드 아키텍처를 깊이 이해하고 실제로 구현한 프로젝트입니다.
