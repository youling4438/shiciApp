
export default {
  change() {
    try {
      fetch("https://api.gushi.ci/all.json").then((result) => result.json()).then((jsonResult) => {
        // const { content, origin, author, category } = jsonResult;
        const { content } = jsonResult;
        return {
          "oneShici": content,
        }
      });
    }
    catch (err) {
      throw new Error(err);
    }
  },
}
