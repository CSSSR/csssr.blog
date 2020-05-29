import { css } from '@emotion/core';
import calcRem from '../../../../utils/style/calcRem'
import getBackgroundImageSrcSet from '../../../../utils/style/getBackgroundImageSrcSet';


const base = ({ breakpoints: { desktop, tablet, mobile }, lineColor }) => css`
  & {
    position: relative;
    margin-top: ${calcRem(94)};
    height: ${calcRem(111)};
    width: 100vw;
    grid-column: 1 / span 12;
    position: relative;
    transform: translateX(calc((100vw - var(--width-container)) / -2));
    border: none;

    &.color-line {
      position: relative;
      display: block;
      height: ${calcRem(139)};

      &::before {
        z-index: 1;
        content: '';
        background-color: ${lineColor};
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: ${calcRem(111)};
      }

      &::after {
        z-index: 2;
        position: absolute;
        left: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center 100%;
      }
    }

    &.bg-repeat {
      height: ${calcRem(150)};

      &::after {
        position: absolute;
        left: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 100%;
        background-size: contain;
        background-repeat: repeat-x;
        background-color: #f4f7f6;
      }
    }
  }

  ${desktop.l} {
    --width-container: 1792px;
  }

  ${desktop.m} {
    --width-container: 1328px;
  }

  ${desktop.s}{
    --width-container: 1232px;
  }

  ${tablet.all} {
    --width-container: ${calcRem(944)};

    & {
      margin-top: ${calcRem(60)};
    }
  }

  ${mobile.all} {
    --width-container: 20.5rem;
    grid-column: 1 / span 6;
    margin-top: ${calcRem(60)};
  }
`

const getSrcObject = (imageName, extension) => {
  return {
    '1x': `/assets/blog/components/separator/${imageName}@1x.${extension}`,
    '2x': `/assets/blog/components/separator/${imageName}@2x.${extension}`,
    '3x': `/assets/blog/components/separator/${imageName}@3x.${extension}`
  }
}

export const backgroundImagesStyles = (imageName) => css`
  ${getBackgroundImageSrcSet({png: getSrcObject(imageName,'png'), webp: getSrcObject(imageName,'webp')}, `.${imageName}::after`)}
`

export default props =>{
  const { theme: { breakpoints } } = props
  const { lineColor } = props

  return css`
    ${base({breakpoints, lineColor})}
  `
}
