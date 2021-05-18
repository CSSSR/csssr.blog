import styled from '@emotion/styled'
import cn from 'classnames'
import { string } from 'prop-types'
import React, { useState } from 'react'

import styles from './TextField.styles'

const TextField = ({ className, id, name, label, testId, autocomplete, type = 'text' }) => {
  const [inputValue, setInputValue] = useState('')

  const changeHandler = (e) => {
    setInputValue(e.target.value)
  }

  function focusPlaceHolder(e) {
    e.target.className = 'formbox-field_LY6HH'
  }

  function blurPlaceHolder(e) {
    if (e.target.value === '') {
      e.target.className = 'formbox-field_LY6HH text-placeholder'
    } else if (e.target.value !== '') {
      e.target.className = 'formbox-field_LY6HH filled-without-focus'
    }
  }

  return (
    <div className={className}>
      <input
        className="formbox-field_LY6HH text-placeholder"
        type={type}
        value={inputValue}
        onFocus={focusPlaceHolder}
        onBlur={blurPlaceHolder}
        onChange={changeHandler}
        id={id}
        name={name}
        maxLength="100"
        data-testid={testId}
        autoComplete={autocomplete}
      />
      <label
        className={cn('label', { _active: inputValue })}
        htmlFor={id}
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </div>
  )
}

TextField.propTypes = {
  className: string,
  id: string,
  name: string,
  label: string,
  testId: string,
  autocomplete: string,
  type: string,
}

export default styled(TextField)`
  ${styles}
`
