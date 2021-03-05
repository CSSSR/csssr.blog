import React, { Fragment } from 'react'
import { string, object } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import { Grid } from '../../Grid'
import { compiler } from 'markdown-to-jsx'
import { Heading, Text, Link, ListItem } from '@csssr/core-design'
import styles from './Body.styles'
import PostNewsletter from '../../PostNewsletter'
import Separator from './Separator'
import Comments from './Comments'
import ParagraphWithImage from './ParagraphWithImage'
import Img from './Img'
import Note from './Note'
import Quote from './Quote'
import ReadMore from './ReadMore'
import Subtitle from '../Subtitle'
import Video from './Video'
import Table from './Table'
import List from './List'

const Body = ({
  className,
  posts,
  content,
  slug,
  images,
  language,
  type,
  BENCHMARK_EMAIL_TOKEN,
  BENCHMARK_EMAIL_LIST_ID,
}) => (
  <Grid className={cn(`post-body ${className}`)}>
    <PostNewsletter
      language={language}
      type={type}
      kind="post"
      BENCHMARK_EMAIL_TOKEN={BENCHMARK_EMAIL_TOKEN}
      BENCHMARK_EMAIL_LIST_ID={BENCHMARK_EMAIL_LIST_ID}
    />
    {compiler(content, {
      wrapper: Fragment,
      forceWrapper: true,
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
            className: cn('heading_regular_s', {
              'is_scaled-down': type === 'news',
            }),
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
        hr: {
          props: {
            className: 'grid-element',
          },
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
            className: cn('text_regular_m paragraph', {
              'is_scaled-down': type === 'news',
            }),
            type: 'regular',
            size: 'm',
          },
        },
        a: {
          component: function LinkWrapper(props) {
            return props.href.startsWith('/') ? <Link {...props} /> : <Link {...props} external />
          },
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
            className: 'text_regular_m list_item',
            type: 'regular',
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
        Table: {
          component: Table,
        },
        ol: {
          component: List,
          props: {
            className: 'list_s is_ordered',
            type: 'regular',
            size: 'm',
          },
        },
      },
    })}

    {language === 'ru' && type !== 'news' && <ReadMore posts={posts} />}

    <Comments id={slug} language={language} type={type} />
  </Grid>
)

Body.propTypes = {
  className: string,
  content: string,
  images: object,
  slug: string,
}

export default styled(Body)`
  ${styles}
`
