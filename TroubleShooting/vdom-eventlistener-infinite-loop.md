# VDOM 환경에서 이벤트 리스너로 발생한 무한 루프

## 1. 문제 상황

로그인 UI를 VDOM 기반으로 리팩터링하는 과정에서
**입력할 때마다 setState가 수십 번씩 호출되는 무한 렌더 루프**가 발생했다.


```js
document.addEventListener("input", onInput);
```

모든 input 변화에서 상태를 업데이트하려고 전역 이벤트를 사용했는데,
이 코드가 **렌더링마다 반복 실행**되며 문제가 발생했다.

---

## 2. 원인 분석 — Effect 누적 등록

내 커스텀 VDOM 구조에서는:

* `setState()` → `rerender()` 호출
* `rerender()` → effect 다시 실행
* effect 안에서 이벤트 리스너 등록

즉, “렌더링 → effect 실행 → 이벤트 등록 → 또 setState → 또 렌더링 → 또 이벤트 등록…”이 반복됨.

결과적으로:

* input 한 번 → 이벤트 리스너가 수십 개 중첩 등록됨
* 등록된 onInput 각각이 또 setState 호출
* → 무한 루프 발생

React에서 말하는 대표적인 사이드 이펙트 문제와 동일했다.

---

## 3. 구조적 이해 — Effect는 “등록 + 정리(cleanup)”가 한 세트

React 공식 문서에서도 강조하는 부분:

> **컴포넌트 mount 시 → effect 등록**
> **컴포넌트 unmount 시 → cleanup 실행**

SPA/VDOM 환경도 마찬가지다.
등록만 하고 cleanup을 하지 않으면 무한 루프 또는 메모리 누수가 반드시 발생한다.

나의 기존 코드는 등록만 있고, cleanup이 없었다.

---

## 4. 해결 — Effect에서 cleanup 반환

전역 이벤트 사용 시 반드시 아래처럼 정리 함수(cleanup)를 반환해야 한다.

```js
document.addEventListener("input", onInput);

return () => {
  document.removeEventListener("input", onInput);
};
```

이제 렌더링이 다시 실행되기 전에:

* 이전 effect의 이벤트는 제거되고
* 새로운 effect가 단 한 번만 등록됨

→ 무한 렌더 루프 해결
→ 이벤트 중첩 등록도 방지됨

---

## 5. 인사이트 (정리)

1. **VDOM/React 구조에서는 “렌더될 때마다 effect가 다시 실행된다”는 사실을 잊지 말아야 한다.**
2. 전역 이벤트, 타이머, 소켓 구독 등 “중복될 가능성이 있는 effect”는 반드시 cleanup을 포함해야 한다.
3. 상태 기반 렌더링 구조를 제대로 이해하지 못하면 작은 한 줄이 대규모 문제를 만든다.
4. 결국 effect는 항상
   **“등록(Register) → 정리(Cleanup)”**
   이 두 단계가 한 몸이다.


