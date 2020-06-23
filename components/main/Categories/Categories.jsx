import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import styled from '@emotion/styled'
import styles from './Categories.styles'
import { withRouter } from 'next/router'

const Categories = ({ className, items, router }) => {
  const activeCategory = router.query.caregory || 'all'
  return (
    <div className={className}>
      <ul className="inner">
        {items.map(({ id, title }) => (
          <li key={id} className="item">
            <Link href={`?caregory=${id}`}>
              <a
                className={cn('link', { _active: id === activeCategory })}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

Categories.defaultProps = {
  items: [],
}

export default styled(withRouter(Categories))`
  ${styles}
`
