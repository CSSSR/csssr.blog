import { css } from "@emotion/core";
import calcRem from '../../utils/style/calcRem'
import getBackgroundImageSrcSet from '../../utils/style/getBackgroundImageSrcSet';


const base = ({breakpoints: {desktop, tablet, mobile} }) => css`
  & {
    position: relative;
    margin-top: 80px;
    margin-bottom: 40px;
    height: 111px;
    width: 100vw;
    grid-column: 1 / span 12;
    position: relative;
    transform: translateX(calc((100vw - var(--width-container)) / -2));

    &.man-with-cafe {
      height: 153px;

      &::before {
        z-index: 1;
        content: '';
        background-color: #d3d3ff;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 111px;
      }

      &::after {
        z-index: 2;
        position: absolute;
        left: 26%;
        bottom: 0;
        content: '';
        width: 292px;
        height: 100%;
        background-repeat: no-repeat;
        background-size: 100%;
        background-position-y: 100%;
      }
    }

    &.people-with-basket {
      height: 139px;

      &::before {
        z-index: 1;
        content: '';
        background-color: #d3d3ff;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 111px;
      }

      &::after {
        z-index: 2;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        content: '';
        width: ${calcRem(721)};
        height: 100%;
        background-repeat: no-repeat;
        background-size: 100%;
        background-position-y: 100%;
      }
    }

    &.people-with-dog {
      height: 150px;
      background-size: 618px;
      background-repeat: repeat-x;
    }

    &.people-with-gramophone {
      height: 150px;
      background-size: 1360px;
      background-repeat: repeat-x;
    }
  }

  ${desktop.l} {
    --width-container: 50vw;
  }

  ${desktop.m} {
    --width-container: 1328px;
  }

  ${desktop.s}{
    --width-container: 1232px;
  }

  ${tablet.all} {
    --width-container: ${calcRem(944)};
  }

  ${mobile.all} {
    --width-container: 20.5rem;
    grid-column: 1 / span 6;
    margin-top: ${calcRem(60)};
    margin-bottom: ${calcRem(30)};

    &.man-with-cafe {
      &::after {
        left: 1rem;
      }
    }

    &.people-with-dog {
      height: 100px;
      background-size: 405px;
    }

    &.people-with-gramophone {
      height: 100px;
    }

    &.people-with-basket {
      &::after {
        width: 100%;
      }
    }
  }
`

const peopleWithDogBg = {
  '1x': '/assets/blog/separator/peopleWithDogBg@1x.png',
  '2x': '/assets/blog/separator/peopleWithDogBg@2x.png',
  '3x': '/assets/blog/separator/peopleWithDogBg@3x.png'
}

const peopleWithDogBgWebp = {
  '1x': '/assets/blog/separator/peopleWithDogBg@1x.webp',
  '2x': '/assets/blog/separator/peopleWithDogBg@2x.webp',
  '3x': '/assets/blog/separator/peopleWithDogBg@3x.webp'
}

const peopleWithGramophoneBg = {
  '1x': '/assets/blog/separator/peopleWithGramophone@1x.png',
  '2x': '/assets/blog/separator/peopleWithGramophone@2x.png',
  '3x': '/assets/blog/separator/peopleWithGramophone@3x.png'
}

const peopleWithGramophoneBgWebp = {
  '1x': '/assets/blog/separator/peopleWithGramophone@1x.webp',
  '2x': '/assets/blog/separator/peopleWithGramophone@2x.webp',
  '3x': '/assets/blog/separator/peopleWithGramophone@3x.webp'
}

const manWithCafeBg = {
  '1x': '/assets/blog/separator/manWithCafeBg@1x.png',
  '2x': '/assets/blog/separator/manWithCafeBg@2x.png',
  '3x': '/assets/blog/separator/manWithCafeBg@3x.png'
}

const manWithCafeBgWebp = {
  '1x': '/assets/blog/separator/manWithCafeBg@1x.webp',
  '2x': '/assets/blog/separator/manWithCafeBg@2x.webp',
  '3x': '/assets/blog/separator/manWithCafeBg@3x.webp'
}

const peopleWithBasket = {
  '1x': '/assets/blog/separator/peopleWithBasket@1x.png',
  '2x': '/assets/blog/separator/peopleWithBasket@2x.png',
  '3x': '/assets/blog/separator/peopleWithBasket@3x.png'
}

const peopleWithBasketWebp = {
  '1x': '/assets/blog/separator/peopleWithBasket@1x.webp',
  '2x': '/assets/blog/separator/peopleWithBasket@2x.webp',
  '3x': '/assets/blog/separator/peopleWithBasket@3x.webp'
}

export const backgroundImagesStyles = () => css`
  ${getBackgroundImageSrcSet({png: peopleWithDogBg, webp: peopleWithDogBgWebp}, `.people-with-dog`)}
  ${getBackgroundImageSrcSet({png: peopleWithGramophoneBg, webp: peopleWithGramophoneBgWebp}, `.people-with-gramophone`)}
  ${getBackgroundImageSrcSet({png: manWithCafeBg, webp: manWithCafeBgWebp}, `.man-with-cafe::after`)}
  ${getBackgroundImageSrcSet({png: peopleWithBasket, webp: peopleWithBasketWebp}, `.people-with-basket::after`)}
`

export default props =>{
  const { theme: { breakpoints } } = props

  return css`
    ${base({breakpoints})}
  `
}
