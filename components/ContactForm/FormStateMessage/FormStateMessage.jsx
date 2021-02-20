import React from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './FormStateMessage.styles'
import { func, oneOf, string } from 'prop-types'
import { Text } from '@csssr/core-design'

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
            post: kind === 'post'
          })}
          as="span"
          data-testid={testId}
        >
          <span className={cn('message', {
            post: kind === 'post'
          })}>{getMessage()}</span>
          {status === 'fail' && (
            <>
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
  kind: string
}

export default styled(FormStateMessage)`
  ${styles}
`
