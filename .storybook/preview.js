import React from 'react';
import { Global } from '@emotion/react'
import { ThemeProvider } from '@emotion/react'
import { Root, defaultTheme } from '@csssr/core-design'

import { Grid } from '../components/Grid'

import stylesBody from '../components/Post/Body/Body.styles'
import stylesLayout from '../components/Layout/Layout.styles'

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
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const decorators = [
  (Story) => (
    <Root>
      <ThemeProvider theme={defaultTheme}>
        <Grid>
          <Story/>
          <Global styles={stylesLayout}/>
          <Global styles={(theme)=>stylesBody({theme})}/>
        </Grid>
      </ThemeProvider>
    </Root>
  ),
];
