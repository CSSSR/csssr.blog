import React from 'react'
import styled from '@emotion/styled'
import { Grid } from '@csssr/core-design'
import { compiler } from 'markdown-to-jsx'
import { Heading, Text, Link, List, ListItem } from '@csssr/core-design'
import styles from './Body.styles'

import Separator from './Separator'
import Comments from './Comments'
import ParagraphWithImage from './ParagraphWithImage'
import Img from './Img'
import Note from './Note'
import Quote from './Quote'
import Subtitle from './Subtitle'
import Video from './Video'

const Body = ({ content, className, images }) =>
  compiler(content, {
    createElement(type, props, children) {
      if (props.key === 'outer') {
        return (
          <Grid className={`post-body ${className}`}>
            {React.createElement(React.Fragment, { key: props.key }, children)}
            <Comments />
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
        component: Heading.H2,
        props: {
          className: 'heading_regular_m',
          type: 'regular',
          size: 'm',
        },
      },
      h3: {
        component: Heading.H3,
        props: {
          className: 'heading_regular_s',
          type: 'regular',
          size: 's',
        },
      },
      h4: {
        component: Heading.H4,
        props: {
          className: 'heading_regular_s',
          type: 'regular',
          size: 's',
        },
      },
      h5: {
        component: Heading.H5,
        props: {
          className: 'heading_regular_s',
          type: 'regular',
          size: 's',
        },
      },
      h6: {
        component: Heading.H6,
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
      Quote: {
        component: Quote,
        props: {
          className: 'quote-wrapper',
        },
      },
      code: {
        props: {
          className: 'line-numbers',
        },
      },
      Img: {
        component: ({ imageName, ...rest }) => <Img className='picture' pictureData={images[imageName]} {...rest} />
      },
      ParagraphWithImage: {
        component: ({ imageName, ...rest }) => <ParagraphWithImage pictureData={images[imageName]} {...rest} />
      },
      Separator: {
        component: Separator,
      },
      Note: {
        component: Note,
        props: {
          className: 'note',
        },
      },
      Subtitle: {
        component: Subtitle,
      },
      Video: {
        component: Video,
      },
    },
  })

export default styled(Body)`
  ${styles}
`
