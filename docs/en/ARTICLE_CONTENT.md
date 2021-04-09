# Filling an article

## How to write an article
Any article contains meta-information and content.

### Meta information
Meta is at the very top of the article between the two triple dashes `---`
```md
---
title: 'This is an <i>example</i> of the use of components'
coverImageAlt: 'Image description'
date: '2019-03-16T05:35:07.322Z'
tag: 'web-development'
---
```
where

#### `title`
The title of the article. The characters enclosed in the tag `<i>` on the article page will be displayed in the font Amita.
Also, by default this title is used for SEO.

#### `description`
This field is used when `title` does not suits for `description` in `meta` and needs to be overridden.

#### `coverImageAlt`
Alt-text for the main image of the article. Alt-text must describe in words what is shown in the image.
This is very useful for screen readers.

#### `date`
The date the article was created in [ISO-8601] format (https://en.wikipedia.org/wiki/ISO_8601)

#### `tag`
Section in the blog to which the article belongs

### Content
The article content is consists of [markdown](https://www.markdownguide.org/getting-started/#whats-markdown), but with some upgrades.
In addition to the [standard markdown syntax](https://www.markdownguide.org/basic-syntax/)
it can use specially prepared custom components that we developed for our blog.

[More about custom components](./COMPONENTS.md).
