export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Shrink_wrap.svg","classy.io_logo.svg","favicon.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.S4b8NdHo.js","app":"_app/immutable/entry/app.UmzgUL41.js","imports":["_app/immutable/entry/start.S4b8NdHo.js","_app/immutable/chunks/entry.k2XAri8T.js","_app/immutable/chunks/scheduler.7GYRLKEW.js","_app/immutable/chunks/index.NodWvTt2.js","_app/immutable/entry/app.UmzgUL41.js","_app/immutable/chunks/scheduler.7GYRLKEW.js","_app/immutable/chunks/index.9at0kmi4.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
