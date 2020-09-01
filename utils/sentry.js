const Sentry = require('@sentry/browser')

/**
 * Если потребуется отправить с develop окружения что-то в Sentry, то можно
 * на месте сделать Sentry.init() и Sentry.captureMessage()
 */

if (process.env.IS_PRODUCTION) {
  Sentry.init({
    dsn: 'https://d78d5bfb6f5a4480abe1b0b0040407fd@o208877.ingest.sentry.io/5257831',
    environment: 'production',
    attachStacktrace: true,
  })
}
