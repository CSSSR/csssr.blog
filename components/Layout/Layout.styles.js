import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, above, mobile }}) => css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html:not(.disable-smooth-scroll) {
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    .footer .link:hover::after,
    .footer .link:focus::after {
        display: none;
    }
  }

  body {
    margin: 0;
    margin-left: auto;
    margin-right: auto;
  }

  body:not(.outline) * {
    outline: none;
  }

  body:not(.outline) button::-moz-focus-inner {
    border: 0;
  }

  .main {
    overflow: hidden;
  }

  ul {
    list-style: none;
  }

  picture {
    font-size: 0;
  }

  #__next {
    position: relative;
  }

  .grid-container {
    display: grid;
    align-content: start;
    grid-template-columns: repeat(12, 120px);
    grid-gap: 0 32px;
  }

  .visual-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    clip: rect(0 0 0 0);
  }

  .visible {
    .nav.nav_industries {
      .nav-item {
        width: auto;
      }
    }

    .nav-item_active .icon_ourProjects path:nth-of-type(2) {
      fill: #5695ED;
    }
  }

  ${desktop.all} {
    .main {
      padding-top: 4rem;
    }
  }

  ${tablet.all} {
    body {
      min-width: ${calcRem(944)};
    }

    .grid-container {
      grid-template-columns: repeat(12, 64px);
      grid-gap: 0 16px;
    }

    .footer {
      margin-top: ${calcRem(140)};
    }

    .post-body .text_regular_m {
      font-size: ${calcRem(16)};
    }

    .main {
      padding-top: 4rem;
    }
  }

  ${tablet.s} {
    html {
      font-size: 1.5625vw;
    }

    body {
      min-width: 59rem;
    }

    .grid-container {
      grid-template-columns: repeat(12, 4rem);
      grid-gap: 0 1rem;
    }
  }

  ${above.mobile} {
    .visible {
      .nav.nav_industries {
        ul {
          width: 100%;
          max-width: 1360px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.5fr 0.5fr 1fr;
          grid-row-gap: ${calcRem(32)};
          align-content: center;
        }

        .nav-item {
          padding: 0;
        }

        .nav-item_mediaAndMarketing {
          grid-column: 1;
          grid-row: 1;
        }

        .nav-item_eCommerce {
          grid-column: 2;
          grid-row: 1;
        }

        .nav-item_information {
          grid-column: 1;
          grid-row: 2;
        }

        .nav-item_fintech {
          grid-column: 2;
          grid-row: 2;
        }

        .nav-item_ourProjects {
          grid-column: 3;
          grid-row: 1 / span 2;

          .link {
            padding-left: ${calcRem(111)};
            transform: translateY(${calcRem(7)});
          }

          .icon {
            top: ${calcRem(19)};
            left: ${calcRem(64)};
            width: ${calcRem(24)};
            height: ${calcRem(24)};
          }

          .title {
            font-weight: 900;
            font-size: ${calcRem(24)};
            line-height: ${calcRem(32)};
          }

          .description {
            font-size: ${calcRem(14)};
            line-height: ${calcRem(24)};
          }
        }

        .link {
          padding-left: ${calcRem(68)};
        }

        .icon {
          top: ${calcRem(3)};
          left: ${calcRem(34)};
          width: ${calcRem(18)};
          height: ${calcRem(18)};
        }

        .title {
          font-weight: 900;
          font-size: ${calcRem(16)};
          line-height: ${calcRem(24)};
        }
      }
    }
  }

  ${desktop.l} {
    .footer {
      margin-top: 149px;
    }

    .visible {
      .nav.nav_industries {
        ul {
          grid-template-columns: min-content min-content 1fr;
          grid-column-gap: 32px;
          padding-left: 5.5%;
        }

        .nav-item_ourProjects {
          margin-left: 21.5%;
        }

        .link {
          white-space: nowrap;
        }
      }
    }
  }

  ${desktop.m} {
    body {
      min-width: 1328px;
    }

    .grid-container {
      grid-template-columns: repeat(12, 96px);
      grid-gap: 0 16px;
    }

    .footer {
      margin-top: 267px;
    }

    .visible {
      .nav.nav_industries {
        ul {
          grid-template-columns: min-content min-content 1fr;
          grid-column-gap: 12px;
          padding-left: 5.5%;
        }

        .nav-item_ourProjects {
          margin-left: 25%;
        }

        .link {
          white-space: nowrap;
        }
      }
    }
  }

  ${desktop.s} {
    body {
      min-width: 1232px;
    }

    .grid-container {
      grid-template-columns: repeat(12, 88px);
      grid-gap: 0 16px;
    }

    .footer {
      margin-top: 267px;
    }

    .visible {
      .nav.nav_industries {
        ul {
          grid-template-columns: min-content min-content 1fr;
          grid-column-gap: 12px;
          padding-left: 53px;
        }

        .nav-item_ourProjects {
          margin-left: 22%;
        }

        .link {
          white-space: nowrap;
        }
      }
    }
  }

  ${mobile.all} {
    html {
      font-size: 4.44444444444444444444444444444444vw;
      scroll-behavior: auto;
    }

    body {
      min-width: 20.5rem;
    }

    .grid-container {
      grid-template-columns: repeat(6, 3rem);
      grid-gap: 0 0.5rem;
    }

    .main {
      padding-top: 3.5rem;
    }

    .footer {
      margin-top: ${calcRem(70)};
    }

    .visible {
      .nav.nav_industries {
        padding-bottom: ${calcRem(32)};

        ul {
          flex-direction: column-reverse;
        }

        .nav-item:not(:last-of-type) {
          margin-bottom: ${calcRem(25)};
        }

        .nav-item_ourProjects {
          order: -1;
        }

        .link {
          flex-wrap: wrap;
        }

        .icon {
          width: ${calcRem(24)};
          height: ${calcRem(24)};
        }

        .title {
          width: calc(100% - ${calcRem(52)});
        }

        .description {
          width: 100%;
          margin-top: ${calcRem(8)};
          padding-left: ${calcRem(47)};
          padding-right: ${calcRem(8)};
          font-size: ${calcRem(14)};
          line-height: ${calcRem(24)};
          font-weight: normal;
        }
      }
    }
  }

  @media (max-width: 319px) {
    html {
      font-size: 14px;
    }
  }
