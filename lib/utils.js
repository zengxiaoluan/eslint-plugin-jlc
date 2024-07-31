const { homepage, version } = require("../package.json");
const path = require("path");

function url({ id }) {
  const url = new URL(homepage);
  const rule = path.basename(id, ".js");
  url.hash = "";
  url.pathname += `/blob/v${version}/docs/rules/${rule}.md`;
  return url.toString();
}

module.exports = {
  url,
};
