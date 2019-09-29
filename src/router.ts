import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";

Vue.use(Router);

export function createRouter() {
	return new Router({
		mode: "history", //一定要是history模式
		routes: [
			{
				path: "/",
				name: "home",
				component: Home
			},
			{
				path: "/about",
				name: "about",
				component: () => import(/* webpackChunkName: "about" */ "./views/About")
            },
            {
				path: "/lang",
				name: "lang",
				component: () => import(/* webpackChunkName: "about" */ "./components/ChangeLanguage")
			}
		]
	});
}
