module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("images");

  // Enable HTML pretty printing (indentation)
  eleventyConfig.addTransform("pretty", require("./utils/pretty"));

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "includes",
      layouts: "layouts",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
