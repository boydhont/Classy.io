export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.YlfjD0RI.js","app":"_app/immutable/entry/app._4VXZ8yZ.js","imports":["_app/immutable/entry/start.YlfjD0RI.js","_app/immutable/chunks/entry.AhSJ9dEQ.js","_app/immutable/chunks/scheduler.uY8I1iGY.js","_app/immutable/chunks/index.SoIEjqXw.js","_app/immutable/entry/app._4VXZ8yZ.js","_app/immutable/chunks/scheduler.uY8I1iGY.js","_app/immutable/chunks/index.7aQu-vtX.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
