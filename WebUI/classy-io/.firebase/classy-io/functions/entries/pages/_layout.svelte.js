import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap");',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
