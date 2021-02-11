import React from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './FormStateMessage.styles'
import { func, oneOf, string } from 'prop-types'
import { Text } from '@csssr/core-design'

const FormStateMessage = ({ className, status, testId, onTryAgain }) => {
  
  const getTextData = () => {
    if (status === 'success') {
      return {
        message: 'Ура! Вы подписались на рассылку.',
      }
    } else if (status === 'fail') {
      return {
        message: 'Упс, что-то пошло не так.',
      }
    }

    return null
  }

  const textData = getTextData()
  const messageShown = status === 'success' || status === 'fail'

  return (
    <>
      {textData && (
        <Text
          className={cn(className, {
            invisible: !messageShown,
          })}
          as="span"
          data-testid={testId}
        >
          <span className="message">
            {textData.message}
          </span> 
          {status === 'fail' && 
            <>
              <span className="reset-button" onClick={() => onTryAgain()}>Попробуйте<br/> еще раз</span>
              <span>.</span>
            </>
          }
        </Text>
      )}
    </>
  )
}

FormStateMessage.propTypes = {
  status: oneOf(['pending', 'submitting', 'success', 'fail']),
  errorText: string,
  onTryAgain: func,
  testId: string.isRequired,
}

export default styled(FormStateMessage)`
  ${styles}
`
