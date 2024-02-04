

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Hv_AROyV.js","_app/immutable/chunks/scheduler.uY8I1iGY.js","_app/immutable/chunks/index.7aQu-vtX.js"];
export const stylesheets = ["_app/immutable/assets/0.QF_SlaW8.css"];
export const fonts = [];
