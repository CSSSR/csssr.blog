import { Link } from '@csssr/core-design'
import styled from '@emotion/styled'
import cn from 'classnames'
import { node, oneOf, string } from 'prop-types'
import React from 'react'

import styles from './Quote.styles'

const Quote = ({
  className,
  children,
  author,
  position,
  linkHref,
  linkText,
  type = 'blue',
  testId = 'Quote:link',
}) => {
  return (
    <div
      className={cn(className, {
        type_blue: type === 'blue',
        type_black: type === 'black',
      })}
    >
      <blockquote className="quote">
        <svg
          className="quotes"
          width="48"
          height="32"
          viewBox="0 0 48 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.7484 21.5385C20.7484 19.1795 20.0258 17.0769 18.5806 15.2308C17.1355 13.3846 15.2258 12.1538 12.8516 11.5385C13.0581 10.1026 13.6258 8.5641 14.5548 6.92307C15.5871 5.28205 16.7226 3.94871 17.9613 2.92307L14.5548 0C10.2194 2.76923 6.70968 6 4.02581 9.6923C1.34194 13.282 0 17.2308 0 21.5385C0 24.4103 0.980645 26.8718 2.94194 28.9231C4.90323 30.9744 7.32903 32 10.2194 32C13.1097 32 15.5871 30.9744 17.6516 28.9231C19.7161 26.8718 20.7484 24.4103 20.7484 21.5385ZM48 21.5385C48 19.1795 47.2774 17.0769 45.8323 15.2308C44.3871 13.3846 42.4774 12.1538 40.1032 11.5385C40.4129 10 41.0323 8.46154 41.9613 6.92307C42.9935 5.28205 44.0774 3.94871 45.2129 2.92307L41.8064 0C37.471 2.76923 33.9613 5.94872 31.2774 9.53846C28.5935 13.1282 27.2516 17.1282 27.2516 21.5385C27.2516 24.4103 28.2323 26.8718 30.1935 28.9231C32.2581 30.9744 34.7355 32 37.6258 32C40.5161 32 42.9419 30.9744 44.9032 28.9231C46.9677 26.8718 48 24.4103 48 21.5385Z"
            fill="currentColor"
          />
        </svg>

        <div className="quote-text">{children}</div>

        <span className="author">{author}</span>

        {position && <span className="author-post">{position}</span>}

        {linkText && (
          <Link
            className="quote-link"
            href={linkHref}
            type="list"
            size="s"
            external
            data-testid={testId}
          >
            {linkText}
          </Link>
        )}
      </blockquote>
    </div>
  )
}

Quote.propTypes = {
  className: string,
  children: node,
  author: string,
  position: string,
  linkHref: string,
  linkText: string,
  type: oneOf(['blue', 'black']),
}

export default styled(Quote)`
  ${styles}
`
