import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
    eleventyConfig.setInputDirectory('src');
    eleventyConfig.setOutputDirectory('dist');
    eleventyConfig.addPassthroughCopy('src/images');
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPlugin(HtmlBasePlugin);

    return {
        pathPrefix: process.env.PATH_PREFIX || "/",
        dir: { input: "src", output: "dist" },
    };
}

export const config = {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
};