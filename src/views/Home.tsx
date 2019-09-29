// import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld"; // @ is an alias to /src
import Vue from "vue";
import Component from "vue-class-component";

@Component({
	components: {
		HelloWorld
	}
})
export default class Home extends Vue {
	render() {
		return (
			<div class="home">
				<hello-world msg="Home->SSRUpDate"></hello-world>
			</div>
		);
	}
}
