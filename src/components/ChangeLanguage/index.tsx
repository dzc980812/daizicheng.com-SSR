import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component({})
export default class changeLanguage extends Vue {
	created() {
		this.getTime();
	}
	getTime() {
		axios.get("http://127.0.0.1:3000/api/getTime", {}).then(res => {
			console.log(res, "abcd");
		});
	}
	optValue: string = "请选择语言类型";
	options: Array<any> = [
		{
			value: "zh",
			label: "中3文"
		},
		{
			value: "en",
			label: "英3文"
		}
	];

	render(h: any) {
		return (
			<div id="changeLanguage">
				<el-select
					value={this.optValue}
					onInput={(val: any) => {
						this.optValue = val;
						this.$i18n.locale = val;
						this.getTime();
					}}
				>
					{this.options.map(res => {
						return <el-option label={res.label} value={res.value} />;
					})}
				</el-select>

				<div>{this.$t("message")}</div>
			</div>
		);
	}
}
