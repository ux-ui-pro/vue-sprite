import { ref as l, onMounted as g, computed as h, openBlock as _, createElementBlock as v, createElementVNode as y } from "vue";
const I = (n, o) => {
  const e = n.__vccOpts || n;
  for (const [a, c] of o)
    e[a] = c;
  return e;
}, m = l(!1), w = {
  name: "AppIcon",
  props: {
    name: {
      type: String,
      required: !0
    },
    file: {
      type: String,
      default: "/sprite.svg"
    }
  },
  setup(n) {
    const o = l(null), e = l(null), a = typeof window.localStorage < "u", c = (t) => {
      const i = /id="sprite"/.test(t);
      !m.value && i && (o.value.insertAdjacentHTML("beforeend", t), m.value = !0);
    }, r = async (t) => (await fetch(t, { method: "HEAD" })).headers.get("content-type") === "image/svg+xml", S = async (t) => {
      const s = await (await fetch(t)).text(), d = s.length, p = async () => {
        e.value = s, await r(t) && (localStorage.setItem("inlineSVGData", s), localStorage.setItem("inlineSVGSize", d.toString()));
      };
      if (a) {
        const f = localStorage.getItem("inlineSVGSize"), u = localStorage.getItem("inlineSVGData");
        f && u ? f !== d.toString() ? await p() : e.value = u : await p();
      } else
        e.value = s;
      c(e.value);
    };
    return g(() => {
      o.value = document.getElementById("app"), S(n.file);
    }), {
      iconName: h(() => n.name)
    };
  }
}, V = { class: "svg-icon" }, x = ["href"];
function D(n, o, e, a, c, r) {
  return _(), v("svg", V, [
    y("use", {
      href: `#${a.iconName}`
    }, null, 8, x)
  ]);
}
const k = /* @__PURE__ */ I(w, [["render", D]]);
export {
  k as default
};