`

export const ie11Styles = css`
  html,
  body,
  #main {
    overflow-x: hidden;
  }

  .grid-container {
    display: -ms-grid;
    -ms-grid-template-columns: 120px (32px, 120px)[11];
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    .grid-container {
      -ms-grid-columns: 96px (16px 96px)[11];
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    .grid-container {
      -ms-grid-columns: 88px (16px 88px)[11];
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    .grid-container {
      -ms-grid-columns: 64px (16px 64px)[11];
    }
  }

  @media (min-width: 768px) and  (max-width: 1023px) {
    .grid-container {
      -ms-grid-columns: 4rem (1rem 4rem)[11];
    }
  }

  @media (max-width: 767px) {
    .grid-container {
      -ms-grid-columns: 3rem (0.5rem 3rem)[5];
    }
  }
`

export const fonts =  css`
  /**
    УСТАРЕВШАЯ ИНФОРМАЦИЯ, СОХРАНИЛ ПОКА ЧТО ДЛЯ ОБРАТНОЙ СОВМЕСТИМОСТИ
    МОЖНО УДАЛИТЬ КАК ТОЛЬКО ВСЕ ТЕКСТОВЫЕ БЛОКИ ПЕРЕЙДУТ НА КОМПОНЕНТ <Text />

    Как добавлять новые стили

    Нам нужно соблюдать вертикальный ритм, для этого
    бейзлан текста должен соприкасаться с нижней границей сетки — http://s.csssr.ru/U31J879TR/20181018201845.png
    Что бы этого достич, нужно:

    1. Открыть пен — https://codepen.io/Reshnaut/pen/vzrRMX
    2. Добавить новый стиль и убедится что он соприкасается с нижней границей сетки
    3. Скопировать новые стили в проект.
    4. В проекте 1rem === 16px, но так как в начале проекта он равнялся 8px,
    то если вы пишете в пене стили в rem, то не забудьте потом относительные величины
    поделить на два.
  */

  h1 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  .font_h1-slab {
    font-family: 'Roboto Slab', 'Georgia', serif;
    font-size: 4rem;
    font-weight: 300;
    line-height: 5rem;
    color: #000000;
  }

  .font_h1-regular {
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 2.5rem;
    font-weight: 900;
    line-height: 3.5rem;
    color: #4a4a4a;
  }

  .font_h2-slab {
    margin-top: -0.0625rem;
    padding-bottom: 0.0625rem;
    font-family: 'Roboto Slab', 'Georgia', serif;
    font-size: 3rem;
    line-height: 4rem;
    font-weight: normal;
    color: #000000;
  }

  .font_h2-regular {
    margin-top: -0.4375rem;
    padding-bottom: 0.4375rem;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 1.5rem;
    font-weight: 900;
    line-height: 2rem;
    color: #4a4a4a;
  }

  .font_h3-slab {
    margin-top: -0.3125rem;
    padding-bottom: 0.3125rem;
    font-family: 'Roboto Slab', 'Georgia', serif;
    font-size: 1rem;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 2rem;
    letter-spacing: normal;
    color: #4a4a4a;
  }

  .font_h3-regular {
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 1rem;
    font-weight: 900;
    line-height: 1.5rem;
    color: #4a4a4a;
  }

  .font_subhead-slab {
    margin-top: -0.1875rem;
    padding-bottom: 0.1875rem;
    font-family: 'Roboto Slab', 'Georgia', serif;
    font-size: 2rem;
    font-weight: 300;
    line-height: 3rem;
    color: #4a4a4a;
  }

  .font_subhead-regular {
    margin-top: -0.125rem;
    padding-bottom: 0.125rem;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 2rem;
    font-weight: 100;
    line-height: 3rem;
    color: #4a4a4a;
  }

  .font_button-label,
  .font_button-label_custom_color {
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 1rem;
    font-weight: 900;
    line-height: 1.5rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }

  .font_button-label_custom_color {
    color: inherit;
  }

  .font_link-list_16,
  .font_link-list_24,
  .font_link-list_28 {
    display: inline-block;
  }

  .font_link-list_16,
  .font_link-list_16_desktop_14_mobile {
    position: relative;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5rem;
    text-decoration: underline;
    color: #0076ff;
  }

  .font_link-list_16[target='_blank']::after,
  .font_link-list_16_desktop_14_mobile[target='_blank']::after {
    position: absolute;
    bottom: 1rem;
    right: -0.3125rem;
    display: none;
    width: 0.25rem;
    height: 0.25rem;
    border: 0.125rem solid #0076ff;
    box-sizing: border-box;
    content: '';
  }

  .font_link-list_24 {
    position: relative;
    margin-top: -0.4375rem;
    padding-bottom: 0.4375rem;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 2rem;
    text-decoration: underline;
    color: #0076ff;
  }

  .font_link-list_24[target='_blank']::after {
    position: absolute;
    bottom: 1.5625rem;
    right: -0.625rem;
    display: none;
    width: 0.375rem;
    height: 0.375rem;
    border: 0.0625rem solid #0076ff;
    box-sizing: border-box;
    content: '';
  }

  .font_link-list_28 {
    position: relative;
    margin-top: -0.25rem;
    padding-bottom: 0.25rem;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 1.75rem;
    font-weight: 300;
    line-height: 2.5rem;
    text-decoration: underline;
    color: #0076ff;
  }

  .font_link-list_28[target='_blank']::after {
    position: absolute;
    bottom: 1.9375rem;
    right: -0.625rem;
    display: none;
    width: 0.5rem;
    height: 0.5rem;
    border: 0.125rem solid #0076ff;
    box-sizing: border-box;
    content: '';
  }

  .font_link-list_16:hover::after,
  .font_link-list_16_desktop_14_mobile:hover::after,
  .font_link-list_24:hover::after,
  .font_link-list_28:hover::after {
    display: block;
  }

  .font_footer-link,
  .font_footer-text {
    margin-top: -0.375rem;
    padding-bottom: 0.375rem;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 0.625rem;
    font-weight: 500;
    line-height: 1.5rem;
    color: #0076ff;
  }

  .font_footer-text {
    font-weight: 300;
    color: #000000;
  }

  .font_input-basic-label,
  .font_input-error-label {
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 0.875rem;
    line-height: 1rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
  }

  .font_input-small-label,
  .font_input-small-focus-label,
  .font_input-small-error-label {
    margin-top: -0.125rem;
    padding-bottom: 0.125rem;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 0.625rem;
    line-height: 1rem;
    letter-spacing: 0.08125rem;
    text-transform: uppercase;
  }

  .font_input-basic-label,
  .font_input-small-label {
    color: #9b9b9b;
  }

  .font_input-small-label {
    color: #9b9b9b;
  }

  .font_input-small-focus-label {
    color: #0076ff;
  }

  .font_input-error-label,
  .font_input-small-error-label {
    color: #d0021b;
  }

  .font_input-placeholder {
    margin-top: -0.4375rem;
    padding-bottom: 0.4375rem;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 1.5rem;
    font-weight: 100;
    line-height: 2rem;
    color: #c0c0c0;
  }

  .font_inputted-text-regular,
  .font_inputted-text-error {
    margin-top: -0.4375rem;
    padding-bottom: 0.4375rem;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 2rem;
  }

  .font_inputted-text-regular {
    color: #000000;
  }

  .font_inputted-text-error {
    color: #d0021b;
  }

  .font_burger-menu {
    margin-top: -0.4375rem;
    padding-bottom: 0.4375rem;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 1rem;
    font-weight: 900;
    line-height: 3rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: #4a4a4a;
  }

  .font_top-menu {
    margin-top: -0.1875rem;
    padding-bottom: 0.1875rem;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 2rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: #0076ff;
    transition: color 0.3s ease-out;
  }

  .font_top-menu:hover {
    color: #0254d8;
  }

  .font_p14-regular {
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 0.875rem;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5rem;
    letter-spacing: normal;
    color: #4a4a4a;
  }

  .font_p16-regular {
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5rem;
    color: #4a4a4a;
  }

  .font_p24-strong {
    margin-top: -0.1875rem;
    padding-bottom: 0.1875rem;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: #4a4a4a;
  }

  .font_perforator-16-black {
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 1rem;
    font-weight: 900;
    line-height: 1.5rem;
    letter-spacing: 0.0625rem;
    text-transform: uppercase;
    color: #9b9b9b;
  }

  .font_perforator-10-regular {
    margin-top: -0.125rem;
    padding-bottom: 0.125rem;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 0.625rem;
    line-height: 1rem;
    letter-spacing: 0.08125rem;
    text-transform: uppercase;
    color: #4a4a4a;
  }

  .font_feature_1 {
    margin-top: -0.1875rem;
    padding-bottom: 0.1875rem;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 4.0625rem;
    line-height: 4.875rem;
    font-weight: 900;
    color: #000000;
  }

  .font_feature_2 {
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 2.8125rem;
    font-style: italic;
    line-height: 3.75rem;
    color: #000000;
  }

  .font_feature_3 {
    margin-top: -0.375rem;
    padding-bottom: 0.375rem;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 3.75rem;
    font-weight: 100;
    line-height: 4.375rem;
    color: #000000;
  }

  .font_roboto-slab-light {
    margin-top: -4px;
    padding-bottom: 4px;
    font-family: 'Roboto Slab', 'Georgia', serif;
    font-size: 1rem;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 3.125rem;
    letter-spacing: 0.03125rem;
    color: #000000;
  }

  @media (max-width: 1279px) {
    .font_h1-slab {
      margin-top: -0.1875rem;
      padding-bottom: 0.1875rem;
      font-size: 2rem;
      line-height: 3rem;
    }

    .font_h1-regular {
      margin-top: -0.375rem;
      padding-bottom: 0.375rem;
      font-size: 2rem;
      line-height: 2.5rem;
    }

    .font_h2-slab {
      margin-top: 0;
      padding-bottom: 0;
      font-size: 1.5rem;
      font-weight: normal;
      line-height: 2rem;
      color: #000000;
    }

    .font_h2-regular {
      margin-top: -0.09375rem;
      padding-bottom: 0.09375rem;
      font-size: 1.125rem;
      line-height: 1.5rem;
    }

    .font_h3-regular {
      font-size: 0.875rem;
      line-height: 1.5rem;
    }

    .font_subhead-slab {
      margin-top: -0.375rem;
      padding-bottom: 0.375rem;
      font-size: 1.125rem;
      line-height: 2rem;
    }

    .font_subhead-regular {
      margin-top: -0.375rem;
      padding-bottom: 0.375rem;
      font-size: 1.25rem;
      line-height: 2rem;
    }

    .font_link-list_16,
    .font_p16-regular {
      margin-top: -0.1875rem;
      padding-bottom: 0.1875rem;
      font-size: 0.75rem;
      line-height: 1rem;
    }

    .font_perforator-16-black {
      font-size: 0.875rem;
      line-height: 1.5rem;
    }

    // Это временное решение, заменить потом стили для p24_strong на то что скажет Влад
    .font_p24-strong {
      font-family: 'Roboto', 'Arial', sans-serif;
      font-size: 1rem;
      line-height: 1.5rem;
      color: #4a4a4a;
    }

    .font_feature_1 {
      font-size: 3.0625rem;
      line-height: 3.875rem;
    }

    .font_feature_2 {
      font-size: 1.8125rem;
      line-height: 2.75rem;
    }

    .font_feature_3 {
      font-size: 2.75rem;
      line-height: 3.375rem;
      color: #000000;
    }
  }

  @media (max-width: 767px) {
    .font_feature_1 {
      font-size: 4.0625rem;
      line-height: 4.875rem;
    }

    .font_feature_2 {
      font-size: 1.75rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: 2.5rem;
    }

    .font_feature_3 {
      font-size: 2rem;
      line-height: 2.5rem;
    }

    .font_link-list_16_desktop_14_mobile {
      padding: 0;
      margin: 0;
      font-size: 0.875rem;
      line-height: 1.5rem;
    }

    /*
      Если что-то отображать при ховере, то iOS сначала покажет что показывает ховер
      и только потом даст возможность произвести какой-то евент на действие.

      У нас внешние ссылки показывают квадратик при ховере, поэтому требуется даблтапнуть
      их что бы получить переход, как временное решение (не самое лучшее), я убираю этот ховер
      с мобильных разрешений, но лучше сами ссылки переработать и убрать эту квадратную фиглипигли

      В интернетах так же писали что любытие другие способы вскрытия/прятания элемента aka opacity,
      scale могу помочь, но не помогли, остается только JSить, а я вводить новые JS хаки

      Ознакомится с сутью проблемы можно тут:
        https://css-tricks.com/annoying-mobile-double-tap-link-issue/
        https://davidwalsh.name/ios-hover-menu-fix
    */
    .font_link-list_16:hover::after,
    .font_link-list_16_desktop_14_mobile:hover::after,
    .font_link-list_24:hover::after,
    .font_link-list_28:hover::after {
      display: none;
    }
  }
`
export default theme => {
  const { breakpoints } = theme

  return css`
    ${base({breakpoints})}
    ${fonts}
  `
}
