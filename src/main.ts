import Vue from "vue";
import App from "./App";
import { createStore } from "@/store";
import { createRouter } from "@/router";
import './plugins/element.js'
import i18n from './i18n'

// import "./registerServiceWorker";
Vue.config.productionTip = false;

// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export function createApp() {
	const router = createRouter();
	const store = createStore();
	const app = new Vue({
        router,
        store,
        i18n,

        // 根实例简单的渲染应用程序组件。
        render: h => h(App)
    });
	return { app, store, router };
}
