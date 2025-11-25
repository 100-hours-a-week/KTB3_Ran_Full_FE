export function render(vnode) {
  console.log("render node:", vnode);
  //vnode = children ={type, props , children }

  //1 : Vnode의 돔 종류에 따른 처리
  //1-1. textNode처리
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }

  //1-2. ElementNode 처리
  const element = document.createElement(vnode.type);

  //2. props
  //vnode의 props는 여러개일 수 있기 때문에 for문으로 받는다.
  for (let key in vnode.props) {
    const value = vnode.props[key];

    //2-1. 이벤트 처리
    if (key.startsWith("on") && typeof value === "function") {
      const eventName = key.slice(2).toLowerCase(); // input, blur
      element.addEventListener(eventName, value); //Input, value
    } else {
      // 일반 속성
      element[key] = value;
    }
  }

  //3. children
  //배열의 형태로 통일 시키기 위해 배열로 변경
  const children = Array.isArray(vnode.children)
    ? vnode.children
    : vnode.children != null
      ? [vnode.children]
      : [];

  //4. 돔트리에 생성한 노드를 붙인다. (attach)
  children.forEach((child) => {
    element.appendChild(render(child));
  });

  return element;
}
