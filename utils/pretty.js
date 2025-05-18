const { JSDOM } = require("jsdom");
const pretty = require("pretty");

module.exports = (content, outputPath) => {
  if (outputPath && outputPath.endsWith(".html")) {
    const dom = new JSDOM(content);
    const document = dom.window.document;
    // Prepend the doctype manually
    return (
      "<!DOCTYPE html>\n" +
      pretty(document.documentElement.outerHTML, { ocd: true })
    );
  }
  return content;
};
