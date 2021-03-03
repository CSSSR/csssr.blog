import React from 'react'

export default (ref, callback, optional) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback()
    }
    if (optional && (ref.current && ref.current.contains(e.target))) {
      optional()
    }
  }
  React.useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}
