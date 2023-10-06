import { ref as r, onMounted as f, computed as g, openBlock as m, createElementBlock as S, createElementVNode as v } from "vue";
const _ = (t, o) => {
  const n = t.__vccOpts || t;
  for (const [e, a] of o)
    n[e] = a;
  return n;
}, h = {
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
    const o = r(null), n = r(null), e = r(null), a = r(t.name), i = typeof window.localStorage < "u", u = (s) => {
      n.value || o.value.insertAdjacentHTML("beforeend", s);
    }, p = async (s) => {
      if (i) {
        const l = localStorage.getItem("inlineSVGSize"), d = localStorage.getItem("inlineSVGData"), c = await (await fetch(s)).text();
        l && l === c.length.toString() ? e.value = d : (e.value = c, localStorage.setItem("inlineSVGData", c), localStorage.setItem("inlineSVGSize", c.length.toString()));
      } else {
        const l = await fetch(s);
        e.value = await l.text();
      }
      u(e.value);
    };
    return f(() => {
      o.value = document.getElementById("app"), n.value = document.getElementById("sprite"), p(t.file);
    }), {
      name: g(() => a.value)
    };
  }
}, I = { class: "svg-icon" }, x = ["xlink:href"];
function y(t, o, n, e, a, i) {
  return m(), S("svg", I, [
    v("use", {
      "xlink:href": `#${e.name}`
    }, null, 8, x)
  ]);
}
const D = /* @__PURE__ */ _(h, [["render", y]]);
export {
  D as default
};
