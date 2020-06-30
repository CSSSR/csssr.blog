import React, { useState, createRef, useEffect } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import styled from '@emotion/styled'
import styles from './Categories.styles'
import { withRouter } from 'next/router'
import ActiveLine from './ActiveLine'

const Categories = ({ className, items, router }) => {
  const activeCategory = router.query.caregory || 'all'
  const [activeWidth, setActiveWidth] = useState(0)
  const [activeLeft, setActiveLeft] = useState(0)
  const activeItemRef = createRef(null)

  useEffect(() => {
    if (activeItemRef && activeItemRef.current) {
      const { offsetWidth, offsetLeft } = activeItemRef.current
      setActiveWidth(offsetWidth)
      setActiveLeft(offsetLeft)
    }
  }, [activeItemRef])

  return (
    <div className={className}>
      <div className="inner">
        <ul className="items">
          {items.map(({ id, title }) => (
            <li key={id} className="item">
              <Link href={`?caregory=${id}`}>
                <a
                  className={cn('link', { _active: id === activeCategory })}
                  dangerouslySetInnerHTML={{ __html: title }}
                  ref={id === activeCategory ? activeItemRef : null}
                />
              </Link>
            </li>
          ))}
        </ul>
        <ActiveLine width={activeWidth} left={activeLeft} />
      </div>
    </div>
  )
}

Categories.defaultProps = {
  items: [],
}

export default styled(withRouter(Categories))`
  ${styles}
`
