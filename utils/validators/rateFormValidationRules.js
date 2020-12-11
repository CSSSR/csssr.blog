import { composeValidators, email, required } from './index'

export default (values) => ({
  email: composeValidators(required, email)(values.email),
})
