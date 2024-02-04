

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.kMeeC8dn.js","_app/immutable/chunks/scheduler.7GYRLKEW.js","_app/immutable/chunks/index.9at0kmi4.js","_app/immutable/chunks/index.NodWvTt2.js"];
export const stylesheets = [];
export const fonts = [];
