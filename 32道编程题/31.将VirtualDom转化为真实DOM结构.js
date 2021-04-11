function render(vnode, dom) {
  dom.appendChild(_render(vnode));
}
function _render(vnode) {
  if (typeof vnode === "number") vnode = String(vnode);
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }
  const dom = document.createElement(vnode.tag);
  for (let [key, value] of Object.entries(vnode.props)) {
    dom.setAttribute(key, value);
  }
  vnode.children.forEach((item) => {
    render(item, dom);
  });
  return dom;
}
render(
  {
    tag: "div",
    props: {
      id: "box",
    },
    children: [
      {
        tag: "a",
        props: {
          id: "link",
        },
        children: [],
      },
    ],
  },
  document.querySelector("#container")
);
