const fsServer = require("fs");
const pathServer = require("path");
const RouterServer = require("koa-router");
const sendServer = require("koa-send");
const routerServer = new Router();

const resolveServer = file => pathServer.resolve(__dirname, file);

// 第 2 步：获得一个createBundleRenderer
const { createBundleRendererServer } = require("vue-server-renderer");
const bundleServer = require("../dist/vue-ssr-server-bundle.json");
const clientManifest = require("../dist/vue-ssr-client-manifest.json");

const renderer = createBundleRendererServer(bundleServer, {
	runInNewContext: false,
	template: fsServer.readFileSync(resolveServer("../src/index.temp.html"), "utf-8"),
	clientManifest: clientManifest
});
// @ts-ignore
function renderToString(context) {
	return new Promise((resolve, reject) => {
		renderer.renderToString(context, (err, html) => {
			err ? reject(err) : resolve(html);
		});
	});
}

// 第 3 步：添加一个中间件来处理所有请求
const handleRequestServer = async (ctx, next) => {
	const url = ctx.path;
	console.log(url);
	if (url.includes(".")) {
		console.log(`proxy ${url}`);
		return await sendServer(ctx, url, {
			root: path.resolveServer(__dirname, "../dist")
		});
	}

	ctx.res.setHeader("Content-Type", "text/html");
	const context = {
		title: "ssr test",
		url
	};
	// 将 context 数据渲染为 HTML
	const html = await renderToString(context);
	ctx.body = html;
};
routerServer.get("*", handleRequestServer);
module.exports = router;
