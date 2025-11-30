
# DTO와 Props 역할 분리

초기 개발 당시, **DTO와 Props의 역할이 섞여 있는 구조**로 인해 UI 컴포넌트에서 직접 API 응답 필드를 참조하거나, fetch 응답을 그대로 컴포넌트에 전달하는 비일관적인 패턴이 존재했다.

---

## 문제 원인

1. **DTO와 UI 데이터(Props)의 경계가 없었음**
   - 백엔드 응답을 컴포넌트에서 그대로 사용하여 컴포넌트 의존성이 증가.
   - 백엔드 필드명이 바뀌면 모든 컴포넌트가 영향을 받는 구조.

2. **컴포넌트마다 서로 다른 방식으로 인자를 전달함**
   - 어떤 컴포넌트는 `{title, content}` 구조 분해 할당,
   - 어떤 컴포넌트는 객체 하나(props)를 받는 구조.
     → **일관성 부족 → 유지보수성 저하**

---

## 개선 목표

### 1) DTO : 서버와의 계약 모델

→ 백엔드가 정의한 데이터 형태 그대로.

### 2) Props : UI 컴포넌트의 데이터 모델

→ 화면에 필요한 형태로 재가공한 최종 입력 데이터.

### 3) **fetch → DTO → Props → UI**


---

# 개선 과정

## 1. Props 구조 통일

기존 코드:

```jsx
function Table(){
  Card({ title: "제목", content: "내용" });
}

function Card({ title, content }){
  ...
}
```

→ 컴포넌트마다 전달 방식이 다르고, 구조 분해 할당이 기본 API처럼 보임.

### 개선 코드: props 객체 하나만 받도록 통일

```jsx
function Table() {
  const props = { title: "제목", content: "내용" };
  Card(props);
}

function Card(props) {
  ...
}
```

### 도입 이유

- **모든 컴포넌트의 입력 형태를 통일하기 위한 일관성 확보**
- 타입 정의 시 객체 하나로 관리하는 것이 가장 안정적
- API 문서화 및 유지보수 시 props 모델만 보면 UI 요구사항을 정확히 알 수 있음

---

## 2. DTO와 Props의 역할 분리

### 전달할 때 — DTO로 서버와의 계약을 지킴

```jsx
const data = {
  email: emailField.value,
  password: passwordField.value,
  confirmPassword: passwordConfirmField.value,
  username: usernameField.value,
};

const dto = signupDto(data);
const signupAPI = await signup(dto);
```

DTO 정의:

```jsx
export const signupDto = (data) => ({
  email: data.email,
  password: data.password,
  confirmPassword: data.confirmPassword,
  username: data.username,
});
```

→ **서버 규칙을 지키는 안전한 변환 단계**를 명시적으로 둠.

---

## 3. 서버 응답 → Props로 가공

```jsx
const json = await response.json();

if (response.ok) {
  const data = json.data;
  const postData = boardDetailProps(data);
  ...
}
```

### DTO → Props로 변환한 이유

- DTO는 **백엔드가 정의한 데이터 형태**이며,
- Props는 **UI 컴포넌트에서 즉시 렌더링 가능한 최종 데이터 모델**이다.

->

- UI에서 불필요한 필드는 제거하고
- 날짜 포맷, 문자열 처리 등 UI 맞춤 변환을 Props 단계에서 수행
- 컴포넌트는 “정제된 데이터만” 받도록 설계
  → **관심사의 분리(Clean Architecture 원칙)** 충족

