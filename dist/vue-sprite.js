import { ref as a, onMounted as g, computed as m, openBlock as S, createElementBlock as v, createElementVNode as _ } from "vue";
const h = (t, n) => {
  const o = t.__vccOpts || t;
  for (const [e, s] of n)
    o[e] = s;
  return o;
}, u = a(!1), I = {
  name: "AppIcon",
  props: {
    name: {
      type: String,
      required: !0
    },
    file: {
      type: String,
      default: "./sprite.svg"
    }
  },
  setup(t) {
    const n = a(null), o = a(null), e = a(null), s = a(t.name), i = typeof window.localStorage < "u", d = (c) => {
      u.value || (n.value.insertAdjacentHTML("beforeend", c), u.value = !0);
    }, p = async (c) => {
      if (i) {
        const l = localStorage.getItem("inlineSVGSize"), f = localStorage.getItem("inlineSVGData"), r = await (await fetch(c)).text();
        l && l === r.length.toString() ? e.value = f : (e.value = r, localStorage.setItem("inlineSVGData", r), localStorage.setItem("inlineSVGSize", r.length.toString()));
      } else {
        const l = await fetch(c);
        e.value = await l.text();
      }
      d(e.value);
    };
    return g(() => {
      n.value = document.getElementById("app"), o.value = document.getElementById("sprite"), p(t.file);
    }), {
      iconName: m(() => s.value)
    };
  }
}, x = { class: "svg-icon" }, y = ["xlink:href"];
function w(t, n, o, e, s, i) {
  return S(), v("svg", x, [
    _("use", {
      "xlink:href": `#${e.iconName}`
    }, null, 8, y)
  ]);
}
const V = /* @__PURE__ */ h(I, [["render", w]]);
export {
  V as default
};
