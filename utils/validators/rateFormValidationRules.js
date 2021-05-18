import { composeValidators, email, required } from '.'

export default (values) => ({
  email: composeValidators(required, email)(values.email),
})
