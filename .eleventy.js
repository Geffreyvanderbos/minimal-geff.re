module.exports = function(eleventyConfig) {
  // Copy static assets directly to output
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("fonts");

  // Create a collection for the markdown file
  eleventyConfig.addCollection("content", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./content.md");
  });

  // Create a collection for pages with frontmatter
  eleventyConfig.addCollection("pages", function(collectionApi) {
    return collectionApi.getAll()
      .filter(item => item.data.inNav == true && item.url !== '/')
      .sort((a, b) => (a.data.title || '').localeCompare(b.data.title || ''));
  });

  // Add shortcode for displaying pages
  eleventyConfig.addShortcode("pages", function(collections, page) {
    const pages = collections.pages;
    return pages
      .filter(p => p.url !== page.url)  // Exclude current page
      .map(p => `- [${p.data.title}](${p.url})`)
      .join('\n\n');
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};