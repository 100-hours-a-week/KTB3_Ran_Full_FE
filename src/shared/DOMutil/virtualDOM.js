function h(type, props, ...children) {
  return { type, props: props || {}, children: children.flat() };
}

export default h;
