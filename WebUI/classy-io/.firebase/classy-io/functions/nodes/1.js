

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5eWTVmE9.js","_app/immutable/chunks/scheduler.uY8I1iGY.js","_app/immutable/chunks/index.7aQu-vtX.js","_app/immutable/chunks/entry.AhSJ9dEQ.js","_app/immutable/chunks/index.SoIEjqXw.js"];
export const stylesheets = [];
export const fonts = [];
