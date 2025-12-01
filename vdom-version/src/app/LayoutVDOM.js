import h from "../shared/DOMutil/virtualDOM.js";
import HeaderVDOM from "../widgets/header/ui/HeaderVDOM.js";

//children으로 가져와서 header를 위에 둔 템플릿
function LayoutVDOM({ headerMode, children }) {
  return h("div", { className: "container" }, [
    HeaderVDOM({ mode: headerMode }),
    h("div", { className: "container" }, children),
  ]);
}

export default LayoutVDOM;
