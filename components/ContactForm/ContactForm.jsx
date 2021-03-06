import { AnimatedButton } from '@csssr/core-design'
import styled from '@emotion/styled'
import cn from 'classnames'
import { FORM_ERROR } from 'final-form'
import { string } from 'prop-types'
import { useState } from 'react'
import { Field, Form as ReactFinalForm } from 'react-final-form'
import Fade from 'react-reveal/Fade'

import testEmails from '../../utils/testEmails'
import rateFormValidationRules from '../../utils/validators/rateFormValidationRules'

import styles from './ContactForm.styles'
import FormStateMessage from './FormStateMessage'
import TextField from './TextField'

const Component = ({
  className,
  kind,
  isMobile,
  isMessageHidden,
  setMessageHidden,
  formName,
  submitting,
  submitFailed,
  submitError,
  form: { reset },
  ...props
}) => {
  const [submittedToServer, setSubmittedToServerStatus] = useState(false)

  const getStatus = () => {
    if (submitting) {
      return 'submitting'
    }

    if (submittedToServer) {
      if (submitFailed) {
        return 'fail'
      }

      if (setMessageHidden) {
        setMessageHidden(true)
      }

      return 'success'
    }

    return 'pending'
  }

  const handleSubmit = (e) => {
    // Может быть undefined если были ошибки валидации
    // или Promise если запрос отправлен
    const submitResult = props.handleSubmit(e)

    if (submitResult) {
      setSubmittedToServerStatus(true)

      return submitResult.then((data) => {
        if (!data || !data['FINAL_FORM/form-error']) {
          reset()
        }
      })
    }
  }

  const handleMessageFocus = () => {
    if (setMessageHidden) {
      setMessageHidden(false)
    }
  }

  const handleMessageBlur = (elem) => {
    if (!elem.value && setMessageHidden) {
      setMessageHidden(true)
    }
  }

  const handleTryToFillFormAgain = () => setSubmittedToServerStatus(false)
  const status = getStatus()

  return (
    <div
      className={cn(String(className), {
        news: kind === 'news',
        post: kind === 'post',
        mainPage: kind !== 'news' && kind !== 'post',
      })}
    >
      <form onSubmit={handleSubmit}>
        <div className="wrapper">
          <div>
            <Field
              name="email"
              render={({ input, meta }) => (
                <TextField
                  onFocus={() => handleMessageFocus()}
                  onBlur={() => handleMessageBlur(input)}
                  input={input}
                  meta={meta}
                  label="e-mail"
                  testId={`${formName}:field:email`}
                />
              )}
            />
          </div>

          <div
            className={cn('buttonWrapper', {
              success: status === 'success',
              fail: status === 'fail',
              submitting: status === 'submitting',
            })}
          >
            <AnimatedButton
              kind="secondary"
              className="submit"
              type="submit"
              disabled={status === 'submitting' || status === 'fail'}
              status={status}
              testId={`${formName}:button:submit`}
            >
              <span className="submit-text">Подписаться</span>
            </AnimatedButton>

            <FormStateMessage
              kind={kind}
              status={status}
              errorText={submitError}
              onTryAgain={handleTryToFillFormAgain}
              testId={`${formName}:text:${submittedToServer ? 'success' : 'fail'}`}
            />
          </div>
        </div>
        <Fade duration={400} collapse when={isMobile || !isMessageHidden}>
          <p className="policy">
            Отправляя данную форму, я&nbsp;подтверждаю своё согласие на&nbsp;получение рекламных
            и&nbsp;информационных материалов, а&nbsp;также факт своего ознакомления и согласия с
            <a
              className="subscribe-policy-link"
              href="https://csssr.com/ru/privacy-policy"
              target="_blank"
              data-testid={`${formName}:link:privacyPolicy`}
              rel="noreferrer"
            >
              {' '}
              Политикой конфиденциальности
            </a>
          </p>
        </Fade>
        <div
          className={cn('buttonWrapper_mobile', {
            success: status === 'success',
            fail: status === 'fail',
            submitting: status === 'submitting',
            pending: status === 'pending',
          })}
        >
          <AnimatedButton
            kind="secondary"
            className="submit"
            type="submit"
            disabled={status === 'submitting' || status === 'fail'}
            status={status}
            testId={`${formName}:button:submit`}
          >
            <span className="submit-text">Подписаться</span>
          </AnimatedButton>

          <FormStateMessage
            status={status}
            kind={kind}
            errorText={submitError}
            onTryAgain={handleTryToFillFormAgain}
            testId={`${formName}:text:${submittedToServer ? 'success' : 'fail'}`}
          />
        </div>
      </form>
    </div>
  )
}

Component.propTypes = {
  className: string,
}

const Form = ({ className, kind, isMobile, isMessageHidden, setMessageHidden }) => {
  const onSubmit = async (values) => {
    let res
    const isTestEmail = testEmails.includes(values.email)
    const shouldSendDataLayerEvent = window.dataLayer && !isTestEmail
    const dataLayerEventNamePrefix = 'subscribe'
    const submitUrl = `${process.env.COM_HOST}/api/subscribe-for-newsletter`

    try {
      res = await fetch(submitUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
        }),
      })
    } catch {
      if (shouldSendDataLayerEvent) {
        window.dataLayer.push({ event: dataLayerEventNamePrefix + '_fail' })
      }

      return { [FORM_ERROR]: 'Что-то пошло не так.' }
    }

    if (res.status === 200) {
      if (shouldSendDataLayerEvent) {
        window.dataLayer.push({ event: dataLayerEventNamePrefix + '_success' })
      }
    } else {
      let error
      try {
        const response = await res.json()
        error = typeof response.error !== 'string' ? JSON.stringify(response.error) : response.error
      } catch {
        error = 'Что-то пошло не так.'
      }

      if (shouldSendDataLayerEvent) {
        window.dataLayer.push({ event: dataLayerEventNamePrefix + '_fail' })
      }

      return { [FORM_ERROR]: error }
    }
  }

  return (
    <ReactFinalForm
      className={className}
      kind={kind}
      isMobile={isMobile}
      isMessageHidden={isMessageHidden}
      setMessageHidden={setMessageHidden}
      formName="NewsletterForm"
      component={Component}
      validate={rateFormValidationRules}
      onSubmit={onSubmit}
    />
  )
}

export default styled(Form)`
  ${styles}
`
