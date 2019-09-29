import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class About extends Vue {
	@Prop() private msg!: string;
	render() {
		return (
			<div class="About">
				<h1>{"Abousst"}</h1>
			</div>
		);
	}
}
