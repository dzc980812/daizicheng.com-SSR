var fn_getTime = async (ctx, next) => {
	const time = new Date().getTime();
	console.log(time);
	ctx.body = {
		time: time
	};
};

module.exports = {
	"GET /api/getTime": fn_getTime
};
