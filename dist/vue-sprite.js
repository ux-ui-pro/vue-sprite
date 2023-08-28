import { ref as f, openBlock as g, createElementBlock as p, createElementVNode as u } from "vue";
const S = (t, i) => {
  const o = t.__vccOpts || t;
  for (const [e, n] of i)
    o[e] = n;
  return o;
}, m = {
  name: "Icon",
  props: {
    id: {
      type: String,
      required: !0
    },
    file: {
      type: String,
      default: "./sprite.svg"
    }
  },
  setup(t) {
    const i = f(t.id), o = typeof window.localStorage < "u", e = document.body, n = (s) => {
      document.getElementById("iconset") || (e ? e.insertAdjacentHTML("beforeend", s) : document.addEventListener("DOMContentLoaded", () => {
        e.insertAdjacentHTML("beforeend", s);
      }));
    };
    return (async (s) => {
      if (o) {
        const r = localStorage.getItem("inlineSVGsize"), a = localStorage.getItem("inlineSVGdata"), d = await fetch(s);
        if (!d.ok)
          throw new Error("Network response was not ok");
        const c = await d.text();
        r && r === c.length.toString() ? n(a) : (n(c), localStorage.setItem("inlineSVGdata", c), localStorage.setItem("inlineSVGsize", c.length.toString()));
      } else {
        const r = await fetch(s);
        if (!r.ok)
          throw new Error("Network response was not ok");
        const a = await r.text();
        n(a);
      }
    })(t.file).then(), {
      id: i
    };
  }
}, w = { class: "svg-icon" }, _ = ["xlink:href"];
function h(t, i, o, e, n, l) {
  return g(), p("svg", w, [
    u("use", {
      "xlink:href": `#${e.id}`
    }, null, 8, _)
  ]);
}
const y = /* @__PURE__ */ S(m, [["render", h]]);
export {
  y as default
};
