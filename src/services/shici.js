
export default {
	change() {
		try {
			return fetch("https://api.gushi.ci/all.json");
		}
		catch (err) {
			throw new Error(err);
		}
	},
}
