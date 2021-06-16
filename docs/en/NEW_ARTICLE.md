# Creating a new article

## Article template generator

To create a new article use the command `yarn article en my-article-name`,
where en is the language (possible choices are en or ru) and `my-article-name` is the name of the new article.
This command will create a new template article and pictures for it and add it to the home page.

## Article files

All articles you can find in the [`_posts`](../_posts) folder.
The name of the file corresponds to the `url` of the article, i.e. if you create a file named `new-awesome-post.md` in `_posts/en`,
then be sure to find it at `http://localhost:3000/en/article/new-awesome-post`.

### Images

Images for articles are in the [`public/images`](../public/images/) folder. We can insert images into articles in several ways:
``jsx
<Img src='/foo.png' alt='Description of what's shown in foo.png' withOutProcessing>

```
or
``jsx
<Img imageName='foo' alt='Description of what's shown in foo.png'/>
```

In the first case, the image will not go through any processing and will be the same at all resolutions. This is best choice for images that were originally of poor quality or small size, and there is nothing you can do about it.
In the second case you have the possibility to specify different versions of the image for different breakpoints. We recommend always using the second syntax and preparing different versions of images for different breakpoints. We have the following breakpoints:

| breakpoint name | breakpoint boundaries |
| --------------- | --------------------- |
| mobile.all      | 0 - 767px             |
| tablet.s        | 768px - 1023px        |
| tablet.m        | 1024px - 1279px       |
| tablet.all      | 768px - 1279px        |
| desktop.s       | 1280px - 1359px       |
| desktop.m       | 1360px - 1919px       |
| desktop.l       | 1920px - ∞            |
| desktop.all     | 1280px - ∞            |
| all             | 0 - ∞                 |

Different versions of the same image for different breakpoints should be put in the same folder and named according to the breakpoints on which you want to display them. For example, you have an image `foo` and it looks slightly different on desktop, tablet and mobile, then you need to create a folder `foo` and put in it 3 images, each with the same name as the breakpoint on which it will be used:

```
└─ foo
    ├─ mobile.all.png
    ├─ tablet.all.png
    └─ desktop.all.png
```

We also have the ability to prepare different images for screens with different dpi. We prepare three versions of the image, for screens with 1x, 2x and 3x dpi. So, if you want your images to be resized during processing, then place the original image 3x the size of its size in the article in the [`public/images/resize`](../public/images/resize) folder.

If you don't want to resize images when processing, then place the original image 1x the size of its size in the article in the [`public/images/dont-resize`](../public/images/dont-resize) folder. This can come in handy when you don't have the ability to get a source image 3x the size of its size in the article.

We recommend always resizing images.

SVG and GIF images are always placed in the [`public/images/dont-resize`](../public/images/dont-resize) folder and are connected using the syntax `<Img src='/foo.gif' alt='Description of what's shown in foo.gif' withOutProcessing>`.

For each article it is obligatory to create images postCover ([Screenshot of the "postCover" image for article header](http://s.csssr.ru/U31J879TR/20200527101626.jpg)).

## Article order

Articles are sorted by date of publication. From the earliest to the latest.

## Selected articles

In order for an article to appear on the main ["Selected Articles"] block (http://s.csssr.ru/UJ4QCUXM4/2021-06-11-17-33-45.jpg), you need to add the name of the article to the file `selectedPostsByLanguage.json`. The order and number determines the order and number of articles in the block.
