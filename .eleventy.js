const fs = require("fs");
const path = require("path");
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");

  // Function to bundle CSS files
  function bundleCSS() {
    const cssDir = path.join(__dirname, "styles");
    const cssFiles = [
      path.join(cssDir, "reset.css"),
      path.join(cssDir, "variables.css"),
      path.join(cssDir, "global.css"),
      path.join(cssDir, "main-content.css"),
    ];

    let bundledCSS = "";
    cssFiles.forEach((file) => {
      bundledCSS += fs.readFileSync(file, "utf8") + "\n";
    });

    return new CleanCSS({}).minify(bundledCSS).styles;
  }

  eleventyConfig.on("beforeBuild", () => {
    const bundledCSS = bundleCSS();
    const outputDir = path.join(__dirname, "_site");

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(path.join(outputDir, "style.css"), bundledCSS);
  });

  // Enable HTML pretty printing (indentation)
  eleventyConfig.addTransform("pretty", require("./utils/pretty"));

  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("styles");

  return {
    dir: {
      input: "content",
      output: "_site",
      includes: "../includes",
      layouts: "../layouts",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
