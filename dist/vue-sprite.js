import { ref as i, onMounted as f, computed as g, openBlock as m, createElementBlock as S, createElementVNode as v } from "vue";
const _ = (e, s) => {
  const n = e.__vccOpts || e;
  for (const [t, o] of s)
    n[t] = o;
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
  setup(e) {
    const s = i(e.name), n = typeof window.localStorage < "u", t = i(null), o = i(null), a = i(null), d = (c) => {
      o.value || t.value.insertAdjacentHTML("beforeend", c);
    }, u = async (c) => {
      if (n) {
        const l = localStorage.getItem("inlineSVGsize"), p = localStorage.getItem("inlineSVGdata"), r = await (await fetch(c)).text();
        l && l === r.length.toString() ? a.value = p : (a.value = r, localStorage.setItem("inlineSVGdata", r), localStorage.setItem("inlineSVGsize", r.length.toString()));
      } else {
        const l = await fetch(c);
        a.value = await l.text();
      }
      d(a.value);
    };
    return f(() => {
      t.value = document.getElementById("app"), o.value = document.getElementById("iconset"), u(e.file);
    }), {
      id: g(() => s.value)
    };
  }
}, I = { class: "svg-icon" }, x = ["xlink:href"];
function y(e, s, n, t, o, a) {
  return m(), S("svg", I, [
    v("use", {
      "xlink:href": `#${t.id}`
    }, null, 8, x)
  ]);
}
const V = /* @__PURE__ */ _(h, [["render", y]]);
export {
  V as default
};
