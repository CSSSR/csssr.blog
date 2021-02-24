import { useState } from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import { Field, Form as ReactFinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import styled from '@emotion/styled'
import styles from './ContactForm.styles'
import { AnimatedButton } from '@csssr/core-design'
import TextField from './TextField'
import FormStateMessage from './FormStateMessage'
import testEmails from '../../utils/testEmails'
import rateFormValidationRules from '../../utils/validators/rateFormValidationRules'

const Component = ({
  className,
  kind,
  inputValueLength,
  setInputValueLength,
  isMessageHidden,
  setMessageHidden,
  formName,
  submitting,
  submitFailed,
  submitSucceeded,
  submitError,
  onSubmitResolve,
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

      return 'success'
    }

    return 'pending'
  }

  // const handleSubmit = (e) => {
  //   const submitResult = props.handleSubmit(e)

  //   if (submitResult) {
  //     setSubmittedToServerStatus(true)

  //     return submitResult.then(() => {
  //       reset()

  //       if (onSubmitResolve) {
  //         onSubmitResolve(getStatus())
  //       }

  //       if (submitSucceeded) {
  //         reset()
  //       }
  //     })
  //   }
  // }

  const handleSubmit = (e) => {
    // Может быть undefined если были ошибки валидации
    // или Promise если запрос отправлен
    const submitResult = props.handleSubmit(e)

    if (submitResult) {
      setSubmittedToServerStatus(true)

      return submitResult.then(() => {
        if (onSubmitResolve) {
          onSubmitResolve(getStatus())
        }

        if (submitSucceeded) {
          reset()
        }
      })
    }
  }

  const handleTryToFillFormAgain = () => setSubmittedToServerStatus(false)
  const status = getStatus()

  const handleInputChange = (e) => {
    setInputValueLength && setInputValueLength(e.target.value.length)
  }

  return (
    <div className={cn(`${className}`, { news: kind === 'news', post: kind === 'post' })}>
      <form onSubmit={handleSubmit}>
        <div className="wrapper">
          <div>
            <Field
              name="email"
              render={({ input, meta }) => (
                <TextField
                  onInput={handleInputChange}
                  onFocus={() => setMessageHidden && setMessageHidden(false)}
                  input={input}
                  meta={meta}
                  label="e-mail"
                  testId={`${formName}:field:newsletter.email`}
                />
              )}
            />
          </div>

          <div
            className={cn('buttonWrapper', {
              success: status === 'success',
              fail: status === 'fail',
            })}
          >
            <AnimatedButton
              kind="secondary"
              className="submit"
              type="submit"
              disabled={status === 'submitting' || status === 'fail'}
              status={status}
              testId={`${formName}:button.formSubmit`}
            >
              <span className="submit-text">Подписаться</span>
            </AnimatedButton>

            <FormStateMessage
              kind={kind}
              status={status}
              errorText={submitError}
              onTryAgain={handleTryToFillFormAgain}
              testId={`${formName}:text.${submittedToServer ? 'successMessage' : 'failMessage'}`}
            />
          </div>
        </div>

        <p
          className={cn('policy', {
            visible: !isMessageHidden,
          })}
          dangerouslySetInnerHTML={{
            __html: `Отправляя данную форму, я подтверждаю своё согласие на получение рекламных и информационных материалов, а также факт своего ознакомления и согласия с <a class="link" href="https://csssr.com/ru/privacy-policy" target="_blank">Политикой конфиденциальности<a/>`,
          }}
        />

        <div
          className={cn('buttonWrapper_mobile', {
            success: status === 'success',
          })}
        >
          <AnimatedButton
            kind="secondary"
            className="submit"
            type="submit"
            disabled={status === 'submitting' || status === 'fail'}
            status={status}
            testId={`${formName}:button.formSubmit`}
          >
            <span className="submit-text">Подписаться</span>
          </AnimatedButton>

          <FormStateMessage
            status={status}
            errorText={submitError}
            onTryAgain={handleTryToFillFormAgain}
            testId={`${formName}:text.${submittedToServer ? 'successMessage' : 'failMessage'}`}
          />
        </div>
      </form>
    </div>
  )
}

Component.propTypes = {
  className: string,
}

const Form = ({ 
  className,
  kind, 
  inputValueLength,
  setInputValueLength,
  isMessageHidden, 
  setMessageHidden, 
  BENCHMARK_EMAIL_TOKEN, 
  BENCHMARK_EMAIL_LIST_ID 
}) => {
  const onSubmit = async (values) => {
    let res
    const isTestEmail = testEmails.includes(values.email)
    const shouldSendDataLayerEvent = window.dataLayer && !isTestEmail
    const dataLayerEventNamePrefix = 'subscribe'
    const submitUrl = `https://clientapi.benchmarkemail.com/Contact/${BENCHMARK_EMAIL_LIST_ID}/ContactDetails`

    try {
      res = await fetch(submitUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          AuthToken: BENCHMARK_EMAIL_TOKEN,
        },
        body: JSON.stringify({
          Data: {
            Email: values.email,
            EmailPerm: 1,
          },
        }),
      })
    } catch {
      if (shouldSendDataLayerEvent) {
        window.dataLayer.push({ event: dataLayerEventNamePrefix + '_fail' })
      }

      return { [FORM_ERROR]: 'Что-то пошло не так.' }
    }

    if (res.status === 201) {
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
      inputValue={inputValueLength}
      setInputValueLength={setInputValueLength}
      isMessageHidden={isMessageHidden}
      setMessageHidden={setMessageHidden}
      formName="newsletter"
      component={Component}
      validate={rateFormValidationRules}
      onSubmit={onSubmit}
    />
  )
}

export default styled(Form)`
  ${styles}
`
