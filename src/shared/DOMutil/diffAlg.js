//boolean 타입 함수
import propMap from "./propMap.js";
import { render } from "./render.js";

//바뀌면 true
function changed(a, b) {
  if (a == null && b == null) return false;
  if (a == null || b == null) return true; //하나의 노드라도 값이 있으면 변화됨.

  // 둘 다 문자열 타입일 경우 내용 비교
  if (typeof a === "string" || typeof b === "string") return a !== b;

  // 타입이 다르면 완전히 다른 노드
  if (typeof a !== typeof b) return true;

  //노드 태그 비교
  return a.type !== b.type;
}

//특정 노드를 업데이트/갱신하는 함수
//index는 형제 노드 때문에 존재하는 것.
export function updateElement(parent, newNode, oldNode, index = 0) {
  const element = parent.childNodes[index]; //텍스트 노드 포함

  // 1) old는 없고 new만 있다 → append
  if (oldNode == null) {
    if (newNode != null) parent.appendChild(render(newNode));
    return;
  }

  // 2) 새 노드에 없음 -> 삭제
  if (newNode == null) {
    parent.removeChild(element);
    return;
  }

  //3) 완전히 다른 노드 -> 교체
  //바뀌었으면 true
  if (changed(oldNode, newNode)) {
    parent.replaceChild(render(newNode), element);
    return;
  }

  //같은 노드 -> props갱신 + children 재귀 diff
  if (typeof newNode === "string") {
    if (element.nodeType === Node.TEXT_NODE) {
      if (element.textContent !== newNode) {
        element.textContent = newNode;
      }
    } else {
      parent.replaceChild(document.createTextNode(newNode), element);
    }
    return;
  }

  updateProps(element, newNode.props, oldNode.props);

  // 7) children diff
  const max = Math.max(newNode.children.length, oldNode.children.length);

  for (let i = 0; i < max; i++) {
    updateElement(element, newNode.children[i], oldNode.children[i], i);
  }
}

//props를 업데이트
function updateProps(element, newProps = {}, oldProps = {}) {
  const allKeys = new Set([
    ...Object.keys(oldProps || {}),
    ...Object.keys(newProps || {}),
  ]);

  const applyProp = (el, key, value) => {
    const targetKey = propMap[key] || key;

    if (targetKey === "dataset") {
      const next = value || {};
      Object.keys(oldProps.dataset || {}).forEach((dataKey) => {
        if (!(dataKey in next)) delete el.dataset[dataKey];
      });
      Object.entries(next).forEach(([dataKey, dataValue]) => {
        if (dataValue == null) delete el.dataset[dataKey];
        else el.dataset[dataKey] = dataValue;
      });
      return;
    }

    if (targetKey.startsWith("data-")) {
      if (value == null) el.removeAttribute(targetKey);
      else el.setAttribute(targetKey, value);
      return;
    }

    if (targetKey === "style" && typeof value === "string") {
      el.setAttribute("style", value);
      return;
    }

    if (value == null) {
      el[targetKey] = "";
      return;
    }

    el[targetKey] = value;
  };

  allKeys.forEach((key) => {
    const newValue = newProps[key];
    applyProp(element, key, newValue);
  });
}
