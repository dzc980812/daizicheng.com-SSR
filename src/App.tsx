import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
// import Component from "vue-class-component";

@Component<App>({})
export default class App extends Vue {
	render() {
		return (
			<div id="app">
				<div id="nav">
					<router-link to="/">Haome</router-link> |<router-link to="/about">About</router-link>|
					<router-link to="/lang">lang</router-link>
				</div>
				<router-view />
			</div>
		);
	}
}
