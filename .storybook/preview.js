import React from 'react';
import { Global } from '@emotion/react'
import { ThemeProvider } from '@emotion/react'
import { Root, defaultTheme } from '@csssr/core-design'

import { Grid } from '../components/Grid'

import stylesBody from '../components/Post/Body/Body.styles'
import stylesLayout from '../components/Layout/Layout.styles'


export const parameters = {
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
