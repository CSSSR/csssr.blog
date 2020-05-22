import { css } from "@emotion/core";

export default css`
  margin: 0 auto;

  div:only-child > .text_regular_m:first-of-type::first-letter {
    font-family: 'Amita';
    font-style: normal;
    font-weight: normal;
    font-size: 76px;
    line-height: 32px;
  }
`;
