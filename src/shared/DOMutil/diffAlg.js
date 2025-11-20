//boolean 타입 함수

import { render } from "./render.js";

//바뀌면 true
function changed(a, b) {
  if (a == null && b == null) return false;
  if (a == null || b == null) return true;

  // text-node
  if (typeof a === "string" || typeof b === "string") {
    return a !== b;
  }

  return a.type !== b.type;
}

//특정 노드를 업데이트/갱신하는 함수
//트리이기 때문에 재귀함수로 구현됨.
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

  //완전히 다른 노드 -> 교체
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

  if (newNode.type === "input") {
    updateProps(element, newNode.props, oldNode.props);
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
function updateProps(element, newProps, oldProps) {
  //새 props 적용 -> 추가된 props 속성 추가
  //props는 원래 항상 있으나 ""처리가 되는 것이기 때문에 새로 props자체를 추가하지 않고
  //속성의 값을 추가하는 형태로 진행된다.
  for (let k in newProps) {
    if (k.startsWith("on")) continue;
    if (element[k] !== newProps[k]) {
      element[k] = newProps[k];
    }
  }

  //제거된 props 적용 -> 삭제된 props 속성 제거
  for (let k in oldProps) {
    if (!(k in newProps)) {
      element[k] = "";
    }
  }
}
