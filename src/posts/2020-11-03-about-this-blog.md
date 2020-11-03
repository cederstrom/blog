---
title: 'About this blog'
description: Discussion about the technical aspects of this blog.
date: 2020-11-03
---

As you probably have noticed this blog is quite... Minimal. I like to have it that way, mainly because I suck a UI design. But also because I think that that web sites is often overly technically complicated with hundreads of libraries involved in building and running a site.

## The site

For this site I have choosen to usa a static site generator ([Eleventy](https://www.11ty.dev/) to be more precise) sice it allows me to build a fast and pre-optimized site. And since I do not need any advanced client side enhancements I can just generate the entire site and serve it to you statically. Great!

## Testing

I feel very strong about software testing. Over the years of coding I have learnt that if I do not test my code, bugs will creap out into production. The same goes for a staticly generated blog site. Since Eleventy does all the heavy lifting for me there is not much left to test. But somethings is great to check anyway. For example I run a suite of Cypress tests to make sure that the generated site has working links, dates and some other stuff which comes from my templates. Easy and catches all the low haning fruits.

## Styling

In order to get to some level of decency reagrding design I choose to use one of my favorite open source CSS projects; [Water.css](https://watercss.kognise.dev/). Is soo simple and light-weigth that it is almost embarrassing. But, It fits my needs perfectly. Just download the minified version and drop it onto you site, et voilà, it looks good on both desktop, table and mobile. No need to sprinkle CSS classes all over your markup, Water.css works with the standard HTML elements.

## Hosting

Again, keeping things light and easy the choise for hosting easily fell on GitHub Pages. Setting up deployment only took a couple of minutes, including SSL and custom domain. All thanks to the modularity of GitHub Actions and this specific action: [GitHub Actions for GitHub Pages](https://github.com/marketplace/actions/github-pages-action)

If you are interested in the technology behind this site you can check out the code on [GitHub](https://github.com/cederstrom/blog). Or, send me a message on [Twitter](https://twitter.com/a_cederstrom) 🙂
