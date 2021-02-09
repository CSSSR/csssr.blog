import React, { PureComponent } from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './FormStateMessage.styles'
import { func, oneOf, string } from 'prop-types'
import { Text } from '@csssr/core-design'

class FormStateMessage extends PureComponent {
  static propTypes = {
    status: oneOf(['pending', 'submitting', 'success', 'fail']),
    errorText: string,
    onTryAgain: func,
    testId: string.isRequired,
  }

  getTextData = () => {
    const { status } = this.props

    if (status === 'success') {
      return {
        message: 'Ура! Вы подписались на рассылку.',
      }
    } else if (status === 'fail') {
      return {
        message: 'Упс, что-то пошло не так. Попробуйте ещё раз.',
      }
    }

    return null
  }

  render() {
    const { className, status, testId } = this.props
    const textData = this.getTextData()
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
            {textData.message}
          </Text>
        )}
      </>
    )
  }
}

export default styled(FormStateMessage)`
  ${styles}
`
