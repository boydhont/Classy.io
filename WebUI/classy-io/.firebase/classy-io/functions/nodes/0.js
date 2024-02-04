

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.epRRkPOC.js","_app/immutable/chunks/scheduler.7GYRLKEW.js","_app/immutable/chunks/index.9at0kmi4.js"];
export const stylesheets = ["_app/immutable/assets/0.Ius9Oehp.css"];
export const fonts = [];
