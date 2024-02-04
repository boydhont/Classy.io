

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.kpvwrMNs.js","_app/immutable/chunks/scheduler.uY8I1iGY.js","_app/immutable/chunks/index.7aQu-vtX.js","_app/immutable/chunks/index.SoIEjqXw.js"];
export const stylesheets = [];
export const fonts = [];
