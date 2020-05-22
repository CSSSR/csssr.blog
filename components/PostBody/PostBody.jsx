import React from 'react'
import styled from '@emotion/styled'
import { Grid } from '@csssr/core-design'
import { compiler } from 'markdown-to-jsx'
import { Heading, Text, Link, List, ListItem } from '@csssr/core-design'
import styles from './PostBody.styles'

import PostTitle from '../PostTitle'
import Separator from '../Separator'
import ParagraphWithImage from '../ParagraphWithImage'

const PostBody = ({ content, className }) =>
  compiler(content, {
    createElement(type, props, children) {
      if (props.key === 'outer') {
        return (
          <Grid className={className}>
            {React.createElement(React.Fragment, { key: props.key }, children)}
          </Grid>
        )
      }

      return React.createElement(type, props, children)
    },
    overrides: {
      h1: {
        component: Heading,
        props: {
          className: 'heading_regular_l',
          type: 'regular',
          size: 'l',
        },
      },
      h2: {
        component: Heading,
        props: {
          className: 'heading_regular_m',
          type: 'regular',
          size: 'm',
        },
      },
      h3: {
        component: Heading,
        props: {
          className: 'heading_regular_s',
          type: 'regular',
          size: 's',
        },
      },
      h4: {
        component: Heading,
        props: {
          className: 'heading_regular_s',
          type: 'regular',
          size: 's',
        },
      },
      h5: {
        component: Heading,
        props: {
          className: 'heading_regular_s',
          type: 'regular',
          size: 's',
        },
      },
      h6: {
        component: Heading,
        props: {
          className: 'heading_regular_s',
          type: 'regular',
          size: 's',
        },
      },
      p: {
        component: Text,
        props: {
          className: 'text_regular_m',
          type: 'regular',
          size: 'm',
        },
      },
      a: {
        component: Link,
        props: {
          className: 'link_list_s',
          type: 'list',
          size: 's',
        },
      },
      ul: {
        component: List,
        props: {
          className: 'list_s',
          size: 'm',
        },
      },
      li: {
        component: ListItem,
        props: {
          className: 'list_item_s',
          size: 'm',
        },
      },
      PostTitle: {
        component: PostTitle, // Это для привера возможностей markdown-to-jsx
      },
      code: {
        props: {
          className: 'line-numbers',
        },
      },
      ParagraphWithImage: {
        component: ParagraphWithImage,
      },
      Separator: {
        component: Separator,
      },
    },
  })

export default styled(PostBody)`
  ${styles}
`
