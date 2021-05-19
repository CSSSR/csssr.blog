import { Fragment } from 'react'
import { compiler } from 'markdown-to-jsx'
import { Link } from '@csssr/core-design'
import Separator from '../Separator'
import ParagraphWithImage from '../ParagraphWithImage'
import Img from '../Img'
import Note from '../Note'
import Quote from '../Quote'
import Subtitle from '../../Subtitle'
import Video from '../Video'
import Caption from '../Caption'
import Table from '../Table'
import List from '../List'
import ListItem from '../ListItem'
import Heading from '../Heading'
import Text from '../Text'
import Blockquote from '../Blockquote'
import VerticalGap from '../VerticalGap'

export const compilerMdx = ({ content, images }) =>
  compiler(content, {
    wrapper: Fragment,
    forceWrapper: true,
    overrides: {
      h1: {
        component: Heading,
        props: {
          type: 'regular',
          size: 'l',
        },
      },
      h2: {
        component: Heading.H2,
        props: {
          type: 'regular',
          size: 'm',
        },
      },
      h3: {
        component: Heading.H3,
        props: {
          type: 'regular',
          size: 's',
        },
      },
      h4: {
        component: Heading.H4,
        props: {
          type: 'regular',
          size: 's',
        },
      },
      h5: {
        component: Heading.H5,
        props: {
          type: 'regular',
          size: 's',
        },
      },
      h6: {
        component: Heading.H6,
        props: {
          type: 'regular',
          size: 's',
        },
      },
      hr: {
        component: VerticalGap,
      },
      p: {
        // https://github.com/probablyup/markdown-to-jsx/issues/209
        component: function ParagraphWrapper(props) {
          return props.children.some((child) => child && child.type && child.type === Img) ? (
            <>{props.children}</>
          ) : (
            <Text {...props} />
          )
        },
        props: {
          type: 'regular',
          size: 'm',
        },
      },
      a: {
        component: function LinkWrapper(props) {
          return props.href.startsWith('/') ? <Link {...props} /> : <Link {...props} external />
        },
        props: {
          'data-testid': 'Post:link',
        },
      },
      blockquote: {
        component: Blockquote,
      },
      ul: {
        component: List,
      },
      ol: {
        component: List,
        props: {
          isOrdered: true,
        },
      },
      li: {
        component: ListItem,
      },
      Quote: {
        component: Quote,
        props: {
          className: 'quote-wrapper',
          testId: 'Post:link',
        },
      },
      code: {
        props: {
          className: 'line-numbers',
        },
      },
      Img: {
        component: function ImgWrapper({ imageName, ...rest }) {
          return <Img className="picture" sources={images[imageName]} {...rest} />
        },
      },
      img: {
        component: Img,
        props: {
          className: 'picture',
          withOutProcessing: true,
        },
      },
      ParagraphWithImage: {
        component: function ParagraphWithImageWrapper({ imageName, ...rest }) {
          return <ParagraphWithImage sources={images[imageName]} {...rest} />
        },
      },
      Separator: {
        component: function SeparatorWrapper({ imageName, ...rest }) {
          return <Separator imageName={imageName} sources={images[imageName]} {...rest} />
        },
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
      Caption: {
        component: Caption,
      },
      Table: {
        component: Table,
      },
    },
  })
