# Components

All components can be viewed at [test staging](http://master.csssr-new-blog.csssr.cloud/en/article/example)

---
#### [`<Img />`](http://s.csssr.ru/U31J879TR/20200527121033.jpg)
A component that you need to insert images into your article.
Unlike the standard way to insert images into the markdown,
This component finds all images with a certain name in the static folder for a certain article,
optimizes them and substitutes several versions of it for certain screen resolutions.
You create the folder yourself in `public/posts/`, the folder name must be the same as the article file name.
The component accepts the following props

##### `imageName`
Data type: `string`\
Default value: `undefined`

The name of the image in the folder.

##### `alt`
Data type: `string`\
Default value: `undefined`

Must contain a text description of the image. It is optional, but incredibly useful for accessibility - screen readers read this description to their users. It is better to specify it everywhere. Write text that a blind person hearing it would understand what is shown in the image.

##### `withBigMargin`
Data type: `boolean`\
Default value: `false`

Specifies whether the image should have a larger indentation. This is needed for images that indent text.

##### `align`
Data type: `center` | `right` | `left`.
Default value: `center`

Responsible for the position of the image on the page.

##### Example code
```jsx
<Img imageName='digital-flowers' alt='Digital flowers in a physical real-world view' withBigMargin />
```

---
#### [`<Separator />`](http://s.csssr.ru/U31J879TR/20200527121838.jpg)
Used to separate text into logical components. Can have different images and different colors of the background. The images for this component are in the `public/components/separator` folder. It accepts the following props

##### `imageName`
Data type: `string`\
Default value: `undefined`

The name of the image in the folder.

##### `type`
Data type: `color-line` | `bg-repeat`\
Default value: `undefined`

Indicates how you want to display the image. `bg-repeat` if you want image on repeat, `color-line` if you want a single image with a colored line in the background.


##### `lineColor`
Data type: `string`\
Default value: `undefined`

If you select `color-line` in `type`, you can use this props to specify the color of the line in the background. The color can be specified [any way available in HTML](https://en.wikipedia.org/wiki/Web_colors).

##### Example code
```jsx
<Separator imageName="peopleWithBasket" type="color-line" lineColor="#d3d3ff" />
```

---
#### [`<ParagraphWithImage />`](http://s.csssr.ru/U31J879TR/20200527123603.jpg)
Paragraph component with an image in the left corner. The images for the paragraph must be in the same folder as the [`<Img />`](#img-) component. Accepts the following props

##### `imageName`
Data type: `string`\
Default value: `undefined`

The name of the image in the folder where the statics for this component lies.

##### Example code
```jsx
<ParagraphWithImage imageName="india">
  ## Lorem Ipsum

  Venenatis cras sed felis eget velit. Consectetur libero id faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi vitae. Id aliquet risus feugiat in ante metus dictum at tempor.
</ParagraphWithImage>
```

---
#### [`<Note />`](http://s.csssr.ru/U31J879TR/20200527124836.jpg)
Wraps the text in a block with a gray background

##### Example code
```jsx
<Note>
  Venenatis cras sed felis eget velit. Consectetur libero id faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi vitae. Id aliquet risus feugiat in ante metus dictum at tempor.
</Note>
```

---
#### [`<Quote />`](http://s.csssr.ru/U31J879TR/20200527125130.jpg)
It has two views, with the image on the left and with quotation marks instead of an image. Images for this component are in the `public/components/quote` folder. It accepts the following props

##### `imageName`
Data type: `string`\
Default value: `undefined`.

The name of the image in the folder.

##### `author`
Data type: `string`\
Default value: `undefined`

Name of the author of the quote.

##### `position`
Data type: `string`\
Default value: `undefined`

The position of the author of the quote.

##### `withImage`
Data type: `boolean`\
Default value: `false`

If `withImage` has a value of `true`, then the quote type with an image will be used, if not, then with quotation marks.

##### `type`
Data type: `blue` | `black`
Default value: `black`

Responsible for the appearance of the component of the quote without images. With `blue` the color of the text in the quote is blue, and the quotes are black, with `black` vice versa.

##### `linkText`
Data type: `string`\
Default value: `undefined`

The text of the link under the citation. 

##### `linkHref`
Data type: `string`\
Default value: `undefined`

URL of link under citation. 

##### Example code
```jsx
<Quote author="Artyom Skatov" position="Project Manager, Gazprom Neft" withImage>
  There's one more thing you should consider if/when facing the problem. The demotivated employees are often distracted, and they start distracting and frustrating those around them affecting negatively the general working atmosphere inside the team. If they have a client-facing position, then the problem may have a killing impact on your relationship with both the existing and potential customers.
</Quote>.
```

---
#### [`<Subtitle />`](http://s.csssr.ru/U31J879TR/20200527125943.jpg)
Subtitle component, usually located at the very beginning of the article, between the header of the article and the first paragraph.

##### Example code
```jsx
<Subtitle>
  Cost-effectiveness, high-quality services and other reasons why so many Singapore entrepreneurs are looking into offshoring web development services
</Subtitle>
```

---
#### [`<Table />`](http://s.csssr.ru/U31J879TR/20200626122639.jpg)
Table component. Has three views: with purple, green and colorless headers. The `<Table />` is a wrapper on the html tag `<table />`, so it takes all the same attributes and descendants as the html tag. For the header lines with an attribute `colspan="4"` must specify an attribute `data-text` and duplicate the text in it from the string. This is necessary correct horizontal scrolling of table on mobile. The component accepts the following props

##### `color`
The data type: `green | purple`\
Default value: `undefined`

Header color. If you want colorless headers, you don't need to specify this props.

##### `withBorders`
Data type: `boolean`\
Default value: `false`

If `withBorders` has a value of `true` then additional borders will appear in the table.

##### Example code
```jsx
<Table color='purple' withBorders>
  <thead>
    <tr>
      <th />
      <th>The team in your office</th>
      <th>The team in your office</th>
      <th>Distributed team</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4">Purpose</th>
    </tr>
    <tr>
      <th>"First Aid" to the project</th>
      <td>++</td>
      <td>+</td>
      <td>-</td>
    </tr>
    <tr>
      <th>Development support or new functionality</th>
      <td>+</td>
      <td>+</td>
      <td>+</td>
    </tr>
    <tr>
      <th>Start development</th>.
      <td>+</td>
      <td>+</td>
      <td>+</td>
    </tr>
  </tbody>
</Table>
```
---

#### [`<Caption />`](http://s.csssr.ru/U31J879TR/2021-04-08-14-35-57-558l7_.jpg)
Caption component for images and videos.

##### `size`
Data type: `s` | `l`\
Default value: `undefined`

Caption text size.

##### Example code
```jsx
<Caption size='l'>Lorem Ipsum</Caption>
```

---
#### [`<Video />`](http://s.csssr.ru/U31J879TR/2021-04-08-18-03-49-2dkpy_.jpg)
Component for inserting video into a page. Video can be inserted using `src` prop or as `embed` code inside this component. Specify `width` and `height` for the component, with their help video will always get the correct proportions at different screen resolutions.

##### `src`.
Data type: `string`\
Default value: `undefined`

URL for the video.

##### Example code
```jsx
<Video width="560" height="315">
    <iframe 
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/7nrDctGYOIk" 
        frameborder="0" 
        allow="accelerometer clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
    />
</Video>

<Video width="560" height="315" src='/video/camp-video.mp4' />
```