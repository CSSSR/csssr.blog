import { Fragment } from 'react'

const robotoFonts = [
  {
    family: 'Roboto',
    weight: 300,
    style: 'normal',
    url: 'https://static.csssr.com/fonts-subsets/Roboto-Light-2c576038.woff2',
  },
  {
    family: 'Roboto',
    weight: 400,
    style: 'normal',
    url: 'https://static.csssr.com/fonts-subsets/Roboto-Regular-ca1979e0.woff2',
  },
  {
    family: 'Roboto',
    weight: 400,
    style: 'italic',
    url: 'https://static.csssr.com/fonts-subsets/Roboto-Italic-8c754e28.woff2',
  },
  {
    family: 'Roboto',
    weight: 500,
    style: 'normal',
    url: 'https://static.csssr.com/fonts-subsets/Roboto-Medium-a773d16d.woff2',
  },
  {
    family: 'Roboto',
    weight: 700,
    style: 'normal',
    url: 'https://static.csssr.com/fonts-subsets/Roboto-Bold-faf2c51c.woff2',
  },
  {
    family: 'Roboto',
    weight: 900,
    style: 'normal',
    url: 'https://static.csssr.com/fonts-subsets/Roboto-Black-5a011e36.woff2',
  },
  {
    family: 'Roboto Slab',
    weight: 300,
    style: 'normal',
    url: 'https://static.csssr.com/fonts-subsets/RobotoSlab-Light-3b8d53ef.woff2',
  },
  {
    family: 'Roboto Slab',
    weight: 400,
    style: 'normal',
    url: 'https://static.csssr.com/fonts-subsets/RobotoSlab-Regular-44e9e0dc.woff2',
  },
]

const fontFacesCss = robotoFonts
  .map(
    (font) =>
      `@font-face {
  font-family: ${font.family};
  font-style: ${font.style};
  font-weight: ${font.weight};
  src: url('${font.url}') format('woff2');
  font-display: swap;
}`,
  )
  .join('\n')

const preloadLinks = robotoFonts.map((font) => (
  <link
    key={font.url}
    rel="preload"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
    href={font.url}
  />
))

// TODO возможно стоит добавить такие правила для ширфтов
// local('Roboto'), local('Roboto-Regular'),
// Проверить, что шрифты загружаются один раз
const Fonts = () => (
  <Fragment>
    {preloadLinks}
    <style
      dangerouslySetInnerHTML={{
        __html: fontFacesCss,
      }}
    />
  </Fragment>
)

export default Fonts
