import { Text } from '@csssr/core-design'
import styled from '@emotion/styled'
import cn from 'classnames'
import { func, oneOf, string } from 'prop-types'
import React from 'react'

import styles from './FormStateMessage.styles'

const FormStateMessage = ({ className, kind, status, testId, onTryAgain }) => {
  const getMessage = () => {
    if (status === 'success') {
      return 'Ура! Вы подписались на рассылку.'
    }

    if (status === 'fail') {
      return 'Упс, что-то пошло не так.'
    }

    return null
  }

  const textData = getMessage()
  const messageShown = status === 'success' || status === 'fail'

  return (
    <>
      {textData && (
        <Text
          className={cn(className, {
            invisible: !messageShown,
            post: kind === 'post',
          })}
          as="span"
          data-testid={testId}
        >
          <span
            className={cn('message', {
              post: kind === 'post',
            })}
          >
            {getMessage()}
          </span>
          {status === 'fail' && (
            <>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
              <span className="reset-button" onClick={onTryAgain}>
                Попробуйте
                <br /> еще раз
                <span className="dot">.</span>
              </span>
            </>
          )}
        </Text>
      )}
    </>
  )
}

FormStateMessage.propTypes = {
  status: oneOf(['pending', 'submitting', 'success', 'fail']),
  onTryAgain: func,
  testId: string.isRequired,
  kind: string,
}

export default styled(FormStateMessage)`
  ${styles}
`
