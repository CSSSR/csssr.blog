import React from 'react';
import { Global } from '@emotion/react'
import { ThemeProvider } from '@emotion/react'
import { Root, defaultTheme } from '@csssr/core-design'

import { Grid } from '../components/Grid'

import styles from './styles/global'

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
          <Story />
          <Global styles={styles}/>
        </Grid>
      </ThemeProvider>
    </Root>
  ),
];
