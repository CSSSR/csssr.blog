import React from 'react';
import { Global, ThemeProvider, css } from '@emotion/react';
import { Root, Fonts, defaultTheme } from '@csssr/core-design';
import { getTransformSource } from './utils/getTransformSource';

import { Grid } from '../components/Grid';

import stylesBody from '../components/Post/Body/Body.styles';
import stylesLayout from '../components/Layout/Layout.styles';

const customViewports = {
  mobile: {
    name: 'mobile.all 360px',
    styles: {
      width: '360px',
      height: '640px',
    },
  },
  tablet: {
    name: 'tablet.all 1024px',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  desktopM: {
    name: 'desktop.m 1360px',
    styles: {
      width: '1360px',
      height: '1000px',
    },
  },
  desktopL: {
    name: 'desktop.l 1920px',
    styles: {
      width: '1920px',
      height: '1000px',
    },
  },
};

export const parameters = {
  viewport: { viewports: customViewports },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    transformSource: (_src, storyContext) => {
      const { args, kind } = storyContext;
      return getTransformSource(kind, args);
    },
  },
};
export const decorators = [
  (Story) => (
    <Root>
      <ThemeProvider theme={defaultTheme}>
        <Grid>
          <Fonts preset="blog" />
          <Story />
          <Global styles={stylesLayout} />
          <Global styles={(theme) => stylesBody({ theme })} />
          {/* Для переопределения стилей блога, иначе код code source в одну строку */}
          <Global styles={css`code {
            white-space: pre;
          }`}/>
        </Grid>
      </ThemeProvider>
    </Root>
  ),
];
