import { ref as f, openBlock as g, createElementBlock as p, createElementVNode as m } from "vue";
const u = (o, c) => {
  const n = o.__vccOpts || o;
  for (const [e, t] of c)
    n[e] = t;
  return n;
}, w = {
  name: "Icon",
  props: {
    id: {
      type: String,
      required: !0
    }
  },
  setup(o) {
    const c = f(o.id), n = typeof window.localStorage < "u", e = document.body, t = (s) => {
      document.getElementById("iconset") || (e ? e.insertAdjacentHTML("beforeend", s) : document.addEventListener("DOMContentLoaded", () => {
        e.insertAdjacentHTML("beforeend", s);
      }));
    };
    return (async (s) => {
      if (n) {
        const r = localStorage.getItem("inlineSVGsize"), a = localStorage.getItem("inlineSVGdata"), d = await fetch(s);
        if (!d.ok)
          throw new Error("Network response was not ok");
        const i = await d.text();
        r && r === i.length.toString() ? t(a) : (t(i), localStorage.setItem("inlineSVGdata", i), localStorage.setItem("inlineSVGsize", i.length.toString()));
      } else {
        const r = await fetch(s);
        if (!r.ok)
          throw new Error("Network response was not ok");
        const a = await r.text();
        t(a);
      }
    })("./icons.svg").then(), {
      id: c
    };
  }
}, S = { class: "svg-icon" }, _ = ["xlink:href"];
function h(o, c, n, e, t, l) {
  return g(), p("svg", S, [
    m("use", {
      "xlink:href": `#${e.id}`
    }, null, 8, _)
  ]);
}
const x = /* @__PURE__ */ u(w, [["render", h]]);
export {
  x as default
};
