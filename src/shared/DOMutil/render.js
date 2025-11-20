export function render(vnode) {
  console.log("render node:", vnode);
  //vnode = children ={type, props , children }

  //재귀함수여서 text 또는 아무것도 없을 때까지 재귀하기 때문에 해당 구문이 꼭 필요함.
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }

  //1. VDOM으로 그린 객체를 실제 DOM을 생성한다.
  const element = document.createElement(vnode.type);

  //##props
  //element[k] = v는 js dom 객체의 프로퍼티를 설정하는 것
  for (let key in vnode.props) {
    const value = vnode.props[key];

    if (key.startsWith("on") && typeof value === "function") {
      // oninput → input
      const eventName = key.slice(2); // input, blur
      element.addEventListener(eventName, value);
    } else {
      // 일반 속성
      element[key] = value;
    }
  }

  //##children
  //2. 해당 부분에서 재귀함수로 돌며 text가 string으로 나올때까지 순회한다.
  const children = Array.isArray(vnode.children)
    ? vnode.children
    : vnode.children != null
      ? [vnode.children]
      : [];

  children.forEach((child) => {
    //돔트리에 생성한 노드를 붙인다. (attach)
    element.appendChild(render(child));
  });

  return element;
}
